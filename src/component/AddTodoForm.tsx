"use client";
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center" gap={5}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Add New Todo"
          variant="outlined"
          size="small"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          aria-label="add todo"
          endIcon={<AddIcon />}
          disabled={!text.trim()}
        >
          Add
        </Button>
      </Box>
    </form>
  );
};

export default AddTodo;
