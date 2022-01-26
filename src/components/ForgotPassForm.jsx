import { Link } from "react-router-dom";
import ForgotImg from '../assets/images/forgot.png';
import { FormForgotPassword } from '../assets/styledForm';
import Input from "../ui/Input";
import BaseButton from "../ui/BaseButton";



const ForgotPassForm = () => {
  return (
    <div>
      <FormForgotPassword>

        <div
          style={{ textAlign: "center", marginBottom: "2rem"}}
        >
          <img src={ ForgotImg } alt="icon-forgot-password" />

          <h2> ¿Olvidó su contraseña? </h2>

          <p>Si necesitas recuperar tu contraseña, ingresa tu correo electrónico y te enviaremos las instrucciones para que puedas recuperarla.</p>
        </div>


        <Input
          label="Correo electrónico"
          type="text"
          name="email"
        />

        <BaseButton 
          type="submit" 
          text="ENVIAR" 
        />

        <Link
          style={{ display: "block",textAlign: "center", fontWeight: "600", color: "#0F0F0F", marginTop: "1.5rem", textDecoration: "underline"}}
          to="/login">
          Volver
        </Link>



      </FormForgotPassword>
    </div>

  )
};

export default ForgotPassForm;
