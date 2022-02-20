import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { getAllPosts } from '../stores/slices/posts';
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
  value,
  autofocus
}) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearch(e.target.value)
    dispatch( getAllPosts(search) )
  }

  return (
    <ContainerInputSearch>
      <FormGroup>
        <div>
          <InputElement
            type="search"
            onKeyUp={handleSearch}
            value={value}
            autoFocus={autofocus}
            placeholder="Buscar...."
          />
          {
            !search &&
            <IconCheck
            icon={faSearch}
            style={{ color: 'gray' }}
          />
          }
        </div>
      </FormGroup>
      <ul />
    </ContainerInputSearch>
  );
};

export default InputSearch;
