import styled from 'styled-components';
import Camisas from '../assets/images/Camisas.png';
import IconComments from '../assets/images/icon-comments.png';

const Container = styled.div`
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  width: 120;
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
  &::-webkit-scrollbar{
    width: 6px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 0px;
  }
`;

const Featured = () => (
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
      <img style={{ width: '160px', height: '200px' }} src={Camisas} alt="camisas" />
    </FeaturedDiv>
  </Container>
);

export default Featured;
