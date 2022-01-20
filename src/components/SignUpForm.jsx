import BaseButton from "../ui/BaseButton";
import Input from "../ui/Input";
import BaseLogo from "../ui/BaseLogo";
import { FormContainer, FormBox } from "../assets/styledForm";

const SignUpForm = () => {
  return (
    <FormContainer>
      <BaseLogo />
      <FormBox>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontWeight: "800"
          }}
        >
          ¡Regístrate!
        </h1>

        <form action="">
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
      </FormBox>
    </FormContainer>
  );
};

export default SignUpForm;
