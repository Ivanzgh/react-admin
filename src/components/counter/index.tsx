import React, { useReducer, createContext, useContext } from 'react'

const countContext = createContext(null)

function Num() {
    const num = useContext(countContext)
    return <h1>children:{num}</h1>
}

const initialState = { count: 0 }

function reducer(state: any, action: {type: string}) {
    switch (action.type) {
        case 'decrement':
            return { count: state.count + 1 }
        case 'increment':
            return { count: state.count - 1 }
        default:
            return state
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <countContext.Provider value={state.count}>
                <Num />
            </countContext.Provider>

            <h3>father:{state.count}</h3>

            <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
            <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
        </>
    )
}

export default Counter