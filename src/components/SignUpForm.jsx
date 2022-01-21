import BaseButton from "../ui/BaseButton";
import Input from "../ui/Input";
import BaseLogo from "../ui/BaseLogo";
import { FormContainer, FormBox, ImgForm } from "../assets/styledForm";
import backgroundForm from "../assets/images/bg-form.svg";
import { useState } from "react";

//eslint-disable-next-line
const EMAIL_PATTERN =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const NUM_PATTERN = /[0-9]/;
const CAPITAL_PATTERN = /[A-Z]/;

const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Name is required";
    }
    return message;
  },
  email: (value) => {
    let message;
    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Email is invalid";
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = "Password is required";
    } else if (!NUM_PATTERN.test(value)) {
      message = "Your password must contain at least one number";
    } else if (!CAPITAL_PATTERN.test(value)) {
      message = "Your password must contain at least one capital letter";
    } else if (value && value.length < 8) {
      message = "Your password must contain at least 8 characters";
    }
    return message;
  },
  confirmPassword: (value) => {}
};

// Do: confirmPassword

const SignUpForm = () => {
  const [state, setstate] = useState({
    fields: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: {
      name: validators.name(),
      email: validators.email(),
      password: validators.password(),
      confirmPassword: validators.confirmPassword()
    }
  });

  const [setTouched] = useState({});

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setstate((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: value
      },
      errors: {
        ...prevState.errors,
        [name]: validators[name] && validators[name](value)
      }
    }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true
    }));
  };

  const onFocus = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false
    }));
  };

  const { name, email, password, confirmPassword } = state.fields;
  const { errors } = state;
  return (
    <FormContainer>
      <ImgForm src={backgroundForm} alt="background-form" />

      <FormBox>
        <BaseLogo />
        <h1
          style={{
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "1rem"
          }}
        >
          ¡Regístrate!
        </h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <Input
            label="Nombre"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={errors.name}
            isvalid={errors.name}
          />
          <Input
            label="Correo electrónico"
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={errors.email}
            isvalid={errors.email}
          />
          <Input
            label="Contraseña"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={errors.password}
            isvalid={errors.password}
          />
          <Input
            label="Confirmar contraseña"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={errors.confirmPassword}
            isvalid={errors.confirmPassword}
          />

          <BaseButton text="Registrarme" disabled={isValid()} />
        </form>
        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          ¿Ya te registraste?
          <span style={{ fontWeight: "800" }}>Inicia Sesión</span>{" "}
        </p>
      </FormBox>
    </FormContainer>
  );
};

export default SignUpForm;
