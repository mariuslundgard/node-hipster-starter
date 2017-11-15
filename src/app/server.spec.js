// @flow

import express from 'express'
import supertest from 'supertest'
import * as server from './server'

describe('app', () => {
  it('should respond with a rendered component', () => {
    const app = express()

    app.use(
      server.create({
        manifest: {
          'app.js': 'app.js',
          'app.css': 'app.css'
        }
      })
    )

    return supertest(app)
      .get('/')
      .then(res => {
        expect(res.text).toContain('<title>App</title>')
        expect(res.text).toContain('<link rel="stylesheet" href="/app.css">')
        expect(res.text).toContain(
          '<div class="node-hipster-starter-app"><h1>App</h1><iframe src="/frame"></iframe></div>'
        )
        expect(res.text).toContain('<script src="/app.js"></script>')
      })
  })
})