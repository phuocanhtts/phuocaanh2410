import AddNewForm from "../addNewForm/AddNewForm";
import TodoList from "../todolist/TodoList";
import "./MainForm.scss";

function MainForm() {
  return (
    <div className="main-form">
      <div className="title"><h1>Timestampd Notes App</h1></div>
      <div className="add">
        <AddNewForm />
      </div>
      <div className="list-form">
        <TodoList />
      </div>
    </div>
  );
}

export default MainForm;
