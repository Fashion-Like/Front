import styled from 'styled-components';
import LogoPost from '../../../assets/images/logomobile.svg';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {
	faThumbsUp,
	faCommentAlt,
	faTrashAlt,
	faThumbsDown,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TAGS } from '../../../constants.js/tags';
import { useState } from 'react';
import { setUpdatePost } from '../../../stores/slices/posts';
import { reactToPost } from '../../../services/PostService';
import { useDispatch } from 'react-redux';
const Post = ({
	post,
	handleDeletePost,
	handleNewComment,
	handleEditPost,
}) => {
	console.log(post);
	const dispatch = useDispatch();

	const [statusLike, setStatusLike] = useState(0);
	const [like, setLike] = useState(false);
	const [disLike, setDisLike] = useState(false);

	const user = JSON.parse(localStorage.getItem('user'));
	const formatDate = (date) => {
		const newDate = new Date(date);
		const options = {
			month: 'long',
			day: '2-digit',
		};
		return new Intl.DateTimeFormat('es', options).format(newDate);
	};

	const postLike = async (post) => {
		if (like === false) {
			setLike(true);
			setDisLike(false);
			const data = {
				postId: post.id,
				reactionType: 1,
			};

			reactToPost(data).then((response) => {
				console.log(response);
				dispatch(
					setUpdatePost({ ...post, userReaction: response.reactionType })
				);
			});
		} else {
			setLike(false);
			const data = {
				postId: post.id,
				reactionType: 0,
			};

			reactToPost(data).then((response) => {
				console.log(response);
				dispatch(
					setUpdatePost({ ...post, userReaction: response.reactionType })
				);
			});
		}
	};

	const postDisLike = (post) => {
		if (disLike === false) {
			setDisLike(true);
			setLike(false);
			const data = {
				postId: post.id,
				reactionType: 2,
			};

			reactToPost(data).then((response) => {
				console.log(response);
				dispatch(
					setUpdatePost({ ...post, userReaction: response.reactionType })
				);
			});
		} else {
			setDisLike(false);
			const data = {
				postId: post.id,
				reactionType: 0,
			};

			reactToPost(data).then((response) => {
				console.log(response);
				dispatch(
					setUpdatePost({ ...post, userReaction: response.reactionType })
				);
			});
		}
	};

	return (
		<Container>
			<HeaderPost>
				<DatePost>
					<img src={LogoPost} alt="logo_fashion_like" />
					<div>
						<h3>Fashion Like</h3>
						<span>{formatDate(post.creationDate)}</span>
					</div>
				</DatePost>
				<TagCategory
					color={TAGS.map(
						(tag) =>
							tag.value === post.tags[post.tags.length - 1] && tag.color
					)}
				>
					{post.tags[post.tags.length - 1]}
				</TagCategory>
			</HeaderPost>
			<DescriptionPost>{post.description}</DescriptionPost>
			<ImgPost src={post.pictureUrl} alt="imagen-producto" />
			<Flex>
				<Flex style={{ cursor: 'pointer' }}>
					{like || post.userReaction == 1 ? (
						<i
							className="fa-solid fa-thumbs-up fs-5"
							onClick={() => postLike(post)}
						></i>
					) : (
						<FontAwesomeIcon
							icon={faThumbsUp}
							size="lg"
							color={'gray'}
							onClick={() => postLike(post)}
						/>
					)}
					{disLike || post.userReaction == 2 ? (
						<i
							className="fa-solid fa-thumbs-down fs-5"
							onClick={() => postDisLike(post)}
						></i>
					) : (
						<FontAwesomeIcon
							icon={faThumbsDown}
							size="lg"
							color={'gray'}
							onClick={() => postDisLike(post)}
						/>
					)}
					<FontAwesomeIcon
						icon={faCommentAlt}
						size="lg"
						color={'gray'}
						onClick={() => handleNewComment(post.id)}
					/>
				</Flex>

				<Flex style={{ cursor: 'pointer' }}>
					{user.name === 'Admin' && (
						<FontAwesomeIcon
							icon={faEdit}
							size="lg"
							color={'gray'}
							onClick={() => handleEditPost(post)}
						/>
					)}

					{user.name === 'Admin' && (
						<FontAwesomeIcon
							icon={faTrashAlt}
							size="lg"
							color={'gray'}
							id={post.id}
							values={post.id}
							onClick={() => handleDeletePost(post)}
						/>
					)}
				</Flex>
			</Flex>
		</Container>
	);
};

const Container = styled.div`
	padding: 1rem 1.5rem;
	background: #ffffff;
	border-radius: 10px;
	margin: 0.5rem 1.5rem;
`;

const HeaderPost = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.25rem;
`;

const DatePost = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

const TagCategory = styled.span`
	border: solid 2px ${(props) => props.color};
	padding: 0.2rem;
	border-radius: 5px;
`;

const ImgPost = styled.img`
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
	gap: 3rem;
`;

const DescriptionPost = styled.p`
	margin: 0.5rem 0;
	line-height: 1.5;
`;

export default Post;
