import {createContext, useContext} from "react";

export const TodoContext = createContext({
    //properties
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            complated: false,
        }
    ],
    //functionalities/methods
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const TodoProvider = TodoContext.Provider


export const useTodo = () => {
    return useContext(TodoContext)
}