import { useState } from "react";
import ListToDo from "./ListToDo";
import { BsPlus, BsCheck2, BsX } from "react-icons/bs";

const InputToDo = (props) => {
  const [activity, setActivity] = useState("");
  const [edit, setEdit] = useState({});
  const [message, setMessage] = useState("");

  const saveToDo = (event) => {
    event.preventDefault();

    if (!activity) {
      return setMessage("Input tidak boleh kosong");
    }

    setMessage("");

    // Edit Mode
    if (edit.id) {
      const updateTodo = {
        ...edit,
        activity,
      };

      const editTodoIndex = props.dataToDo.findIndex((todo) => {
        return todo.id == edit.id;
      });

      const updatedTodos = [...props.dataToDo];

      updatedTodos[editTodoIndex] = updateTodo;

      props.eventEditTodo(updatedTodos);

      setActivity("");

      return cancelEdit();
    }

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      activity,
      done: false,
    };

    props.createToDo(newTodo);
    setActivity("");
  };

  const editToDo = (todo) => {
    setActivity(todo.activity);
    setEdit(todo);
  };

  const cancelEdit = () => {
    setEdit({});
    setActivity("");
  };

  return (
    <div>
      <form onSubmit={saveToDo}>
        <label className="label-input">Mau ngapain hari ini</label>
        {message && <div className="message">{message}</div>}
        <div className="inputContainer">
          <div>
            <input
              type="text"
              placeholder="Ketik di sini"
              className="input"
              value={activity}
              onChange={(event) => {
                setActivity(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" className="button-1">
              {edit.id ? <BsCheck2 className="icon" /> : <BsPlus className="icon" />}
            </button>
            {edit.id && (
              <button onClick={cancelEdit} className="button-1">
                <BsX className="icon" />
              </button>
            )}
          </div>
        </div>
      </form>
      {props.dataToDo.length > 0 ? (
        <ListToDo dataToDo={props.dataToDo} deleteToDo={props.deleteToDo} editToDo={editToDo} cancelEdit={cancelEdit} edit={edit} doneTodo={props.eventDoneTodo} />
      ) : (
        <p>
          <i>Belum ada Todo</i>
        </p>
      )}
    </div>
  );
};

export default InputToDo;
