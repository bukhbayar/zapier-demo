import { Bundle, ZObject } from 'zapier-platform-core'
import fs = require('fs')
import FormData = require('form-data')

const perform = async (z: ZObject, bundle: Bundle) => {
    const stream = fs.createReadStream(bundle.inputData.file)
    const form = new FormData()

    form.append('filename', bundle.inputData.filename)
    form.append('file', stream)

    stream.resume()

    const response = await z.request({
        url: 'http://enod.ddns.net:8079/ocr',
        method: 'POST',
        headers: {
            // 'Content-Type': 'multipart/form-data'
        },
        body: form
    })

    const content = z.JSON.parse(response.content.slice(1, -1))
    return content
}

export default {
    key: 'ocr',
    noun: 'Model',

    display: {
        label: 'Call OCR model',
        description: 'Call OCR model.'
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
            file: '/file.jpg'
        }
    }
}
