import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import HeaderForm from "../../Login/HeaderForm";
import { validate } from "../../../utils/validate";
import { Link } from "react-router-dom";
import { auth } from "../../../mock-routes";
import { useDispatch, useSelector } from "react-redux";
import {
  handlerClearError,
  handlerClearSuccess,
} from "../../../store/auth/common";

export default function Registration(props) {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    props;
  const { isLoading, success, error } = useSelector(
    (state) => state.authReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    success && message.success("Вы успешно зарегистрировались");
    error && message.error(error);
  }, [success, error]);

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
        title="Регистрация"
        description="Пожалуйста, зарегистрируйтесь"
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
        <Form.Item
          name="confirmPassword"
          help={!touched.password ? null : errors.confirmPassword}
          validateStatus={validate("confirmPassword", touched, errors)}
          hasFeedback
        >
          <Input
            size="large"
            type="password"
            placeholder="confirm password"
            values={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="firstName"
          help={!touched.firstName ? null : errors.firstName}
          validateStatus={validate("firstName", touched, errors)}
          hasFeedback
        >
          <Input
            size="large"
            type="text"
            placeholder="first name"
            values={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          help={!touched.lastName ? null : errors.lastName}
          validateStatus={validate("lastName", touched, errors)}
          hasFeedback
        >
          <Input
            size="large"
            type="text"
            placeholder="last name"
            values={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="age"
          help={!touched.age ? null : errors.age}
          validateStatus={validate("age", touched, errors)}
          hasFeedback
        >
          <Input
            size="large"
            type="text"
            placeholder="age"
            values={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          help={!touched.phoneNumber ? null : errors.phoneNumber}
          validateStatus={validate("phoneNumber", touched, errors)}
          hasFeedback
        >
          <Input
            size="large"
            type="text"
            placeholder="phone"
            values={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="sex"
          help={!touched.sex ? null : errors.sex}
          validateStatus={validate("sex", touched, errors)}
          hasFeedback
        >
          <Input
            size="large"
            type="text"
            placeholder="sex"
            values={values.sex}
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
            Зарегистрироваться
          </Button>
          <Link to={auth.login()} onClick={clearStatus}>
            Авторизоваться?
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
