import React from 'react';
import styles from './CustomButton.module.css';

type Props = {
  details: string;
};

const CustomButton: React.FC<Props> = ({ details }) => {  // 비구조화에서 props.details로 수정
  return (
    <button className={styles.button}>{details}</button>
  );
};

export default CustomButton;