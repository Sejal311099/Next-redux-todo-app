import React from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} button>
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            color="success"
          />
          <ListItemText
            primary={todo.text}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          />
          <IconButton
            color="error"
            aria-label="Delete"
            onClick={() => deleteTodo(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
