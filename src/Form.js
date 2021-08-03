import React, { useState } from 'react'



const Form = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() === '') return alert('文字を入れてください');
        addTodo(value)
        setValue('')
    };
    let textClear = e => {
        e.target.value = "";

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={e => setValue(e.target.value)}
                placeholder='タスクを入力…'
            />
            <button disabled={textClear()} >送信</button>
        </form>
    )



}


export default Form;