import React, { createContext, useContext, useState } from 'react'

export const Todo = createContext({
    todos : [
        {
            id : 1,
            todo : "Todo msg",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});


export const TodoProvider = Todo.Provider;

export const useTodo = () => {
    return useContext(Todo);
}