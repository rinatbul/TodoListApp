import React, { useState } from 'react';
import styles from '../styles/AddTodoForm.module.scss';

interface AddTodoFormProps {
    addTodo: (todo: string) => void;
}

export const AddTodoForm = ({ addTodo }:AddTodoFormProps) => {
    const [todo, setTodo] = useState<string>('');

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (!todo) return;
        addTodo(todo);
        setTodo('');
    };

    return (
        <form onSubmit={onSubmitHandler} className={styles.addTodoForm}>
            <input
                type="text"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                placeholder="Добавить новое дело"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

