import { Bundle, ZObject } from 'zapier-platform-core'
import fs = require('fs')
import FormData = require('form-data')

const perform = async (z: ZObject, bundle: Bundle) => {
    const stream = fs.createReadStream('/Users/bukhbayar.purevsuren/Downloads/test-image.jpg')

    const form = new FormData()
    form.append('filename', bundle.inputData.filename)
    form.append('file', stream)

    const response = await z.request({
        method: 'POST',
        url: 'http://enod.ddns.net:8079/ocr',
        headers: {
            'content-type': 'multipart/form-data'
        },
        body: form
    })
    return response.data
}

export default {
    key: 'ocr',
    noun: 'Model',

    display: {
        label: 'New Model',
        description: 'Triggers when a new OCR model is called.'
    },

    operation: {
        inputFields: [
            {
                key: 'filename',
                required: true,
                type: 'string',
                label: 'Filename'
            },
            { key: 'file', required: true, type: 'file', label: 'File' }
        ],
        perform,
        sample: {
            id: '1',
            filename: 'test-image.jpg',
            file: '/Users/bukhbayar.purevsuren/Downloads/test-image.jpg'
        }
    }
}
