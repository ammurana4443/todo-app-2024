import { createContext, useReducer } from 'react'

const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});

const todoItemsRecducers = (currTodoIetms, action) => {
  let newTodoItems = currTodoIetms;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoIetms,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoIetms.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems
}

export const TodoItemsContextProvider = ({ children }) => {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsRecducers, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      }
    }
    dispatchTodoItems(newItemAction)
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>{children}
    </TodoItemsContext.Provider>
  )
}

export default TodoItemsContext;