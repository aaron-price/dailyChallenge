import React from "react"
import { tags } from "../contents"

const FilterSettings = props => {
    return (<div>
            <h1>Filter Settings</h1>
            <ul>{tags.map(tag => {
                return (
                    <li>{tag} <select>
                        <option>allowed</option>
                        <option>disallowed</option>
                        <option>required</option>
                    </select></li>
                )
            })}</ul>
        </div>
    )
}
export default FilterSettings