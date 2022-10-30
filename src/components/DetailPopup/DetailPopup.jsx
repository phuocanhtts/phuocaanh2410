import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slice/todoslice";
import { clsx } from "clsx";
import "./DetailPopup.scss";

const DetailPopup = (props) => {
  const isOpen = useSelector((state) => state.todoReducer.data.isOpenModal);
  const content = useSelector((state) => state.todoReducer.data.modalContent);
  const dispatch = useDispatch();
  const modalClasses = clsx({
    modal: true,
    show: isOpen,
  });

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <div className={modalClasses}>
      <p className="content">{content}</p>
      <div className="modal-footer">
        <button className="btn-flat" onClick={handleCloseModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailPopup;
