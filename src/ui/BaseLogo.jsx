import { Logo, Like, IconLogo } from '../assets/css/styledForm';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const BaseLogo = () => {
  return (
    <Logo>
      <IconLogo icon={faThumbsUp} size="xs" color="#073992"/>
      Fashion<Like>Like</Like>
    </Logo>
  );
};

export default BaseLogo;
