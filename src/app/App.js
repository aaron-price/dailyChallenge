import React from 'react'
//import logo from './logo.svg';
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Menu from "./Menu"
import Body from "./Body"



const App = (props) => (
    <Router>
        <Provider store={props.store}>
            <div>
                <Menu />
                <hr/>
                <Body />
            </div>
        </Provider>
    </Router>
)
export default App