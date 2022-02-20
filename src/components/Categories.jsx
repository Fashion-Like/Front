import styled from 'styled-components';
import {TAGS}  from "../constants.js/tags";
import { getAllPosts } from '../stores/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

const Container = styled.div`
  background: #FFF;
  border-radius: 20px;
  padding: 1rem 1.5rem;
  border: solid 0.5px #f5f5f5;
  grid-area: categories;
  margin-bottom: 1rem;

  /* @media (min-width: 1120px) {
    height: 80vh;
  } */
}
`;
const Divider = styled.div`
  width: 220;
  height: 1px;
  background: #f5f5f5;
  margin: 1rem 0;
  display: none;

  @media (min-width: 1120px) {
    display: block;
  }
`;

const Title = styled.h2`
  color: #354A62;
  font-size: 1rem;
  display: none;

  @media (min-width: 1120px) {
    display: block;
  }
`;

const Category = styled.div`
  text-align: center;
  @media (min-width: 1120px) {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
  }
  &:hover {
    background: #f9f9f9;
    cursor: pointer;
  }
`;

const Scroll = styled.div`
  display: flex;
  gap: 1rem;
  overflow: auto;

  &::-webkit-scrollbar{
    width: 6px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 5px;
    background: #ececec;
    border-radius: 30px;
  }
  &::-webkit-scrollbar-thumb {
      background: #073992;
      border-radius: 30px;
  }

  @media (min-width: 1120px) {
    display: block;
    max-height: 70vh; */
    &::-webkit-scrollbar-track {
      background: #ececec;
      border-radius: 30px;
    }
    &::-webkit-scrollbar-thumb {
      background: #CCD7E0;
      border-radius: 30px;
    }
  }
`;

const Categories = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleCategory = (category) => {
    setCategory(category)
    dispatch( getAllPosts(category) )
  }

  // const { posts } = useSelector(state => state.posts);
  // console.log(posts)
  // console.log(category)



  return (
    <Container
    >
      <Title>Categorías</Title>
      <Divider/>
      <Scroll
      >
      {
        TAGS.map((item) => (
          item.img !== "" &&
          <Category
          key={item.value}
          onClick={()=> handleCategory (item.value)}
          >
            <img src={item.img} alt={item.value} />
            <p> {item.value} </p>
          </Category>
        ))
      }
      </Scroll>
    </Container>
  );
};

export default Categories;
