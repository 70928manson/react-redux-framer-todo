import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
    primary: 'primary',
    secondary: 'secondary'
}

//children AppHeader button夾得字， type判斷button還是submit，variant 判斷button用哪一種class
const Button = ({ children, type, variant, ...rest }) => {
    return (
        <button className={getClasses([
            styles.button, 
            styles[`button--${buttonTypes[variant]}`]
            ])} 
        type={type === 'submit' ? 'submit' : 'button'}
        {...rest}>
            {children}
        </button>
    );
};

const SelectButton = ({ children, ...rest }) => {
    return (
        <select 
          className={getClasses([styles.button, 
          styles.button__select])}
          {...rest}>
            {children}
        </select>
    )
}
export { SelectButton };
export default Button;