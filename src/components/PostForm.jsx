import { useState, useRef } from 'react';
import styled from 'styled-components';
import BaseButton from "../ui/BaseButton";
import LogoPost from '../assets/images/logomobile.svg';
import { faImage, faLaugh } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPost, updatePost } from "../services/PostService"
import {TAGS}  from "../constants.js/tags";
import Picker from 'emoji-picker-react';
import { setNewPost, setUpdatePost } from '../stores/slices/posts';
import { useDispatch } from "react-redux";

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
  font-size: 14px;
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
  margin-bottom: 1rem;
  cursor: pointer;
  z-index: 1;
`

const PostForm = ({setIsOpenModal, prevPost, isEdit, setIsEdit}) => {

  const postToUpdate = prevPost.payload;

  const dispatch = useDispatch();

  const [tag, setTag] = useState(!isEdit? "Selecciona"  :  postToUpdate.tags[0]);
  const [description, setDescription] = useState(!isEdit ? "" : postToUpdate.description);
  const [fileName, setFileName] = useState("");
  const [imageBase64, setImageBase64] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const post = {
      fileName,
      description,
      imageBase64,
      tags: [tag],
    }

    if (!isEdit) {
      createPost(post)
      .then((response) => {
        dispatch(setNewPost(response))
      })
    }
    updatePost(postToUpdate.id, post)
    .then((response) => {
      dispatch(setUpdatePost(response))
    })

    e.target.reset();
    setDescription("");
    setTag("");
    setFileName("");
    setIsOpenModal(false);
  }

  const handleTag = (e) => {
    setTag(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileName(file.name)
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const result = e.target.result;
      const index = result.indexOf(",")
      setImageBase64(result.substring((index + 1), result.length))
    }
  }

  const cutFileName = (fileName) => {
    return `${fileName.substring(0, 15)}...`;
  }

  const [showPicker, setShowPicker] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setDescription(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
     
    <div>
        <HeaderPost>
          <DatePost>
            <img src={LogoPost} alt="logo_fashion_like" style={{ width: '30px' }} />
            <div>
              <h4>Fashion Like</h4>
            </div>
          </DatePost>
          <Select
            name="tag"
            value={tag}
            onChange={handleTag}
            options={TAGS}
          >
            {
            TAGS.map((option) => (
              <option
              key={option.value}
              value={option.value}
              >
              {option.value}
              </option>
            ))
            }   
          </Select>
        </HeaderPost>
      <Form onSubmit={onSubmit}>
        <Textarea
          value={description}
          name="description"
          onChange={handleDescription}
          placeholder="¿Qué estás pensando?"
        />
        <Icons>
          <span>{fileName && cutFileName(fileName)}</span>
          <label
            htmlFor="selectFile"
            style={{
              background: "transparent", 
              border: "none", 
              cursor: "pointer", 
            }}
          >
            <FontAwesomeIcon
              icon={ faImage }
              size="lg"
              color={ 'gray'}
            />

            <input
            id='selectFile'
            type="file"
            name="file"
            onChange={handleImage}
            accept='image/*'
            style={{display : "none"}}
          />
          </label>

          <FontAwesomeIcon
            icon={ faLaugh }
            size="lg"
            color={ 'gray'}
            onClick={() => setShowPicker(val => !val)} />
        </Icons>
        {showPicker && <Picker
          pickerStyle={{ width: '100%' }}
          onEmojiClick={onEmojiClick} />
        }
        <BaseButton type="submit" text="ENVIAR" />
      </Form>
    </div>
  );
};

export default PostForm;
