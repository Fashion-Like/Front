import { Link, useNavigate } from 'react-router-dom';
import BaseButton from '../../../ui/BaseButton';
import Input from '../../../ui/Input';
import BaseLogo from '../../../ui/BaseLogo';
import { FormBox, InputWidth } from '../../../assets/css/styledForm';
import { useUser } from '../../../hooks/useUser';
import { useState } from 'react';
import { setAccessToken } from '../../../stores/AccessTokenStore';
import { login, emailExists } from '../../../services/AuthService';
import Error from '../../../components/Error';

const displayLastChar = 200;
const displayLastCharDeleting = 60;

const EMAIL_PATTERN =
	// eslint-disable-next-line
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})\D$/i;
const NUM_PATTERN = /[0-9]/;
const CAPITAL_PATTERN = /[A-Z]/;
const LOWERCASE_PATTERN = /[a-z]/;
const NON_ALPHANUMERIC_PATTERN = /[@$!%*#?&+-]/;

const validators = {
	email: (value) => {
		let message;
		if (!value) {
			message = 'Introduce tu email';
		} else if (!EMAIL_PATTERN.test(value)) {
			message = 'Introduce un email válido por favor';
		}
		return message;
	},
	password: (value) => {
		let message;
		if (!value) {
			message = 'La contraseña es requerida';
		} else if (!NUM_PATTERN.test(value)) {
			message = 'La contraseña debe contener al menos un número';
		} else if (!CAPITAL_PATTERN.test(value)) {
			message = 'La contraseña debe contener al menos una mayúscula';
		} else if (!LOWERCASE_PATTERN.test(value)) {
			message = 'La contraseña debe contener al menos una minúscula';
		} else if (!NON_ALPHANUMERIC_PATTERN.test(value)) {
			message = 'La contraseña debe contener un carácter especial';
		} else if (value && value.length < 8) {
			message = 'La contraseña debe contener un mínimo de 8 caracteres';
		}
		return message;
	},
};

const LoginForm = () => {
	const history = useNavigate();
	const { doLogin } = useUser();

	const [state, setstate] = useState({
		fields: {
			email: '',
			password: '',
		},
		errors: {
			email: validators.email(),
			password: validators.password(),
		},
	});

	const { email, password } = state.fields;

	const [touched, setTouched] = useState({});

	const [showing, setShowing] = useState({
		activepassword: false,
		password: '',
	});

	//Estado de la contraseña
	const [statePassword, setStatePassword] = useState(true);

	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const isValid = () => {
		const { errors } = state;
		return !Object.keys(errors).some((error) => errors[error]);
	};

	const showPassword = () => {
		if (document.getElementById('password').type === 'password') {
			document.getElementById('password').type = 'text';

			setStatePassword(false);
		} else {
			document.getElementById('password').type === 'text';
			document.getElementById('password').type = 'password';

			setStatePassword(true);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const { fields } = state;

		if (isValid) {
			emailExists(email)
				.then((response) => {
					if (response) {
						login(fields)
							.then((response) => {
								setAccessToken(response.token);
								const user = {
									name: response.name,
									email: response.email,
								};
								localStorage.setItem('user', JSON.stringify(user));
								doLogin(user);
								history('/', {
									replace: true,
								});
							})
							.catch((e) => {
								console.log(e);
								setIsError(true);
								setErrorMessage('Correo o contraseña inválidos');
							});
					}
					setIsError(true),
						setErrorMessage('Este correo no está registrado');
				})
				.catch((e) => {
					console.log(e);
				});
		}
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		if (!showing.activepassword) {
			setstate((prevState) => ({
				fields: {
					...prevState.fields,
					[name]: value,
				},
				errors: {
					...prevState.errors,
					[name]: validators[name]
						? validators[name](value, password)
						: validators[name](value),
				},
			}));
		}
	};

	const onBlur = (e) => {
		const { name } = e.target;
		setTouched((prevTouched) => ({
			...prevTouched,
			[name]: false,
		}));
	};

	const onFocus = (e) => {
		const { name } = e.target;
		setTouched((prevTouched) => ({
			...prevTouched,
			[name]: true,
		}));
	};
	const { errors } = state;

	return (
		<>
			<FormBox>
				<BaseLogo />
				<h1
					style={{
						fontWeight: '800',
						textAlign: 'center',
						marginBottom: '1rem',
					}}
				>
					¡Inicia sesión!
				</h1>
				<form onSubmit={onSubmit}>
					<Input
						label="Correo electrónico"
						type="text"
						name="email"
						value={email}
						onChange={onChange}
						onBlur={onBlur}
						onFocus={onFocus}
						message={touched.email && errors.email}
						isvalid={errors.email}
					/>

					<div className="input-group mb-3 d-flex align-items-center ">
						<InputWidth>
							<Input
								label="contraseña"
								className="form-control "
								id={'password'}
								type={showing.activepassword ? 'text' : 'password'}
								name="password"
								value={password}
								/*disabled={showing.activepassword}*/
								onChange={onChange}
								onBlur={onBlur}
								onFocus={onFocus}
								isvalid={errors.password}
							/>
						</InputWidth>
						<div className="input-group-append">
							<i
								onClick={showPassword}
								id="eye"
								className={
									statePassword
										? 'fa-solid fa-eye-slash btn btn-outline-secondary mb-2 '
										: 'fa-solid fa-eye btn btn-outline-secondary mb-2'
								}
							></i>
						</div>
					</div>

					{isError && <Error message={errorMessage} />}

					<p
						style={{
							textAlign: 'center',
							marginTop: '1.5rem',
							marginBottom: '1.5rem',
						}}
					>
						¿No estás registrado?
						<Link
							style={{
								fontWeight: '800',
								marginLeft: '0.6rem',
								color: '#073992',
							}}
							to="/register"
						>
							Regístrate.
						</Link>
					</p>

					<BaseButton
						type="submit"
						text="INICIAR SESIÓN"
						disabled={isValid()}
					/>
					<Link
						style={{
							display: 'block',
							textAlign: 'center',
							fontWeight: '600',
							color: '#0F0F0F',
							marginTop: '1.5rem',
						}}
						to="/resetPassword"
					>
						¿Olvidó su contraseña?
					</Link>
				</form>
			</FormBox>
		</>
	);
};

export default LoginForm;
