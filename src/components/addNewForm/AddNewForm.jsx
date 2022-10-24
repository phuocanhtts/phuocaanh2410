import { useState } from "react";
import { useDispatch } from "react-redux";
import { addForm } from "../redux/slice/todoslice";
import "./AddNewForm.scss";


function AddNewForm(props) {
  const dispatch = useDispatch();
  const [todoForm, setTodoForm] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addForm([todoForm,todoDate]));
  };
  return (
    <div className="add-form">
      <div className="input">
        <input 
          onChange={(e) => setTodoForm(e.target.value)}
          type="text"
          placeholder="Note Title"
        />
        <br />
        <input       
          onChange={(e) => setTodoDate(e.target.value)}
          type="datetime-local"
        />
      </div>
      <div className="button">
        <button onClick={handleSubmit} >
          ADD NOTES
        </button>
      </div>
    </div>
  );
}

export default AddNewForm;
