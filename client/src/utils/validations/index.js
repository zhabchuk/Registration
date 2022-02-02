export default ({ values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = "Введите email";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Неверный email";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введите пароль";
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password = "Слишком легкий пароль";
      }
    },
    confirmPassword: (value) => {
      if (!value) {
        errors.confirmPassword = "Введите пароль";
      }
      if (value !== values.password) {
        errors.confirmPassword = "Пароль не совпадает!";
      }
    },
    firstName: (value) => {
      if (!value) {
        errors.firstName = "Введите имя";
      } else if (!/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/.test(value)) {
        errors.firstName = "Неккоректно введено имя";
      }
    },
    lastName: (value) => {
      if (!value) {
        errors.lastName = "Введите фамилию";
      } else if (!/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/.test(value)) {
        errors.lastName = "Неккоректно введена фамилия";
      }
    },
    age: (value) => {
      if (!value) {
        errors.age = "Введите возраст";
      } else if (/^[0-9]$/.test(value)) {
        errors.age = "Некорректный возраст";
      }
    },
    phoneNumber: (value) => {
      if (!value) {
        errors.phoneNumber = "Введите номер";
      } else if (
        !/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(
          value
        )
      ) {
        errors.phoneNumber = "Некорректный номер";
      }
    },
    sex: (value) => {
      if (!value) {
        errors.sex = "Введите пол";
      } else if (!/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/.test(value)) {
        errors.sex = "Неккоректно введен пол";
      }
    },
  };
  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};
