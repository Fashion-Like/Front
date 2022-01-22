import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/AuthService";
import { setAccessToken } from "../stores/AccessTokenStore";
import { login } from "../services/AuthService";
import { useUser } from "../hooks/useUser";
import BaseButton from "../ui/BaseButton";
import Input from "../ui/Input";
import BaseLogo from "../ui/BaseLogo";
import { FormContainer, FormBox, ImgForm } from "../assets/styledForm";
import backgroundForm from "../assets/images/bg-form.svg";

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
    } else if (NUM_PATTERN.test(value)) {
      message = "No debe contener números";
    }
    return message;
  },
  lastname: (value) => {
    let message;
    if (!value) {
      message = "Introduce tus apellidos";
    } else if (NUM_PATTERN.test(value)) {
      message = "No debe contener números";
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
  const history = useNavigate();
  const { doLogin } = useUser();

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

  const [touched, setTouched] = useState({});

  const [showing, setShowing] = useState({
    password: false,
    confirmPassword: false,
    replace(word) {
      const characters = word.replace(/./g, "•").replace(/•$/, word[word.length - 1]);
      return characters
    }
  });

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      register(state.fields)
        .then((response) => {
          const fields = {
            email: state.fields.email,
            password: state.fields.password
          };
          login(fields).then((response) => {
            setAccessToken(response.access_token);
            doLogin().then(() => {
              history("/");
            });
          });
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    showing.password &&
      setTimeout(() => {
        setShowing({ ...showing, password: false });
      }, 2000);
    showing.confirmPassword &&
      setTimeout(() => {
        setShowing({ ...showing, confirmPassword: false });
      }, 2000);
  }, [showing]);

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
    if (name === "password" || name === "confirmPassword") {
      setShowing({ ...showing, [name]: true });
    }
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false
    }));
  };

  const onFocus = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true
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
        <form onSubmit={onSubmit}>
          <Input
            label="Nombre"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={touched.name && errors.name}
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
            message={touched.email && errors.email}
            isvalid={errors.email}
          />
          <Input
            label="Contraseña"
            type={showing.password ? "text" : "password"}
            name="password"
            value={showing.password ? showing.replace(password) : password}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={touched.password && errors.password}
            isvalid={errors.password}
          />
          <Input
            label="Confirmar contraseña"
            type={showing.confirmPassword ? "text" : "confirmPassword"}
            name="confirmPassword"
            value={
              showing.confirmPassword
                ? showing.replace(confirmPassword)
                : confirmPassword
            }
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={touched.confirmPassword && errors.confirmPassword}
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
