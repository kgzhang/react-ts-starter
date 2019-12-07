import './index.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

const render = Component => {
    ReactDOM.render(
        <App />,
        document.getElementById('app') as HTMLElement
    )
}

render(AppRouter)
