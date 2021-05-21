/*!
 * axios-miniprogram-adapter 0.3.1 (https://github.com/bigMeow/axios-miniprogram-adapter)
 * API https://github.com/bigMeow/axios-miniprogram-adapter/blob/master/doc/api.md
 * Copyright 2018-2020 bigMeow. All Rights Reserved
 * Licensed under MIT (https://github.com/bigMeow/axios-miniprogram-adapter/blob/master/LICENSE)
 */

import utils from 'axios/lib/utils'
import settle from 'axios/lib/core/settle'
import buildURL from 'axios/lib/helpers/buildURL'
import buildFullPath from 'axios/lib/core/buildFullPath'
import createError from 'axios/lib/core/createError'

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
// encoder
function encoder(input) {
  var str = String(input)
  // initialize result and counter
  var block
  var charCode
  var idx = 0
  var map = chars
  var output = ''
  for (
    ;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || ((map = '='), idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))
  ) {
    charCode = str.charCodeAt((idx += 3 / 4))
    if (charCode > 0xff) {
      throw new Error(
        "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
      )
    }
    block = (block << 8) | charCode
  }
  return output
}

/**
 * 获取各个平台的请求函数
 */
function getRequest() {
  return (my && my.httpRequest.bind(my)) || (dd && dd.httpRequest.bind(dd))
}
/**
 * 处理各平台返回的响应数据，抹平差异
 * @param mpResponse
 * @param config axios处理过的请求配置对象
 * @param request 小程序的调用发起请求时，传递给小程序api的实际配置
 */
function transformResponse(mpResponse, config, mpRequestOption) {
  var headers = mpResponse.header || mpResponse.headers
  var status = mpResponse.statusCode || mpResponse.status
  var statusText = ''
  if (status === 200) {
    statusText = 'OK'
  } else if (status === 400) {
    statusText = 'Bad Request'
  }
  var response = {
    data: mpResponse.data,
    status: status,
    statusText: statusText,
    headers: headers,
    config: config,
    request: mpRequestOption
  }
  return response
}
/**
 * 处理各平台返回的错误信息，抹平差异
 * @param error 小程序api返回的错误对象
 * @param reject 上层的promise reject 函数
 * @param config
 */
function transformError(error, reject, config) {
  // https://docs.alipay.com/mini/api/network
  if ([14, 19].includes(error.error)) {
    reject(createError('Request aborted', config, 'ECONNABORTED', ''))
  } else if ([13].includes(error.error)) {
    // timeout
    reject(
      createError(
        'timeout of ' + config.timeout + 'ms exceeded',
        config,
        'ECONNABORTED',
        ''
      )
    )
  } else {
    // NetWordError
    reject(createError('Network Error', config, null, ''))
  }
}
/**
 * 将axios的请求配置，转换成各个平台都支持的请求config
 * @param config
 */
function transformConfig(config) {
  config.headers = config.header
  delete config.header
  return config
}

var warn = console.warn
var isJSONstr = function (str) {
  try {
    return (
      typeof str === 'string' &&
      str.length &&
      (str = JSON.parse(str)) &&
      Object.prototype.toString.call(str) === '[object Object]'
    )
  } catch (error) {
    return false
  }
}
function mpAdapter(config) {
  var request = getRequest()
  return new Promise(function (resolve, reject) {
    var requestTask
    var requestData = config.data
    var requestHeaders = config.headers
    // baidu miniprogram only support upperCase
    var requestMethod =
      (config.method && config.method.toUpperCase()) || 'GET'
    // miniprogram network request config
    var mpRequestOption: any = {
      method: requestMethod,
      url: buildURL(
        buildFullPath(config.baseURL, config.url),
        config.params,
        config.paramsSerializer
      ),
      // Listen for success
      success: function (mpResponse) {
        var response = transformResponse(
          mpResponse,
          config,
          mpRequestOption
        )
        settle(resolve, reject, response)
      },
      // Handle request Exception
      fail: function (error) {
        transformError(error, reject, config)
      },
      complete: function () {
        requestTask = undefined
      }
    }
    // HTTP basic authentication
    if (config.auth) {
      var _a = [config.auth.username || '', config.auth.password || ''],
        username = _a[0],
        password = _a[1]
      requestHeaders.Authorization =
        'Basic ' + encoder(username + ':' + password)
    }
    // Set the request timeout
    if (config.timeout !== 0) {
      warn(
        'The "timeout" option is not supported by miniprogram. For more information about usage see "https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#全局配置"'
      )
    }
    // Add headers to the request
    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
      var _header = key.toLowerCase()
      if (
        (typeof requestData === 'undefined' &&
          _header === 'content-type') ||
        _header === 'referer'
      ) {
        // Remove Content-Type if data is undefined
        // And the miniprogram document said that '设置请求的 header，header 中不能设置 Referer'
        delete requestHeaders[key]
      }
    })
    mpRequestOption.header = requestHeaders
    // Add responseType to request if needed
    if (config.responseType) {
      mpRequestOption.responseType = config.responseType
    }
    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!requestTask) {
          return
        }
        requestTask.abort()
        reject(cancel)
        // Clean up request
        requestTask = undefined
      })
    }
    // Converting JSON strings to objects is handed over to the MiniPrograme
    if (isJSONstr(requestData)) {
      requestData = JSON.parse(requestData)
    }
    if (requestData !== undefined) {
      mpRequestOption.data = ['POST'].includes(mpRequestOption.method)
        ? JSON.stringify(requestData)
        : requestData
    }

    mpRequestOption.dataType = 'json'
    requestTask = request(transformConfig(mpRequestOption))
  })
}

export default mpAdapter