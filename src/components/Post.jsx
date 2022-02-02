import styled from 'styled-components';
import LogoPost from '../assets/images/logomobile.svg';
import ImgFalda from '../assets/images/img-falda.png';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faCommentAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconComments from '../assets/images/icon-comments.png';

const Container = styled.div`
  padding: 1rem 1.5rem;
`;

const ContainerPost = styled.div`
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-radius: 10px;
`;

const Title = styled.h2`
  color: #354A62;
  font-size: 1rem;
`;

const HeaderPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const DatePost = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
`;

const TagCategory = styled.span`
  border: solid 1px blue;
  padding: .2rem;
  border-radius: 5px;
`;

const ImgPost = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 60vh;
  margin-bottom: 1.25rem;

  @media (min-width: 1024px) {
    max-height: 50vh;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Divider = styled.div`
  width: 220;
  height: 1px;
  background: #354A62;
  margin: 1rem 0;
`;

const FooterPost = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Post = () => {
  return (
    <Container>
      <div
        style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginBottom: '1.25rem' }}
        >
        <img
          style={{ width: '20px' }}
          src={IconComments}
          alt="icon_comments"
        />
        <Title>Publicaciones</Title>
      </div>
      <Divider />
      <ContainerPost>
        <HeaderPost>
          <DatePost>
            <img src={LogoPost} alt="logo_fashion_like" />
            <div>
              <h3>Fashion Like</h3>
              <span>30julio</span>
            </div>
          </DatePost>
          <TagCategory>Faldas</TagCategory>
        </HeaderPost>
        <ImgPost src={ImgFalda} alt="imagen-producto" />
        <Flex>
          <Flex>
            <FontAwesomeIcon
              icon={ faThumbsUp }
              size="lg"
              color={ 'gray'}
            />
            <span>5</span>
          </Flex>
          <Flex>
            <FontAwesomeIcon
              icon={ faEdit }
              size="lg"
              color={ 'gray'}
            />
            <FontAwesomeIcon
              icon={ faTrashAlt }
              size="lg"
              color={ 'gray'}
            />
          </Flex>
        </Flex>
        <Divider style={{ background: '#cecece' }}/>
        <FooterPost>
          <Flex>
            <FontAwesomeIcon
              icon={ faThumbsUp }
              size="lg"
              color={ 'gray'}
            />
            <span>Me gusta</span>
          </Flex>
          <Flex>
            <FontAwesomeIcon
              icon={ faCommentAlt }
              size="lg"
              color={ 'gray'}
            />
            <span>Comentar</span>
          </Flex>
        </FooterPost>
        <Divider style={{ background: '#cecece' }}/>
      </ContainerPost>
    </Container>
  );
};

export default Post;
