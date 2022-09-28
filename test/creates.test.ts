/* globals describe, expect, test */

import { createAppTester, tools } from 'zapier-platform-core'
import { describe, expect } from '@jest/globals'
import App from '../src/index'
import path = require('path')

const appTester = createAppTester(App)
tools.env.inject()

const FILE_URL = path.resolve('test/rss/test-image.jpg')

describe('ocr', () => {
    test('call ocr model', async () => {
        const bundle = {
            inputData: {
                filename: 'test-image.jpg',
                file: FILE_URL
            }
        }

        const result = await appTester(App.creates.ocr.operation.perform, bundle)

        expect(result).toHaveProperty('pages')
    })
})
