import React from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import contents from "../contents"
import Home from "./Home"

function routeFactory(){
    return contents.map((content, key) => {
        return content.hasOwnProperty("component")
            && <Route key={key} path={`/${content.title}`} component={content.component}/>
    })
}
const Body = props => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            {routeFactory()}
        </div>
    )
}

export default Body