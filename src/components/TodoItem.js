import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';

const TodoItem = ({ todo }) => {
    return (
        <div className={styles.item}>
            <div className={styles.todoDetails}>
                []
                <div className={styles.texts}>
                    <p className={getClasses([styles.todoText,
                        todo.status === 'complete' && styles['todoText--completed'],
                    ])}
                    >
                        {todo.title}
                    </p>
                    <p className={styles.time}>{todo.time}</p>
                </div>
            </div>
            <div className={styles.todoActions}>
                <div className={styles.icon}>
                    <MdDelete></MdDelete>
                </div>
                <div className={styles.icon}>
                    <MdEdit></MdEdit>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;    