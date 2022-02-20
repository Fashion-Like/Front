import styled from 'styled-components';
import LogoPost from '../assets/images/logomobile.svg';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faCommentAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconComments from '../assets/images/icon-comments.png';
import { getPosts, deletePost, getTags } from '../services/PostService';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, setDeletePost, setPostById} from '../stores/slices/posts';
import NewPostModal from '../components/NewPostModal';
import { TAGS } from '../constants.js/tags';


const Container = styled.div`
  padding: 1rem 1.5rem;
`;

const ContainerPost = styled.div`
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-radius: 10px;
  margin: 1.5rem;
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
  border: solid 2px ${(props) => props.color};
  padding: .2rem;
  border-radius: 5px;
`;


const ImgPost = styled.img`
  /* object-fit: cover; */
  width: 100%;
  height: auto;
  max-height: 80vh;
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

const DescriptionPost = styled.p`
  margin: .5rem 0;
  line-height: 1.5;
`;

const Button = styled.button`
  height: 2.5rem;
  width: 30%;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  background: linear-gradient(90deg, #073992 1.89%, #00628F 98.36%);
  font-size: 0.90rem;
  cursor: pointer;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  touch-action: manipulation;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(90deg, #003185 1.89%, #01567e 98.36%);
  }
`
const Post = ({}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [prevPost, setPrevPost] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));


  const title = isEdit ? "Editar publicación" : "Crear publicación";

  const dispatch = useDispatch();

  const { posts } = useSelector(state => state.posts);

  const openModal = () => {
    setIsOpenModal(true);
    getAllTags();
  };
  
  
  useEffect(() => {
    dispatch( getAllPosts() );
  }, [dispatch]);

  const handleDeletePost = async (post) => {
    const response = await deletePost(post.id);
    response ? dispatch(setDeletePost(post)) : console.log("error")
  }

  const handleEditPost = (post) => {
    setIsEdit(true)
    setPrevPost(dispatch(setPostById(post)));
    setIsOpenModal(true)
  }

  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = {
      month: "long",
      day: "2-digit"
    }
    return new Intl.DateTimeFormat("es", options).format(newDate);
  }

  const getAllTags = async () => {
    const allTags = await getTags();
    console.log(allTags)
  }

  return (

    posts && 
    <Container>
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}
        >
        <div
        style={{ display: 'flex', gap: '.5rem', alignItems: 'center',borderBottom: 'solid 1px #354A62', height: '40px'}}
        >
          <img
          style={{ width: '20px' }}
          src={IconComments}
          alt="icon_comments"
        />
          <Title>Publicaciones</Title>
        </div>
        <Button
        onClick={openModal}
        >
          <FontAwesomeIcon
            icon={ faPlus }
            size="sm"
            color={ 'white'}
          />
          {' '}
          Agregar
        </Button>
      </div>
      {
        posts ? posts.map( (post) => (
        <ContainerPost
          key={post.id}
        >
          <HeaderPost>
            <DatePost>
              <img src={LogoPost} alt="logo_fashion_like" />
              <div>
                <h3>Fashion Like</h3>
                <span>{formatDate(post.creationDate)}</span>
              </div>
            </DatePost>
            <TagCategory
              color={
                TAGS.map(tag => (tag.value === post.tags[post.tags.length -1] && tag.color))
              }
            >
              {post.tags[post.tags.length -1]}
            </TagCategory>
          </HeaderPost>
          <DescriptionPost>{post.description}</DescriptionPost>
          <ImgPost src={post.pictureUrl} alt="imagen-producto" />
          <Flex>
            <Flex>
              <FontAwesomeIcon
                icon={ faThumbsUp }
                size="lg"
                color={ 'gray'}
              />
              <span> {post.userReaction} </span>
            </Flex>
            <Flex>
              {
                user.name === "Admin" && 
                <FontAwesomeIcon
                icon={ faEdit }
                size="lg"
                color={ 'gray'}
                style={{cursor: "pointer"}}
                onClick={() => handleEditPost(post)}
                />
              }

              {
                user.name === "Admin" &&               
                <FontAwesomeIcon
                icon={ faTrashAlt }
                size="lg"
                color={ 'gray'}
                style={{cursor: "pointer"}}
                id={post.id}
                values={post.id}
                onClick={() => handleDeletePost(post)}
                />
              }

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
        )) : ""
      }
      {isOpenModal &&
        <NewPostModal 
          title={title}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          prevPost={prevPost}
          />
      }
    </Container>
  );
};

export default Post;
