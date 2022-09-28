/* globals describe, expect, test */

import { createAppTester, tools } from 'zapier-platform-core'
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals'

import App from '../src/index'

const appTester = createAppTester(App)
tools.env.inject()

describe('movie', () => {
    test('create a movie', async () => {
        const bundle = { inputData: { title: 'hello', year: 2020 } }
        const result = await appTester(
            App.creates.movie.operation.perform,
            bundle
        )
        expect(result).toMatchObject({
            title: 'hello',
            year: 2020
        })
    })
})
