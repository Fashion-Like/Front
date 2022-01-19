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
      </form>
    </div>
  )
};

export default SignUpForm;
