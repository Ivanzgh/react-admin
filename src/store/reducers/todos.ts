import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from "../actionTypes";

export interface ByIds {
    [key: number] : {
        value: string;
        completed: boolean;
    }
}

export interface InitialState {
    allIds: number[];
    byIds: ByIds;
}

const initialState: InitialState = {
    allIds: [],
    byIds: {}
};

const todos = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO: {
            const { id, value } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        value,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        case DELETE_TODO: {
            const { index } = action
            return state
        }
        default:
            return state;
    }
}


export default todos