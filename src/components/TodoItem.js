import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import toast from 'react-hot-toast';
import TodoModal from './TodoModal';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [updateModalOpen, setUpdateModalOpen] = useState(false);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
        toast.success('Todo Deleted Successfully');
    }

    const handleUpdate = () => {
        console.log('Update');
        setUpdateModalOpen(true);
    }


    return (
        <>
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
                    <div className={styles.icon}
                      onClick={handleDelete}
                      onKeyDown={handleDelete}
                      role="button"
                      tabIndex={0}>
                        <MdDelete></MdDelete>
                    </div>
                    <div className={styles.icon}
                      onClick={handleUpdate}
                      onKeyDown={handleUpdate}
                      role="button"
                      tabIndex={0}>
                        <MdEdit></MdEdit>
                    </div>
                </div>
            </div>
            <TodoModal
                type="update"
                modalOpen={updateModalOpen} 
                setModalOpen={setUpdateModalOpen}
            />
        </>
    );
};

export default TodoItem;    