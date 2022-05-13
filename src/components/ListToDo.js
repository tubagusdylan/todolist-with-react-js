import { BsXLg, BsPencil } from "react-icons/bs";

const ListToDo = (props) => {
  const removeToDo = (todoId) => {
    const filteredTodos = props.dataToDo.filter((todo) => {
      return todo.id !== todoId;
    });

    props.deleteToDo(filteredTodos);
    if (props.edit.id) props.cancelEdit();
  };

  const doneTodoHandler = (todo) => {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    };

    const editTodoIndex = props.dataToDo.findIndex((currentTodo) => {
      return currentTodo.id == todo.id;
    });

    const updatedTodos = [...props.dataToDo];

    updatedTodos[editTodoIndex] = updatedTodo;

    props.doneTodo(updatedTodos);
  };

  return (
    <ul className="listContainer">
      {props.dataToDo.map((todo) => {
        return (
          <li key={todo.id}>
            <div className="listDescription">
              <input type="checkbox" className="checkbox" onChange={doneTodoHandler.bind(this, todo)} checked={todo.done} />
              {todo.done ? (
                <s className="listLabel" style={{ opacity: 0.5 }}>
                  {todo.activity}
                </s>
              ) : (
                <label className="listLabel">{todo.activity}</label>
              )}
            </div>
            <div>
              <button className="deleteButton" onClick={props.editToDo.bind(this, todo)}>
                <BsPencil className="icon" />
              </button>
              <button className="deleteButton" onClick={removeToDo.bind(this, todo.id)}>
                <BsXLg className="icon" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListToDo;
