import React from 'react'
import { connect } from 'react-redux'
import { updateHeader } from '../redux/actions/actionCreators'

const Menus = props => {
        return (
            <div className="webpackOptions">
                <h1>Options</h1>
                Menu Background Colour: &nbsp;
                <select
                    value={props.headerColor}
                    onChange={(e) => props.dispatchUpdateHeader({headerColor: e.target.value})}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        headerColor: state.headerColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateHeader(config) {
            dispatch(updateHeader(config))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menus)