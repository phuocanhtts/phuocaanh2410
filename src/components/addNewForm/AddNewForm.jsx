import { useState } from "react";
import { useDispatch } from "react-redux";
import { addForm } from "../redux/slice/todoslice";
import "./AddNewForm.scss";

function AddNewForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [detailTask, setDetailTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now().toString();

    dispatch(
      addForm({
        title,
        date,
        detailTask,
        id,
      })
    );

    setTitle("");
    setDate("");
    setDetailTask("");
  };

  return (
    <div className="add-form">
      <div className="input">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Note Title"
        />
        <br />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datetime-local"
        />{" "}
        <br />
        <input
          value={detailTask}
          onChange={(e) => setDetailTask(e.target.value)}
          type="text"
          placeholder="Note Details"
        />
      </div>
      <div className="button">
        <button onClick={handleSubmit}>ADD NOTES</button>
      </div>
    </div>
  );
}

export default AddNewForm;
