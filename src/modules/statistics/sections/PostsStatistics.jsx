import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../../stores/slices/posts';
import { PostStatistics } from '../components/PostStatistics';

export const PostsStatistics = () => {
	const dispatch = useDispatch();

	let { posts } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(getAllPosts());
	}, [dispatch]);

	return (
		posts && (
			<Container>
				{posts?.length > 0 ? (
					posts.map((post) => <PostStatistics key={post.id} post={post} />)
				) : (
					<p>No hay estadísticas para mostrar...</p>
				)}
			</Container>
		)
	);
};

const Container = styled.div`
	padding: 0 0.5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	@media (min-width: 1024px) {
		padding: 0 3rem;
		gap: 2.5rem;
	}
`;
