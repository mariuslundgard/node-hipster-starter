// @flow

import {create} from 'universal/client'
import {render} from 'preact'
import './index.css'
import * as routes from './routes'

const config = {
  manifest: {}
}

const rootElm: any = document.getElementById('root')

const handlers = {
  onNavigate (path) {
    client.open(path)
  }
}

const client = create({
  render (res) {
    document.title = `${res.title} (client)`
    render(res.body, rootElm, rootElm.firstChild)
  },
  routes: routes.create(config, handlers)
})

client.listen()
