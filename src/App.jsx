import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContextProvider } from '../src/store/TodoItemsContext';


function App() {

  return (
    <TodoItemsContextProvider>
      <div className='body-style'>
        <center className='todo-container'>
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </center>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;