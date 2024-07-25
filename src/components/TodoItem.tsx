import React from 'react';
import styles from '../styles/TodoItem.module.scss';

interface TodoItemProps {
    todo: { text: string; completed: boolean };
    index: number;
    removeTodo: (index: number) => void;
    toggleTodo: (index: number) => void;
}

export const TodoItem = ({todo, index, removeTodo, toggleTodo}: TodoItemProps) => {
    return (
        <div className={styles.todoItem}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
            />
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(index)}>Удалить</button>
        </div>
    );
};
