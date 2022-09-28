import { Bundle, HttpRequestOptions, ZObject } from 'zapier-platform-core'
const fs = require('fs')
const request = require('request')

const options = {
    // method: 'POST',
    url: 'http://enod.ddns.net:8079/ocr'
    // headers: {'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'},
}

const perform = async (z: ZObject, bundle: Bundle) => {
    const response = await z.request(options)
    return response.data
    // return response.then((response) => response.data);
}

export default {
    key: 'OCR Model',
    noun: 'OCR Model',

    display: {
        label: 'New Model',
        description: 'Triggers when a new OCR model is created.'
    },

    operation: {
        perform,
        sample: {
            id: '1',
            title: 'example'
        }
    }
}
