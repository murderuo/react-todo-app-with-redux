import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTodo() {
  const [error, setError] = useState('');
  const todoInputRef = useRef();
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    const inputValue = todoInputRef.current.value;
    if (inputValue === '') {
      setError('gerekli');
    } else {
      setError('');
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      todoInputRef.current.value = '';
    }

    // console.log(inputValue);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12 ">
          <div className="d-flex justify-content-center gap-3 border p-2 container-with">
            <input
              className="w-50 p-2"
              type="text"
              name=""
              id=""
              ref={todoInputRef}
            />
            <button
              className="btn-outline-success p-3 btn btn-success text-light"
              onClick={addTodoHandler}
            >
              Add
            </button>
          </div>
          <div className="error">{error}</div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
