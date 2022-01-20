import { Logo, Like, IconLogo } from "../assets/styledForm";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const BaseLogo = () => {
  return (
    <Logo>
      <IconLogo icon={faThumbsUp} size="2rem" color="#073992"/>
      Fashion<Like>Like</Like>
    </Logo>
  );
};

export default BaseLogo;
