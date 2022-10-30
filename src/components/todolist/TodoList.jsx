import "./TodoList.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeForm, showModal } from "../redux/slice/todoslice";

function TodoList() {
  const todoList = useSelector((state) => state.todoReducer.data.todoList);
  console.log(todoList);
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    console.log("test", e.target.id);
    dispatch(removeForm(e.target.id));
  };

  const handleShowDetails = (e) => {
    e.preventDefault();
    dispatch(showModal(e.target.id));
  };

  return (
    <div className="todo-list">
      {todoList.map((item) => {
        return (
          <div key={item.id} className="todo">
            <div className="todo-list-item">{item.title}</div>
            <div className="handle">
              <div className="todo-list-item1">{item.date}</div>
              <div className="bt">
                <div>
                  <button
                    id={item.id}
                    onClick={(e) => handleShowDetails(e)}
                    className="show"
                  >
                    Show Details
                  </button>
                </div>
                <div>
                  <button
                    id={item.id}
                    onClick={handleRemove}
                    className="remove"
                  >
                    Remove Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
