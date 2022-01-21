import BaseButton from "../ui/BaseButton";
import Input from "../ui/Input";
import BaseLogo from "../ui/BaseLogo";
import { FormContainer, FormBox, ImgForm,  } from "../assets/styledForm";
import backgroundForm from "../assets/images/bg-form.svg"

const SignUpForm = () => {
  return (
    <FormContainer>

      <ImgForm src={backgroundForm} alt="background-form" />

      <FormBox>

        <BaseLogo />

        <h1
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontWeight: "800"
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

        <p style={{textAlign: "center", marginTop: "1.5rem"}} > ¿Ya te registraste? <span style={{fontWeight: "800"}}>Inicia Sesión</span> </p>
      </FormBox>
    </FormContainer>
  );
};

export default SignUpForm;
