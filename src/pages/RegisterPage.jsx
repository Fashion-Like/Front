import RegisterForm from '../modules/register/components/RegisterForm';
import backgroundForm from '../assets/images/img-form.png';
import { FormContainer, ImgForm } from '../assets/css/styledForm';

const RegisterPage = () => {
	return (
		<FormContainer>
			<ImgForm src={backgroundForm} alt="background-form" />
			<RegisterForm />
		</FormContainer>
	);
};

export default RegisterPage;
