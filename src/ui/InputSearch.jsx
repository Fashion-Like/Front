import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {
  FormGroup,
  IconCheck
} from '../assets/css/styledForm';

const ContainerInputSearch = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const InputElement = styled.input`
  width: 100%;
  border-radius: 30px;
  max-height: 40px;
  height: 40px;
  background: #f5f5f5;
  border: none;
  padding: 0 10px;
  min-width: 300px;
  

  &:focus {
    border: 2px solid #6aa5ea;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163 163 0.4);
  }
`;

const InputSearch = ({
  onKeyUp,
  value,
  autofocus
}) => {
  return (
    <ContainerInputSearch>
      <FormGroup>
        <div>
          <InputElement
            type="search"
            onKeyUp={onKeyUp}
            value={value}
            autoFocus={autofocus}
            placeholder="Buscar...."
          />
          <IconCheck
            icon={faSearch}
            style={{ color: 'gray' }}
          />
        </div>
      </FormGroup>
      <ul />
    </ContainerInputSearch>
  );
};

export default InputSearch;
