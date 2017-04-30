import { UPDATE_OPTIONS, UPDATE_HEADER } from '../actions/actions'

const DEFAULT_STATE = {
    headerColor: "green"
}

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case UPDATE_HEADER:
            return Object.assign({}, state, action.config)


        default:
            return state
    }
}

export default rootReducer
