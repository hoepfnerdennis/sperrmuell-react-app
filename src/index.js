import React from 'react'
import ReactDOM from 'react-dom'
import { createRenderer } from 'fela'
import { Provider, ThemeProvider } from 'react-fela'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const renderer = createRenderer()

ReactDOM.render(
    <Provider renderer={renderer}>
        <ThemeProvider
            theme={{ color: { primary: '#f4511e', secoundary: '#8bc34a' } }}
        >
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
