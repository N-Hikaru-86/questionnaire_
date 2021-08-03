import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = content => {
        //スプレッド構文
        setTodos([
            ...todos,
            {
                content: content,
                id: nanoid()
            }
        ])
    }
    //テスト関数:配列の要素(todo)のidと引数に取ったidと一致しないものがテストをパス
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))

    }

    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    )
}

export default App;