import { useContext } from 'react';
import styles from "./WelcomeMessage.module.css";
import TodoItemsContext from '../store/TodoItemsContext';



const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    !todoItems.length && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;
