import BaseButton from "../ui/BaseButton";
import Input from "../ui/Input";
import BaseLogo from "../ui/BaseLogo";
import { FormContainer, FormBox, ImgForm } from "../assets/styledForm";
import backgroundForm from "../assets/images/bg-form.svg";
import { useState } from "react";

const EMAIL_PATTERN =
  //eslint-disable-next-line
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const NUM_PATTERN = /[0-9]/;
const CAPITAL_PATTERN = /[A-Z]/;

const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Introduce tu nombre";
    }
    return message;
  },
  email: (value) => {
    let message;
    if (!value) {
      message = "Introduce tu email";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Email is invalid";
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = "La contraseña es requerida";
    } else if (!NUM_PATTERN.test(value)) {
      message = "La contraseña debe contener al menos un número";
    } else if (!CAPITAL_PATTERN.test(value)) {
      message = "La contraseña debe contener al menos una mayúscula";
    } else if (value && value.length < 8) {
      message = "La contraseña debe contener un mínimo de 8 caracteres";
    }
    return message;
  },
  confirmPassword: (value, password) => {
    let message;
    if (!value) {
      message = "Confirma tu contraseña";
    } else if (value !== password) {
      message = "La contraseña no coincide";
    }
    return message;
  }
};

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
  const { name, email, password, confirmPassword } = state.fields;

  //eslint-disable-next-line
  const [Touched, setTouched] = useState({});

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const onSubmit = (e) => {
    const { fields } = state;
    console.log(fields);
    e.preventDefault();
    if (isValid()) {

    }
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
        [name]:
          validators[name] && name === "confirmPassword"
            ? validators[name](value, password)
            : validators[name](value)
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
        <form action="" onSubmit={onSubmit}>
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

          <BaseButton type="submit" text="Registrarme" disabled={isValid()} />
        </form>
        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          ¿Ya te registraste?
          <span style={{ fontWeight: "800", marginLeft: "0.6rem" }}>
            Inicia Sesión
          </span>{" "}
        </p>
      </FormBox>
    </FormContainer>
  );
};

export default SignUpForm;
