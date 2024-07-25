import React, { useState, useEffect } from 'react';
import {TodoItem} from './TodoItem';
import {AddTodoForm} from './AddTodoForm';
import {FilterButtons} from './FilterButtons';
import styles from '../styles/TodoList.module.scss';

interface Todo {
    text: string;
    completed: boolean;
}

export const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<string>('all');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos, isLoading]);

    const addTodo = (text: string) => {
        setTodos([{ text, completed: false }, ...todos]);
    };

    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    return (
        <div className={styles.todoList}>
            <h1>Список дел</h1>
            <AddTodoForm addTodo={addTodo} />
            <FilterButtons setFilter={setFilter} />
            {filteredTodos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    );
};


