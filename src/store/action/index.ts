import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_FILTER } from "../actionTypes"

let nextID = 0

export const addTodoAction = (value: string) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextID,
        value
    }
})

export const deleteTodoAction = (index: number) => ({
    type: DELETE_TODO,
    index
})

export const toggleTodoAction = (id: string) => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
})

export const setFilterAction = (filter: string) => ({
    type: SET_FILTER,
    payload: {
        filter
    }
})