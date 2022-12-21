import AddTodo from '../Form/AddTodo';
import TodoList from '../TodoList/TodoList';

function Main() {

  return (
    <>
      <div className="container mx-auto w-50">
        <div className="row">
          <div className="col">
            <div className="d-flex p-3">
              <h1>To-Do List with Redux</h1>
            </div>
          </div>
        </div>
        <AddTodo />
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
