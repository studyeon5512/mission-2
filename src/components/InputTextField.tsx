import React from 'react';
import styles from './InputTextField.module.css';

type Props = {
  label?: string;
  placeholder?: string;
  type?: string;
  rightElement?: React.ReactNode; // 오른쪽에 들어갈 이미지나 텍스트
};

const InputTextField: React.FC<Props> = ({ label, placeholder, type = "text", rightElement }) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        <input className={styles.input} placeholder={placeholder} type={type} />
        {rightElement && <div className={styles.rightElement}>{rightElement}</div>}
      </div>
    </div>
  );
};

export default InputTextField;
