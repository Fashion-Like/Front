import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormContainer = styled.div`
  height: 100vh;
  @media (min-width: 1024px) {
    background: linear-gradient(#00628f, #073992);
    display: flex;
    place-items: center;
    justify-content: center;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 1rem 1rem;
  height: 100%;

  @media (min-width: 1024px) {
    padding: 2rem 1.6rem;
    height: 48rem;
    width: 450px;
    background-color: #e7e7e7;
  }
`;

const Logo = styled.div`
  color: #354a62;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconLogo = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  margin-right: 0.5rem;
`;

const Like = styled.span`
  font-weight: 300;
  color: #073992;
`;

const InputContainer = styled.div`
  margin-bottom: 8%;
`;

const Label = styled.label`
  display: block;
  padding: 0px 10px;
  min-height: 30px;
  cursor: pointer;
  color: #666666;
`;

const FormGroup = styled.div`
  position: relative;
  z-index: 1;
`;

const InputElement = styled.input`
  width: 100%;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 10px 0 10px;
  border: 2px solid #e5e5e5;

  &:focus {
    border: 3px solid #6aa5ea;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163 163 0.4);
  }
`;

const MessageError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: red;
  display: none;
`;

const IconCheck = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 2;
  font-size: 16px;
  opacity: 1;
`;

const ButtonElement = styled.button`
  width: ${(props) => props.expanded && "100%"};
  height: 3rem;
  border: ${(props) => (props.outlined ? "2px solid #073992" : "none")};
  border-radius: 1rem;
  line-height: 2.5rem;
  background: ${(props) =>
    props.outlined
      ? "transparent"
      : "linear-gradient(90deg, #073992 1.89%, #00628F 98.36%)"};
  color: ${(props) => (props.outlined ? "black" : "#FFFFFF")};
  font-weight: bold;
  cursor: pointer;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  touch-action: manipulation;

  &:hover {
    background: linear-gradient(90deg, #003185 1.89%, #01567e 98.36%);
    color: white;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0,
      rgba(0, 0, 0, 0.1) 0 1px 4px -1px;
    transform: translateY(2px);
    transition-duration: 0.35s;
  }

  &:active:after {
    opacity: 1;
  }

  &:hover:after {
    opacity: 0.5;
  }
`;

export {
  FormContainer,
  FormBox,
  Logo,
  IconLogo,
  Like,
  InputContainer,
  Label,
  FormGroup,
  InputElement,
  MessageError,
  IconCheck,
  ButtonElement
};
