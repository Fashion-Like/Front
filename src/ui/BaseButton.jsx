import { ButtonElement } from "../assets/styledForm";

const BaseButton = ({
  type,
  text,
  outlined = false,
  size,
  fill,
  expanded = true,
  disabled = true
}) => {
  return (
    <ButtonElement
      outlined={outlined}
      expanded={expanded}
      disabled={!disabled}
      type={type}
    >
      {text}
    </ButtonElement>
  );
};

export default BaseButton;
