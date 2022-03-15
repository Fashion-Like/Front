import { useEffect, useState } from 'react';
import styled from 'styled-components';
import IconComments from '../../../assets/images/icon-comments.png';
import { getPostsFeatured } from '../../../services/PostService';
import Title from './Title';

const Featured = () => {
	const [allPostFeatured, setAllPostsFeatured] = useState([]);

	useEffect(() => {
		getPostsFeatured()
			.then((response) => {
				setAllPostsFeatured(response);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Container>
			<Title title={'Destacados'} />
			<Divider />

			<FeaturedDiv>
				{allPostFeatured.length > 0 &&
					allPostFeatured.map((post) => (
						<img src={post.pictureUrl} alt="post-image" key={post.pictureUrl} />
					))}
			</FeaturedDiv>
		</Container>
	);
};

const Container = styled.div`
	padding: 1rem 1.5rem;
	margin-bottom: 1rem;
	& div {
		display: flex;
		gap: 0.7rem;
		align-items: center;
		& img {
			width: 20px;
		}
	}
`;

const Divider = styled.div`
	width: 125px;
	height: 1px;
	background: #354a62;
	margin: 1rem 0;
`;

const FeaturedDiv = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	margin-bottom: 1rem;
	overflow: auto;
	& img {
		min-width: 200px;
		max-width: 200px;
		height: 200px;
		border-radius: 10px;
		margin-bottom: 0.5rem;
	}
	&::-webkit-scrollbar {
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
		background: #ccd7e0;
		border-radius: 30px;
	}
`;

export default Featured;
