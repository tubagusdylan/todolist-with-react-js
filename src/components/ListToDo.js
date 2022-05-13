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
    <ul>
      {props.dataToDo.map((todo) => {
        return (
          <li key={todo.id}>
            <input type="checkbox" onChange={doneTodoHandler.bind(this, todo)} checked={todo.done} />
            {todo.done ? <s style={{ opacity: 0.5 }}>{todo.activity}</s> : <label>{todo.activity}</label>}
            <button className="deleteButton" onClick={props.editToDo.bind(this, todo)}>
              Edit
            </button>
            <button className="deleteButton" onClick={removeToDo.bind(this, todo.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListToDo;
