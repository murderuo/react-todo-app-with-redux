import { useDispatch, useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector(state => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const deleteTodo = id => {
    console.log(id);
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const doneTodo = id => {
    dispatch({ type: 'DONE_TODO', payload: id });
  };

  const unDoneTodo = id => {
    dispatch({ type: 'UNDONE_TODO', payload: id });
  };
  return (
    <>
      {todos.map((todo) => (
        <div
          className=" d-flex mt-2 border container-with p-2 gap-2 justify-content-between align-items-center"
          key={todo.id}
        >
          <p className={todo.completed ? 'done' : ''}>{todo.text}</p>

          <div className="d-flex gap-2">
            {todo.completed ? (
              <button
                className="p-2 btn btn-success"
                onClick={() => unDoneTodo(todo.id)}
              >
                Completed
              </button>
            ) : (
              <button
                className="p-2 btn btn-danger"
                onClick={() => doneTodo(todo.id)}
              >
                NotCompleted
              </button>
            )}

            <button
              className="p-2 btn btn-outline-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
