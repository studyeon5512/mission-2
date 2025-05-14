import React from 'react';
import styles from './InputSelectField.module.css'

type Props = {
  data: string[];
  name?: string;  // name을 props로 추가
  id?: string;    // id를 props로 추가
  label?: string;
};

const InputSelectField: React.FC<Props> = ({ data, name, id, label }) => {
  return (
    <div>    
       <label className={styles.label}>{label}</label>
        <select name={name} id={id} className={styles.selectField}>
            {data.map((i, index) => (
                <option key={index} value={i}>{i}</option>
            ))}
        </select>
    </div>
  );
};

export default InputSelectField;