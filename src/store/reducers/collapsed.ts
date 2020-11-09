import { COLLAPSED_TOGGLE } from '../actionTypes'

const initialState: boolean = false
const collapsed = (state = initialState, action: any) => {
    switch (action.type) {
        case COLLAPSED_TOGGLE: {
            return {
                collapsed: !state
            }
        }
        default:
            return state;
    }
}

export default collapsed