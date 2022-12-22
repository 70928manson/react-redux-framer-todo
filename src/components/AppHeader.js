import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import TodoModal from './TodoModal';
import styles from '../styles/modules/app.module.scss';

const AppHeader = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.appHeader}>
            <Button variant="primary" onClick={() => setModalOpen(true)}>Add Task</Button>
            <SelectButton id="status">
                <option value="all">ALL</option>
                <option value="incomplete">incomplete</option>
                <option value="complete">complete</option>
            </SelectButton>
            <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}></TodoModal>
        </div>
    );
};

export default AppHeader;