"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../store/actions";
import { Container, Typography } from "@mui/material";
import TodoList from "../component/TodoList";
import AddTodo from "../component/AddTodoForm";

const Home: React.FC = () => {
  const todos = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>
      <AddTodo addTodo={handleAddTodo} />
      {todos.length === 0 ? (
        <Typography variant="h5" align="center" color='secondary' marginTop={5}>
          Your Todo list is empty..!
        </Typography>
      ) : (
        <TodoList
          todos={todos}
          toggleTodo={handleToggleTodo}
          deleteTodo={handleDeleteTodo}
        />
      )}
    </Container>
  );
};

export default Home;
