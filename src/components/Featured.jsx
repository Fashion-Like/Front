import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Camisas from '../assets/images/Camisas.png';
import IconComments from '../assets/images/icon-comments.png';
import { getPostsFeatured } from '../services/PostService'


const Container = styled.div`
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  width: 125px;
  height: 1px;
  background: #354A62;
  margin: 1rem 0;
`;

const Title = styled.h2`
  color: #354A62;
  font-size: 1rem;
`;

const FeaturedDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  overflow: auto;
  /* &::-webkit-scrollbar{
    width: 6px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 0px;
  } */
  &::-webkit-scrollbar{
    width: 6px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 8px;
    background: #ececec;
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
      background: #ececec;
      border-radius: 30px;
    }
    &::-webkit-scrollbar-thumb {
      background: #CCD7E0;
      border-radius: 30px;
    }
`;

const Featured = () => {
  const [allPostFeatured, setAllPostsFeatured] = useState([])

  useEffect(() => {
    getPostsFeatured()
    .then((response) => {
      setAllPostsFeatured(response);
    })
    .catch((error) => console.log(error));
  }, []);

  return ( 
      <Container>
      <div
        style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}
      >
      <img
        style={{ width: '20px' }}
        src={IconComments}
        alt="icon_comments"
      />
      <Title>Destacados</Title>
      </div>
      <Divider />

      <FeaturedDiv>
      {
        allPostFeatured.length > 0 && allPostFeatured.map((post) =>
        <img
        style={{ minWidth: '140px', height: '200px', borderRadius: '10px', marginBottom: ".5rem" }}
        src={post.pictureUrl} alt="post-image"
        key={post.pictureUrl}
        />
        )
      }
      </FeaturedDiv>
      

    </Container>
 );
}


export default Featured;
