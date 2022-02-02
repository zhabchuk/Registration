import React from "react";
import { useDispatch } from "react-redux";
import TaskConteiner from "../../conteiners/TaskConteiner";
import { addIcon } from "../../static";
import { clearUser } from "../../store/auth/login";
import { actionShowModal } from "../../store/modals";
import { CaButton } from "../Button";
import Image from "../Image";

export default function Home() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(clearUser());
  };
  const showModalEditTask = (taskId) => {
    dispatch(actionShowModal({ name: "ModalEditTask", taskId }));
  };
  return (
    <div>
      <TaskConteiner />
      <CaButton onClick={logout} title="Exit" />
      <Image
        src={addIcon}
        alt="edit"
        onClick={() => showModalEditTask()}
      />
    </div>
  );
}
