import { ButtonElement } from "../assets/styledForm";

const BaseButton = ({
  text,
  outlined = false,
  size,
  fill,
  expanded = true
}) => {
  return (
    <ButtonElement outlined={outlined} expanded={expanded} >
      {text}
    </ButtonElement>
  );
};

export default BaseButton;
