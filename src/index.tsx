import './index.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'

import AppRouter from '@shared/App'

const hashHistory = createHashHistory()

const render = Component => {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Component />
        </Router>,
        document.getElementById('app') as HTMLElement
    )
}

render(AppRouter)
