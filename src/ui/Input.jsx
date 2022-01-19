import {
  Label, 
  InputElement, 
  FormGroup, 
  IconCheck, 
  MessageError
} from "../assets/styledForm"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Input = ({label, type, name, Message}) => {
  return (
    <div>
          <Label htmlFor={name}>{label}</Label>
          <FormGroup >
            <InputElement 
              type={type}
              id={name}
              name={name}
            />
            <IconCheck icon={ faCheckCircle }/>
          </FormGroup >
          <MessageError >
            {Message}
          </MessageError >
    </div>
  )
};

export default Input;
