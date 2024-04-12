import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actions";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Action {
  type: string;
  payload: any;
}

const todosReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, completed: false },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todosReducer;
