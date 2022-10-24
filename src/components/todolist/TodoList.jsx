import "./TodoList.scss";
import { useSelector } from "react-redux";

function TodoList(props) {
  const todoList = useSelector((state) => state.todoReducer.data);
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
              <div className="remove">Remove Note</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
