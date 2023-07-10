import React from "react";
import List from "@mui/material/List";
import TodoForm from "./TodoForm";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { Box } from "@mui/material";

const initialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) {
    return [];
  } else {
    return data;
  }
};

const TodosList = () => {
  const [todos, setTodos] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), text: text, completed: false },
      ];
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: " center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={() => removeTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
};

export default TodosList;

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {

//       })}
//     </List>
//   );
// }
