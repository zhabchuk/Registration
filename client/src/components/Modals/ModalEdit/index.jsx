import React from "react";
import { CaButton } from "../../Button";
import { Input } from "../../Input";

import "./style.scss";

export default function ModalEdit({
  value,
  handlerChangeInput,
  hideModal,
  handlerEditTask,
}) {
  return (
    <div className="mod-edit">
      <div className="mod-edit__wrapper">
        <Input
          placeholder="Edit task"
          className="mod-edit__input"
          value={value}
          onChange={(e) => handlerChangeInput(e)}
        />
        <div className="mod-edit__group">
          <CaButton title="Save" type="primary" onClick={handlerEditTask} />
          <CaButton title="Cancel" type="danger" onClick={hideModal} />
        </div>
      </div>
    </div>
  );
}
