import LoginForm from "../components/LoginForm"
import backgroundForm from "../assets/images/img-form.png";
import { FormContainer, ImgForm } from "../assets/styledForm";


const LoginPage = () => {

  return (
    <>
      <FormContainer>
        <div>
          <ImgForm src={backgroundForm} alt="background-form" />
        </div>
        <LoginForm />
      </FormContainer>
    </>
  )
}

export default LoginPage