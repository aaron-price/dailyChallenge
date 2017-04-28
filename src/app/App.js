import React from 'react'
//import logo from './logo.svg';
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//Routes
import Home from "./Home"
import contents from "./contents"

function linkFactory(){
    return contents.map((content) => {
        return content.hasOwnProperty("component")
            ? <li><Link to={`/${content.title.toLowerCase()}`}
                >day {content.day} {content.title}</Link></li>

            : <li><a href={`/../${content.day}-${content.title.toLowerCase()}/index.html`}
                >day {content.day} {content.title}</a></li>
    })
}
function routeFactory(){
    return contents.map((content) => {
        return content.hasOwnProperty("component")
            && <Route path={`/${content.title}`} component={content.component}/>
    })
}


const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                {linkFactory()}
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            {routeFactory()}
        </div>
    </Router>
)
export default BasicExample