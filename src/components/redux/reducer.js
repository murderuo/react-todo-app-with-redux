import { v4, v3 } from 'uuid';

const todoId = v4().slice(0, 4);
// const id = v3().slice(0, 4);
// console.log('id',id);

const initialTodoAppState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Build something fun!', completed: false },
  ],
};

export default function appReducer(state = initialTodoAppState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          { id: v4().slice(0, 4), text: action.payload, completed: false },
        ],
      };
    case 'DELETE_TODO':
      const deletedTodos = state.todos.filter(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
      });

      return {
        todos: [...deletedTodos],
      };

    case 'DONE_TODO':
      const completedTodos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: true } : todo,
      );

      return {
        todos: [...completedTodos],
      };

    case 'UNDONE_TODO':
      const unCompletedTodos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: false } : todo,
      );
        console.log(unCompletedTodos);
      return {
        todos: [...unCompletedTodos],
      };

    default:
      return state;
  }
}
