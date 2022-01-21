import {
  Label,
  InputElement,
  FormGroup,
  IconCheck,
  MessageError,
  InputContainer
} from "../assets/styledForm";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Input = ({ label, type, name, Message }) => {
  return (
    <InputContainer >
      <Label htmlFor={name}>{label}</Label>
      <FormGroup>
        <InputElement type={type} name={name} />
        <IconCheck icon={faCheckCircle} />
      </FormGroup>
      <MessageError>{Message}</MessageError>
    </InputContainer>
  );
};

export default Input;
