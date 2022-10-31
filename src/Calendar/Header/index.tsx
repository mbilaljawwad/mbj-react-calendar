import { FC } from 'react';
import styles from './Header.module.scss';

export type HeaderProps = {
  currenMonth: string;
};
const Header: FC<HeaderProps> = ({ currenMonth }) => {
  return (
    <div className={styles.root}>
      <button className={styles.button}>&#8592;</button>
      <h2>{currenMonth}</h2>
      <button className={styles.button}>&#8594;</button>
    </div>
  );
};

export default Header;
