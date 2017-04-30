import { UPDATE_HEADER } from './actions'

export function updateHeader(config) {
    return { type: UPDATE_HEADER, config}
}