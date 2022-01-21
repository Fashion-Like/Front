import BaseButton from "../ui/BaseButton";
import Input from "../ui/Input";
import BaseLogo from "../ui/BaseLogo";
import { FormContainer, FormBox } from "../assets/styledForm";
//prueba
const SignUpForm = () => {
  return (
    <FormContainer>
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
            message="Ingrese su nombre por favor"
          />
          <Input
            label="Correo electrónico"
            type="text"
            name="email"
            message="Ingrese su nombre por favor"
          />
          <Input
            label="Contraseña"
            type="password"
            name="password"
            message="Ingrese su nombre por favor"
          />
          <Input
            label="Confirmar contraseña"
            type="password"
            name="name"
            message="Ingrese su nombre por favor"
          />
          <BaseButton text="Registrarme" />
        </form>
        <p
          style={{
            textAlign: "center"
          }}
        >
          ¿Ya te registraste?{" "}
          <span
            style={{
              bottom: "5px",
              fontWeight: "800",
              marginLeft: "0.3rem"
            }}
          >
            Inicia sesión
          </span>
        </p>
      </FormBox>
    </FormContainer>
  );
};

export default SignUpForm;
