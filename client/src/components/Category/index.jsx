import React from "react";
import { CaButton } from "../Button";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { deleteIcon } from "../../static";
import Image from "../Image";
import { Input } from "../Input";

import "./style.scss";

export const Task = ({
  taskId,
  todos,
  name,
  change,
  handlerChangeInput,
  handlerAddTodo,
  handlerDeleteTodo,
  saveTodoLocalStorage,
  removeAllTodoLocalStorage,
}) => {
  return (
    <div className="task">
      {!name ? (
        <>
          {" "}
          <Input
            className="task__input"
            placeholder="Add task"
            value={change}
            onChange={(e) => handlerChangeInput(e)}
          />
            <CaButton
              title="Add task"
              type="primary"
              onClick={handlerAddTodo}
            />
        </>
      ) : null}
      <Form className="task__listgroup">
        {todos.task.length
          ? todos.task.map((item) => {
              return (
                <Form.Item key={item.id} className="task__item">
                  <Link to={`/todo/${item.id}/${item.title}`} key={item.id}>
                    {item.title}
                  </Link>
                  {!name ? (
                    <Image
                      src={deleteIcon}
                      alt="delete"
                      onClick={() => handlerDeleteTodo(item.id, item.title)}
                    />
                  ) : null}
                </Form.Item>
              );
            })
          : null}
      </Form>
      {!name ? (
        <div className="task__group-btn">
          <CaButton
            type="primary"
            title="Save Todo"
            onClick={saveTodoLocalStorage}
          />
          <CaButton
            type="danger"
            title="Remove All Todo"
            onClick={removeAllTodoLocalStorage}
          />
        </div>
      ) : null}
    </div>
  );
};
