import React from "react";
import { useDispatch } from "react-redux";
import ModalDelete from "../components/Modals/ModalDelete";
import { actionDeleteTodo } from "../store/category";
import { actionHideModal } from "../store/modals";




export default function ModalDeleteCategory({ id }) {
  const dispatch = useDispatch();

  const handlerHideModal = () => {
    dispatch(actionHideModal());
  };

  const handlerDeleteTodo = () => {
    dispatch(actionDeleteTodo(id));
    handlerHideModal();
  };
  return (
    <ModalDelete
      handlerHideModal={handlerHideModal}
      handlerDeleteTodo={handlerDeleteTodo}
    />
  );
}
