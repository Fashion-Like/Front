import BaseButton from "../ui/BaseButton";
import Input from "../ui/Input";

const SignUpForm = () => {
  return (
    <div>
      <h1>¡Regístrate!</h1>

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
    </div>
  );
};

export default SignUpForm;
