import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import styles from '../styles/modules/app.module.scss';

const AppContent = () => {
    const todoList = useSelector(state => state.todo.todoList);
    const filterStatus = useSelector(state => state.todo.filterStatus); 
    console.log('todoList: ', todoList);

    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => {
        new Date(b.time) - new Date(a.time);
    });

    const filteredTodoList = sortedTodoList.filter((todo) => {
        if (filterStatus === 'all') {
            return true;
        }
        return todo.status === filterStatus;
    })

    return (
        <div className={styles.content__wrapper}>
            {filteredTodoList && filteredTodoList.length > 0 
            ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo}></TodoItem>)
            : 'no todo found'}
        </div>
    );
};

export default AppContent;