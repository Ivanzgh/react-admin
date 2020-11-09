import { SET_FILTER } from '../actionTypes'

export interface Visibility_filters {
    ALL: string;
    COMPLETED: string;
    INCOMPLETE: string;
}

const VISIBILITY_FILTERS: Visibility_filters = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
};

const visibilityFilter = (state = VISIBILITY_FILTERS.ALL, action: any) => {
    if (action.type === SET_FILTER) {
        return action.payload.filter
    }
    return state
}

export default visibilityFilter