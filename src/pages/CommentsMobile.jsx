import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../modules/Header/sections/Header';
import GlobalStyle from '../assets/css/globalStyles';
import { Provider } from 'react-redux';
import store from '../stores/index';
import Comments from '../modules/comments/sections/Comments';

export const CommentsMobile = () => {
	const [search, setSearch] = useState('');
	const [idPost, setIdPost] = useState('');
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	// const [loading, setLoading] = useState(true);

	const params = window.location.pathname;
	const postId = Number(params.substring(params.lastIndexOf('/') + 1));

	// useEffect(() => {
	// 	setIdPost(postId);
	// 	setLoading(false);
	// }, [postId]);

	console.log(params, postId);
	// console.log(idPost, 'id pge');

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
				<Comments postId={postId} />
			</GridLayout>
		</Provider>
	);
};

const GridLayout = styled.div`
	display: grid;
	grid-template-areas:
		'header'
		'comments';
	grid-template-rows: 12vh 80vh;
`;
