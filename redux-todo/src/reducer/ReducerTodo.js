import { ADD_TODO, DELETE_TODO } from "../actions/actionData";

const ReducerTodo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      let prevState = state;
      let newState = [];
      newState.push(...prevState);
      newState.push({ id: action.id, text: action.text });
      return newState;

    case DELETE_TODO:
      let deleteTodoId = state.filter(result => {
        return result.id !== action.id;
      });
      return deleteTodoId;

    default:
      return state;
  }
};

export default ReducerTodo;
