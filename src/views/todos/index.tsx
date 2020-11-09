import React, { useState, useEffect, useCallback } from 'react'
import { Button, Input, List, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { addTodoAction, deleteTodoAction, toggleTodoAction, setFilterAction } from '../../store/action'

interface RootState {
    todos: {
        allIds: number[];
        byIds: {};
    }
}

function Todos() {
    const [inputValue, setInputValue] = useState<string>('')
    const todoState = useSelector((state: RootState) => state.todos.allIds)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     console.log('effect');
    //     setTodoState(storeState)
    // })

    const changeInputValue = (e: any) => {
        setInputValue(e.target.value)
    }

    const clickBtn = () => {
        if (inputValue !== null) {
            const action = addTodoAction(inputValue)
            dispatch(action)
            setInputValue('')
        }
    }

    const deleteItem = (index: number) => {
        const action = deleteTodoAction(index)
        dispatch(action)
    }

    const onChange = (e: any) => {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <div>
                <Input
                    placeholder={inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={changeInputValue}
                    value={inputValue}
                />
                <Button
                    type="primary"
                    onClick={clickBtn}
                >Add Todo</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={todoState}
                    renderItem={(item: any, index: number) => (
                        <List.Item onClick={() => deleteItem(index)}>
                            <Checkbox onChange={onChange}>{item}</Checkbox>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default Todos;