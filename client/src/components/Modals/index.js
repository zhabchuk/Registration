import React from "react";
import { useSelector } from "react-redux";
import ModalDeleteCategory from "../../conteiners/ModalDeleteCategory";
import ModalEditTaskConteiner from "../../conteiners/ModalEditTask";

const modalCollections = {
  ModalDelete: ModalDeleteCategory,
  ModalEdit: ModalEditTaskConteiner,
};

export default function Modals() {
  const modal = useSelector((state) => state.modalsReducer);
  if (!modal.length) {
    return null;
  }
  return (
    <>
      {modal.map((item) => {
        const CurrentModal = modalCollections[item.name];
        return <CurrentModal {...item} key={item.name} />;
      })}
    </>
  );
}
