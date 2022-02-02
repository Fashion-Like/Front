import { Link } from 'react-router-dom';
import BaseButton from '../ui/BaseButton';
import Input from '../ui/Input';
import BaseLogo from '../ui/BaseLogo';
import { FormBox } from '../assets/css/styledForm';

const LoginForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('click');
  };

  return (
  <>
    <FormBox>

      <BaseLogo />

      <h1
        style={{
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}
      >
        ¡Inicia Sesión!
      </h1>

      <form
      onSubmit={onSubmit}>
        <Input
          label="Correo electrónico"
          type="email"
          name="email"
        />
        <Input
          label="Contraseña"
          type="password"
          name="password"
        />

        <p
          style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          ¿No estás registrado?
          <Link
              style={{ fontWeight: '800', marginLeft: '0.6rem', color: '#073992' }}
              to="/signup">
              Regístrate.
          </Link>
        </p>

        <BaseButton
        type="submit"
        text="INICIAR SESIÓN" />

        <Link
          style={{ display: 'block', textAlign: 'center', fontWeight: '600', color: '#0F0F0F', marginTop: '1.5rem' }}
          to="/forgot-password">
          ¿Olvidó su contraseña?
        </Link>

      </form>

    </FormBox>
  </>
  );
};

export default LoginForm;
