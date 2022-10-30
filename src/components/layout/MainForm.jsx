import AddNewForm from "../addNewForm/AddNewForm";
import TodoList from "../todolist/TodoList";
import DetailPopup from "../DetailPopup/DetailPopup";
import "./MainForm.scss";

function MainForm() {
  return (
    <div className="main-form">
      <div className="title">
        <h1>Timestampd Notes App</h1>
      </div>
      <div className="add">
        <AddNewForm />
      </div>
      <div className="list-form">
        <TodoList />
      </div>
      <DetailPopup />
    </div>
  );
}

export default MainForm;
