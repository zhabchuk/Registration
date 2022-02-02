import React from "react";
import { CaButton } from "../../Button";

import "./style.scss";

export default function ModalDelete({
  handlerDeleteTodo,
  handlerHideModal,
}) {
  return (
    <div className="mod-delete">
      <div className="mod-delete__wrapper">
        <p>
          Вы действительно хотите удалить эту задачу?
        </p>
        <div className="mod-delete__wrapper-btn">
          <CaButton
            title="Delete"
            type="primary"
            onClick={handlerDeleteTodo}
          />
          <CaButton
            title="Cancel"
            type="danger"
            onClick={handlerHideModal}
          />
        </div>
      </div>
    </div>
  );
}
