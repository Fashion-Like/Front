import styled from 'styled-components';
import LogoImg from '../assets/images/logo.png';
import LogoMobileImg from '../assets/images/logo_mobile.svg';
import InputSearch from '../ui/InputSearch';
import MenuProfile from './MenuProfile';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderElement = styled.div`
  min-width: 98vw;
  max-width: 98vw;
  display: grid;
  grid-template-columns: 1fr 40px 75px;
  align-items: center;
  background: white;
  grid-area: header;
  margin-bottom: 1rem;
  padding: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Logo = styled.img`
  display: none;
  @media (min-width: 1120px) {
    display: block;
  }
`;

const LogoMobile = styled.img`
  display: block;
  @media (min-width: 1120px) {
    display: none;
  }
`;

const IconMobile = styled.div`
  display: grid;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const redirectTo = () => {
    window.location.assign("/");
  }

  return (
    <HeaderElement>

        <Logo src={LogoImg} alt="logo" onClick={redirectTo} style={{cursor: "pointer"}}/>
        <LogoMobile src={LogoMobileImg} onClick={redirectTo} alt="logo" style={{cursor: "pointer"}} />

      <InputSearch />
      <IconMobile>
        <FontAwesomeIcon
          icon={ faSearch }
          size="lg"
          color={ 'gray'}
        />
      </IconMobile>
      <div>
        <MenuProfile />
      </div>
    </HeaderElement>
  );
};

export default Header;
