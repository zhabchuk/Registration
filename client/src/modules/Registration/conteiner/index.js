import { withFormik } from "formik";
import { connect } from "react-redux";
import validations from "../../../utils/validations";
import Registration from "../components";
import { authRegistration } from "../../../store/auth/registration/index";
import {
  handlerClearError,
  handlerClearSuccess,
} from "../../../store/auth/common";

const RegistrationContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    sex: "",
  }),
  validate: (values) => {
    let errors = {};
    validations({ values, errors });
    return errors;
  },
  handleSubmit: (values, { props }) => {
    props.authRegistration(values);
    props.handlerClearError();
    props.handlerClearSuccess();
  },
  displayName: "registration",
})(Registration);

const mapDispathToProps = (dispatch) => {
  return {
    authRegistration: (payload) => dispatch(authRegistration(payload)),
    handlerClearError: () => dispatch(handlerClearError()),
    handlerClearSuccess: () => dispatch(handlerClearSuccess()),
  };
};
export default connect(null, mapDispathToProps)(RegistrationContainer);
