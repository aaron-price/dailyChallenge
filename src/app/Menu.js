import React from 'react'
import './App.scss'
import { Link } from 'react-router-dom'
import contents from "../contents"
import { connect } from 'react-redux'

function linkFactory(){
    return contents.map((content, key) => {
        return content.hasOwnProperty("component")
            ? <li key={key}><Link to={`/${content.title.toLowerCase()}`}
        >day {content.day} {content.title}</Link></li>

            : <li key={key}><a href={`/../${content.day}-${content.title.toLowerCase()}/index.html`}
        >day {content.day} {content.title}</a></li>
    })
}

const Menu = props => {
    return (
        <div className={`header header--${props.headerColor}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                {linkFactory()}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        headerColor: state.headerColor
    }
}

export default connect(mapStateToProps)(Menu)