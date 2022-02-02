import React, { useContext, useEffect } from "react";
import { Form, Input } from "antd";
import { validate } from "../../../utils/validate";
import { Button, message } from "antd";
import { Link } from "react-router-dom";
import HeaderForm from "../HeaderForm";

import "./style.scss";
import { auth } from "../../../mock-routes";
import { useDispatch, useSelector } from "react-redux";
import {
  handlerClearError,
  handlerClearSuccess,
} from "../../../store/auth/common";
import { AuthContext } from "../../../contex/AuthContext";

export default function Login(props) {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    props;
  const { isLoading, success, error } = useSelector(
    (state) => state.authReducer
  );
  const { user } = useSelector((state) => state.authReducer);
  const authUser = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      authUser.login(user.token, user.usreId);
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    success && message.success("Вы успешно авторизовались");
    error && message.error(error);
  }, [error, success]);

  const clearStatus = () => {
    dispatch(handlerClearError());
    dispatch(handlerClearSuccess());
  };

  useEffect(() => {
    return () => {
      clearStatus();
    };
  }, []);
  return (
    <div className="form">
      <HeaderForm
        title="Войти в аккаунт"
        description="Пожалуйста, войдите в свой аккаунт"
      />
      <Form onSubmit={handleSubmit} initialValues={{ remember: true }}>
        <Form.Item
          name="email"
          help={!touched.email ? null : errors.email}
          validateStatus={validate("email", touched, errors)}
          hasFeedback
        >
          <Input
            size="large"
            placeholder="E-mail"
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="password"
          help={!touched.password ? null : errors.password}
          validateStatus={validate("password", touched, errors)}
          hasFeedback
        >
          <Input
            size="large"
            type="password"
            placeholder="Password"
            values={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            onClick={handleSubmit}
            loading={isLoading}
          >
            Войти в аккаунт
          </Button>
          <Link to={auth.registration()} onClick={clearStatus}>
            Создать аккаунт
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
