import { ButtonElement } from "../assets/styledForm";

const BaseButton = ({
  text,
  outlined = false,
  size,
  fill,
  expanded = true,
  disabled = true
}) => {
  return (
    <ButtonElement outlined={outlined} expanded={expanded} disabled={!disabled}>
      {text}
    </ButtonElement>
  );
};

export default BaseButton;
