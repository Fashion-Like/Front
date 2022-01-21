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

const Input = ({
  label,
  type,
  name,
  message,
  value,
  onChange,
  onBlur,
  onFocus,
  isvalid
}) => {
  return (
    <InputGroup>
      <Label htmlFor={name}>{label}</Label>
      <FormGroup>
        <InputElement
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
        />
        <IconCheck icon={faCheckCircle} isvalid={isvalid}/>
      </FormGroup>
      <MessageError>{message}</MessageError>
    </InputGroup>
  );
};

export default Input;
