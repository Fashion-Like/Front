import LoginForm from "../components/LoginForm"
import backgroundForm from "../assets/images/img-form.png";
import { FormContainer, ImgForm } from "../assets/styledForm";


const LoginPage = () => {

  return (
    <>
      <FormContainer>
        <ImgForm src={backgroundForm} alt="background-form" />
        <LoginForm />
      </FormContainer>
    </>
  )
}

export default LoginPage