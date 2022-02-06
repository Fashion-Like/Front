import styled from 'styled-components';
import BaseButton from "../ui/BaseButton";
import LogoPost from '../assets/images/logomobile.svg';
import { faImage, faLaugh } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeaderPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  height: 35px;
  background: white;
  outline: none;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Textarea = styled.textarea`
    outline: none;
    resize: none;
    overflow: hidden;
    line-height: 1.5;
    color: #6e6b7b;
    border: none;
    border-radius: 10px;
    background-color: #f3f3f3;
    padding: .5rem;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: .5rem;
    padding: .5rem;
    width: 100%;
    height: 100px;
`

const DatePost = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icons = styled.div`
  align-self: end;
  display: flex;
  gap: 1rem;
  margin-bottom: .5rem;
  cursor: pointer;
`

const PostForm = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <div>
        <HeaderPost>
          <DatePost>
            <img src={LogoPost} alt="logo_fashion_like" />
            <div>
              <h4>Fashion Like</h4>
              <span>30julio</span>
            </div>
          </DatePost>
          <Select>
            <option value="1">Faldas</option>
            <option value="2">Camisas</option>
            <option value="3">Shorts</option>
            <option value="4">Pantalones</option>
          </Select>
        </HeaderPost>
      <Form onSubmit={onSubmit}>
        <Textarea
          placeholder="¿Qué estás pensando?"
        />
        <Icons>
          <FontAwesomeIcon
                icon={ faImage }
                size="lg"
                color={ 'gray'}
          />
          <FontAwesomeIcon
            icon={ faLaugh }
            size="lg"
            color={ 'gray'}
          />
        </Icons>
        <BaseButton type="submit" text="ENVIAR" />
      </Form>
    </div>
  );
};

export default PostForm;
