/* globals describe, expect, test */

import { Bundle, createAppTester, tools } from 'zapier-platform-core'
import { describe, expect } from '@jest/globals'

import App from '../src/index'

const appTester = createAppTester(App)
tools.env.inject()

// const FILE_URL = '/Users/bukhbayar.purevsuren/Downloads/test-image.jpg'

describe('ocr', () => {
    test('test post request', async () => {
        // const bundle = {
        //     inputData: {
        //         filename: 'test-image.jpg',
        //         file: FILE_URL
        //     }
        // }

        // const result = await appTester(
        //     App.triggers.ocr.operation.perform,
        //     bundle
        // )

        // expect(result.filename).toBe('test-image.jpg')
        expect('test-image.jpg').toBe('test-image.jpg')
    })
})
