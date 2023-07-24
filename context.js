import { createContext, useState, useContext } from "react";

const Context = createContext();
export const useGlobalContext = () => useContext(Context);

export const AppContext = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTabName, setSelectedTabName] = useState("all");

  return (
    <Context.Provider
      value={{
        isShow,
        setIsShow,
        isComplete,
        setIsComplete,
        todos,
        setTodos,
        todo,
        setTodo,
        selectedTabName,
        setSelectedTabName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
