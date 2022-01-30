import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/AuthService";
import { setAccessToken } from "../stores/AccessTokenStore";
import { login } from "../services/AuthService";
import { useUser } from "../hooks/useUser";
import BaseButton from "../ui/BaseButton";
import Input from "../ui/Input";
import BaseLogo from "../ui/BaseLogo";
import { FormBox } from "../assets/styledForm";
import Modal from "../components/Modal";

const displayLastChar = 200;
const displayLastCharDeleting = 60;

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
      lastname: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: {
      name: validators.name(),
      lastname: validators.lastname(),
      email: validators.email(),
      password: validators.password(),
      confirmPassword: validators.confirmPassword()
    }
  });

  const { name, lastname, email, password, confirmPassword } = state.fields;

  const [touched, setTouched] = useState({});

  const [showing, setShowing] = useState({
    activepassword: false,
    password: "",
    activeconfirmPassword: false,
    confirmPassword: ""
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const [infoModal, setInfoModal] = useState({
    type: "",
    title: "",
    message: ""
  });

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
            setInfoModal({
              type: "success",
              title: "¡Felicidades!",
              message: "Tu cuenta se ha creado de manera exitosa"
            });

            setIsOpenModal(true);

            setAccessToken(response.access_token);
            doLogin().then(() => {
              history("/");
            });
          });
        })

        .catch((e) => {
          setInfoModal({
            type: "error",
            title: "¡Ooooops!",
            message: e.message
          });
          setIsOpenModal(true);
        });
    }
  };

  const showLastCharacter = (characters) => {
    let result = "";
    const num = characters.length - 1;
    for (let i = 0; i < num; i++) {
      result += "•";
    }
    return result + characters.slice(num);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (!showing.activepassword && !showing.activeconfirmPassword) {
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
    }
    if (name === "password" || name === "confirmPassword") {
      const time =
        value === state.fields[name].slice(0, value.length)
          ? displayLastCharDeleting
          : displayLastChar;
      setShowing({ [name]: showLastCharacter(value), [`active${name}`]: true });
      setTimeout(() => {
        setShowing({ ...showing, [`active${name}`]: false });
        document.getElementById(name).focus();
      }, time);
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
    <>
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
            label="Nombres"
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
            label="Apellidos"
            type="text"
            name="lastname"
            value={lastname}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={touched.lastname && errors.lastname}
            isvalid={errors.lastname}
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
            id={"password"}
            label="Contraseña"
            type={showing.activepassword ? "text" : "password"}
            name="password"
            value={showing.activepassword ? showing.password : password}
            disabled={showing.activepassword}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={touched.password && errors.password}
            isvalid={errors.password}
          />
          <Input
            id={"confirmPassword"}
            label="Confirmar contraseña"
            type={showing.activeconfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={
              showing.activeconfirmPassword
                ? showing.confirmPassword
                : confirmPassword
            }
            disabled={showing.activeconfirmPassword}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            message={touched.confirmPassword && errors.confirmPassword}
            isvalid={errors.confirmPassword}
          />

          <BaseButton type="submit" text="Registrarme" disabled={isValid()} />
        </form>
        <p
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            marginBottom: "1.5rem"
          }}
        >
          ¿Ya te registraste?
          <Link
            style={{
              fontWeight: "800",
              marginLeft: "0.6rem",
              color: "#073992"
            }}
            to="/login"
          >
            Inicia Sesión
          </Link>
        </p>
      </FormBox>

      <Modal
        type={infoModal.type}
        title={infoModal.title}
        message={infoModal.message}
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
      />
    </>
  );
};

export default SignUpForm;
