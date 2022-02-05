import { Link, useNavigate } from "react-router-dom";
import BaseButton from "../ui/BaseButton";
import Input from "../ui/Input";
import BaseLogo from "../ui/BaseLogo";
import { FormBox } from "../assets/css/styledForm";
import { useUser } from "../hooks/useUser";
import { useState } from "react";
import { setAccessToken } from "../stores/AccessTokenStore";
import { login } from "../services/AuthService";
const EMAIL_PATTERN =
  //eslint-disable-next-line
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const LoginForm = () => {
  const history = useNavigate();
  const { doLogin } = useUser();

  const [state, setstate] = useState({
    fields: {
      email: "",
      password: ""
    },
  });

  const onSubmit = (e) => {
    const { fields } = state;
    e.preventDefault();
    login(fields).then((response) => {
      setAccessToken(response.access_token);
      doLogin().then(() => {
        history("/");
      });
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setstate((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: value
      }
    }));
  };

  const { email, password } = state.fields;
  return (
    <>
      <FormBox>
        <BaseLogo />

        <h1
          style={{
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "1.5rem"
          }}
        >
          ¡Inicia Sesión!
        </h1>

        <form onSubmit={onSubmit}>
          <Input
            label="Correo electrónico"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            iconCheck={false}
          />
          <Input
            label="Contraseña"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            iconCheck={false}
          />

          <p
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              marginBottom: "1.5rem"
            }}
          >
            ¿No estás registrado?
            <Link
              style={{
                fontWeight: "800",
                marginLeft: "0.6rem",
                color: "#073992"
              }}
              to="/signup"
            >
              Regístrate.
            </Link>
          </p>

          <BaseButton type="submit" text="INICIAR SESIÓN" />

          <Link
            style={{
              display: "block",
              textAlign: "center",
              fontWeight: "600",
              color: "#0F0F0F",
              marginTop: "1.5rem"
            }}
            to="/resetPassword"
          >
            ¿Olvidó su contraseña?
          </Link>
        </form>
      </FormBox>
    </>
  );
};

export default LoginForm;
