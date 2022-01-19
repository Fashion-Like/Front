import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Label = styled.label`
  display: block;
  padding: 0px 10px;
  min-height: 30px;
  cursor: pointer;
  color: #666666;
`;

const FormGroup = styled.div`
  position: relative;
  z-index: 1
`;

const InputElement = styled.input`
  width: 100%;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 10px 0 10px;
  border: 2px solid #E5E5E5;

  &:focus {
    border: 3px solid #6AA5EA;
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
  width: 100%;
  border: none;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  background: linear-gradient(90deg, #073992 1.89%, #00628F 98.36%);;
  color: #FFFFFF;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: green;
  }
`;

export {
  Label,
  FormGroup,
  InputElement,
  MessageError,
  IconCheck,
  ButtonElement
}
