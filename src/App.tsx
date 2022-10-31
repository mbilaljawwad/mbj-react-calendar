import styles from './App.module.scss';
import Calender from './Calendar/Root';

function App() {
  return (
    <div className={styles.root}>
      <Calender />
    </div>
  );
}

export default App;
