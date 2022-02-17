import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import GlobalStyle from '../assets/css/globalStyles';
import BannerMujer from '../assets/images/banners_mujer.svg';
import BannerHombre from '../assets/images/banners_hombres.svg';
import BannerNiños from '../assets/images/banner_niños.svg';
import Post from '../components/Post';
// import NewPostModal from '../components/NewPostModal';
import { Provider } from 'react-redux';
import store from "../stores/index"

const GridLayout = styled.div`

  @media (min-width: 1120px) {
    display: grid;
    grid-template-columns: 2% 20% 5% 46% 5% 20% 2%;
    grid-template-areas:
    'header header header header header header header'
    '. categories . posts . banners .';
    grid-template-rows: 15vh 85vh;
  }
`;

const Posts = styled.div`
  grid-area: posts;
`;

const Banners = styled.div`
  grid-area: banners;
  display: none;
    @media (min-width: 1120px) {
    display: block;
  }
`;

const HomePage = () => {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);

  // const title = isEdit ? "Editar publicación" : "Crear publicación";

  return (
    <Provider store={store}>
      <GridLayout>
        <GlobalStyle />
        <Header />
        <Categories />
        <Posts>
          <Featured />
          <Post 
            // setIsOpenModal={setIsOpenModal}
            // setIsEdit={setIsEdit}
            // isEdit={isEdit}
          />
        </Posts>
        <Banners>
          <img src={BannerMujer} alt="banner_mujer" />
          <img src={BannerHombre} alt="banner_hombre" />
          <img src={BannerNiños} alt="banner_niños" />
        </Banners>
      </GridLayout>
      {/* {isOpenModal &&
        <NewPostModal 
          title={title}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          />
      } */}
    </Provider>

  );
};

export default HomePage;
