import React from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';

const AppHeader = () => {
    return (
        <div className={styles.appHeader}>
            <Button variant="primary">Click me</Button>
            <SelectButton id="status">
                <option value="all">ALL</option>
                <option value="incomplete">incomplete</option>
                <option value="complete">complete</option>
            </SelectButton>
        </div>
    );
};

export default AppHeader;