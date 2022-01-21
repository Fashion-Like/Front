import styled from "styled-components";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import {
  Label,
  InputElement,
  FormGroup,
  IconCheck,
  MessageError,
  InputContainer
} from "../assets/styledForm";

const InputGroup = styled.div`
  margin-bottom: 35px;
`;

const Input = ({ label, type, name, Message }) => {
  return (
    <InputGroup>
      <Label htmlFor={name}>{label}</Label>
      <FormGroup>
        <InputElement type={type} name={name} />
        <IconCheck icon={faCheckCircle} />
      </FormGroup>
      <MessageError>{Message}</MessageError>
    </InputGroup>
  );
};

export default Input;
