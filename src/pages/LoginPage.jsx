import LoginForm from '../components/LoginForm';
import backgroundForm from '../assets/images/img-form.png';
import { FormContainer, ImgForm } from '../assets/css/styledForm';

const LoginPage = () => {
  return (
    <div>
      <FormContainer>
        <ImgForm src={backgroundForm} alt="background-form" />
        <LoginForm />
      </FormContainer>
    </div>
  );
};

export default LoginPage;
