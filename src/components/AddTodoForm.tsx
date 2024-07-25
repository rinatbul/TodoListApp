import React, { useState } from 'react';
import styles from '../styles/AddTodoForm.module.scss';

interface AddTodoFormProps {
    addTodo: (todo: string) => void;
}

export const AddTodoForm = ({ addTodo }:AddTodoFormProps) => {
    const [todo, setTodo] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (!todo || todo.trim() === '') {
            setError('Название задачи не может быть пустым или состоять только из пробелов');
            return;
        }
        addTodo(todo);
        setTodo('');
        setError('');
    };

    return (
        <div>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={onSubmitHandler} className={styles.addTodoForm}>
                <input
                    type="text"
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                    placeholder="Добавить новую задачу"
                />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

