import 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import 'style-loader!css-loader!normalize.css'

import React from 'react'
import { render } from 'react-dom'

const App = () => <div>Hello</div>
const Hot = hot(App)

render(<Hot />, document.getElementById('app'))
