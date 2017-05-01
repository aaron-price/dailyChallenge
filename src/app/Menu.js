import React from "react"
import "./App.scss"
import { Link } from "react-router-dom"
import contents from "../contents"
import { connect } from "react-redux"
import PropTypes from "prop-types"

function linkFactory() {
    return contents.map((content, key) => {
        return content.get("component") !== undefined
            ? <li key={key}><Link to={`/${content.get("title").toLowerCase()}`}
        >day {content.get("day")} {content.get("title")}</Link></li>

            : <li key={key}><a href={`/../${content.get("day")}-${content.get("title").toLowerCase()}/index.html`}
        >day {content.get("day")} {content.get("title")}</a></li>
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
Menu.propTypes = {
    headerColor: PropTypes.string.isRequired,
}


const mapStateToProps = (state) => {
    return {
        headerColor: state.headerColor,
    }
}

export default connect(mapStateToProps)(Menu)