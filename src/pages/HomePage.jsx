import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../modules/Header/sections/Header';
import Categories from '../modules/posts/components/Categories';
import Featured from '../modules/posts/components/Featured';
import GlobalStyle from '../assets/css/globalStyles';
import BannerMujer from '../assets/images/banners_mujer.svg';
import BannerHombre from '../assets/images/banners_hombres.svg';
import BannerNiños from '../assets/images/banner_niños.svg';
import SectionPosts from '../modules/posts/sections/SectionPosts';
import { Provider } from 'react-redux';
import store from '../stores/index';

const HomePage = () => {
	const [category, setCategory] = useState('');
	const [search, setSearch] = useState('');
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	return (
		<Provider store={store}>
			<GridLayout>
				<GlobalStyle />
				<Header
					setSearch={setSearch}
					search={search}
					setIsOpenModal={setIsOpenModal}
					setIsEdit={setIsEdit}
				/>
				<Categories setCategory={setCategory} />
				<Posts>
					<Featured />
					<SectionPosts
						category={category}
						search={search}
						setIsOpenModal={setIsOpenModal}
						isOpenModal={isOpenModal}
						setIsEdit={setIsEdit}
						isEdit={isEdit}
					/>
				</Posts>
				<Banners>
					<img src={BannerMujer} alt="banner_mujer" />
					<img src={BannerHombre} alt="banner_hombre" />
					<img src={BannerNiños} alt="banner_niños" />
				</Banners>
			</GridLayout>
		</Provider>
	);
};

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
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}
`;

export default HomePage;
