import { withFormik } from "formik";
import { connect } from "react-redux";
import {
  handlerClearError,
  handlerClearSuccess,
} from "../../../store/auth/common";
import { authLogin } from "../../../store/auth/login";
import validations from "../../../utils/validations";
import Login from "../components";

const LoginConteiner = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};
    validations({ values, errors });
    return errors;
  },
  handleSubmit: (values, { props }) => {
    props.authLogin(values);
    props.handlerClearError();
    props.handlerClearSuccess();
  },
  displayName: "login",
})(Login);

const mapDispathToProps = (dispatch) => {
  return {
    authLogin: (payload) => dispatch(authLogin(payload)),
    handlerClearError: () => dispatch(handlerClearError()),
    handlerClearSuccess: () => dispatch(handlerClearSuccess()),
  };
};

export default connect(null, mapDispathToProps)(LoginConteiner);
