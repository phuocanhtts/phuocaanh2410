import "./TodoList.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeForm } from "../redux/slice/todoslice";


function TodoList() {
  const todoList = useSelector((state) => state.todoReducer.data);
  const dispatch = useDispatch();
  const handleRemote = (e,index) =>{
    e.preventDefault();
    dispatch(removeForm(index));

  }
  return (
    <div className="todo-list">
      {todoList.map((item, index) => {
        return (
          <div className="todo">
            <div key={`${item}${index}`} className="todo-list-item">
              {item}
            </div>
            <div className="handle">
              <div className="show">Show Details</div>
              <div onClick = {(e) => handleRemote(e,index)} className="remove">Remove Note</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
