import Camisas from '../assets/images/Camisas.png';
import styled from 'styled-components';

const Container = styled.div`
  background: #FFF;
  border-radius: 20px;
  padding: 1rem 1.5rem;
  border: solid 0.5px #f5f5f5;
  grid-area: categories;
  margin-bottom: 1rem;

  /* @media (min-width: 1120px) {
    max-width: 300px;
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
    background: #354a62;
    border-radius: 30px;
  }
  &::-webkit-scrollbar-thumb {
      background: #073992;
      border-radius: 30px;
  }

  @media (min-width: 1120px) {
    display: block;
    max-height: 60vh;
    &::-webkit-scrollbar-track {
      background: #354a62;
      border-radius: 30px;
    }
    &::-webkit-scrollbar-thumb {
      background: #073992;
      border-radius: 30px;
    }
  }
`;

const Categories = () => {
  return (
    <Container>
      <Title>Categorías</Title>
      <Divider/>
      <Scroll>
        <Category>
          <img src={Camisas} alt="camisas" />
          <p> Camisas </p>
        </Category>
      </Scroll>
    </Container>
  );
};

export default Categories;
