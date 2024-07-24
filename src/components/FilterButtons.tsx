import React from 'react';
import styles from '../styles/FilterButtons.module.scss';

interface FilterButtonsProps {
    setFilter: (filter: string) => void;
}

export const FilterButtons = ({ setFilter }:FilterButtonsProps) => {
    return (
        <div className={styles.filterButtons}>
            <button onClick={() => setFilter('all')}>Все</button>
            <button onClick={() => setFilter('active')}>Активные</button>
            <button onClick={() => setFilter('completed')}>Выполненные</button>
        </div>
    );
};

