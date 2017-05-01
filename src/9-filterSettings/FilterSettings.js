import React from "react"
import { tags } from "../contents"
import { connect } from "react-redux"
import { updateFilters } from "../redux/actions/actionCreators"
import PropTypes from "prop-types"
import { fromJS } from "immutable"
import ImmutablePropTypes from "react-immutable-proptypes"

const FilterSettings = props => {
    const tags = props.stateContent.get("tags")
    return (
        <div className="webpackOptions">
            <h1>Options</h1>
            <ul>{tags.valueSeq().map((tag, key) => {
                return (
                    <li key={key}>{tag.get("title")}&nbsp;
                        <select value={tag.get("filter")}
                                onChange={(e) => props.dispatchUpdateFilters(tag.get("title"), e.target.value)}
                        >
                            <option value="allowed">allowed</option>
                            <option value="disallowed">disallowed</option>
                            <option value="required">required</option>
                    </select></li>
                )
            })}</ul>

            <div>
                <h4>Required</h4>
                <ul>{tags.valueSeq().map((tag, key) => {
                    return tag.get("filter") === "required" && <li key={key}>{tag.get("title")}</li>
                })}</ul>
            </div>

            <div>
                <h4>Allowed</h4>
                <ul>{tags.valueSeq().map((tag, key) => {
                    return tag.get("filter") === "allowed" && <li key={key}>{tag.get("title")}</li>
                })}</ul>
            </div>

            <div>
                <h4>Disallowed</h4>
                <ul>{tags.valueSeq().map((tag, key) => {
                    return tag.get("filter") === "disallowed" && <li key={key}>{tag.get("title")}</li>
                })}</ul>
            </div>
        </div>
    )
}
FilterSettings.propTypes = {
    stateContent: ImmutablePropTypes.map,
    dispatchUpdateFilters: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        headerColor: state.get("headerColor"),
        stateContent: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateFilters(tag, newFilter) {
            dispatch(updateFilters(tag, newFilter))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSettings)