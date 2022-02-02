import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

const NameUser = styled.span`
  display: none;
  @media (min-width: 1120px) {
    display: block;
  }
`;

const MenuProfile = () => {
  return (
    <Container>
      <FontAwesomeIcon
        icon={ faUser }
        size="lg"
        color={ 'gray'}
      />
      <NameUser>Nombre Apellido</NameUser>
      <FontAwesomeIcon
        icon={ faCaretDown }
        size="lg"
        color={ 'gray'}
      />
    </Container>
  );
};

export default MenuProfile;
