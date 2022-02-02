import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalEdit from "../components/Modals/ModalEdit";
import { actionEditTask } from "../store/category";
import { actionHideModal } from "../store/modals";

export default function ModalEditTaskConteiner({ taskId }) {
  const { task } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();

  const findTask = task.find((item) => item.id === taskId);

  const [value, setValue] = useState(findTask.title);

  const handlerChangeInput = (e) => {
    setValue(e.target.value);
  };

  const hideModal = () => {
    dispatch(actionHideModal());
  };

  const handlerEditTask = () => {
    const data = {
      title: value,
      taskId,
    };
    dispatch(actionEditTask(data));
    hideModal();
  };

  return (
    <ModalEdit
      findTask={findTask}
      value={value}
      hideModal={hideModal}
      handlerChangeInput={handlerChangeInput}
      handlerEditTask={handlerEditTask}
    />
  );
}
