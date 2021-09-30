/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'c-o-s-controller'
const service = 'xbt-platform-file-service'

export const COSControllerController = {
    // 创建临时Secret
    createTempSecret: {
        service,
        controller,
        path: '/api/COSController/createTempSecret/{bucketName}',
        action: 'createTempSecret',
        type: RequestMethod.Post
    },
    // 创建临时上传链接
    createUploadUrl: {
        service,
        controller,
        path: '/api/COSController/createUploadUrl/{bucketName}',
        action: 'createUploadUrl',
        type: RequestMethod.Post
    },
    // fileUpload
    fileUpload: {
        service,
        controller,
        path: '/api/COSController/fileUpload/{bucketName}',
        action: 'fileUpload',
        type: RequestMethod.Post
    },
    // 获取默认私有存储URL
    generateDefaultPrivateUrl: {
        service,
        controller,
        path: '/api/COSController/generateDefaultPrivateUrl/{objectKey}',
        action: 'generateDefaultPrivateUrl',
        type: RequestMethod.Get
    },
    // 获取授权URL
    generatePresignedUrl: {
        service,
        controller,
        path: '/api/COSController/generatePresignedUrl/{bucketName}/{objectKey}',
        action: 'generatePresignedUrl',
        type: RequestMethod.Get
    },
    // uploadToDefaultPrivate
    uploadToDefaultPrivate: {
        service,
        controller,
        path: '/api/COSController/uploadToDefaultPrivate',
        action: 'uploadToDefaultPrivate',
        type: RequestMethod.Post
    }
}
