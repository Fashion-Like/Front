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
import { formatDate } from '../../../helpers/FormatDate';

const Post = ({ post, handleDeletePost, handleEditPost, handleNewComment, origin }) => {
	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<ContainerPost>
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
						(tag) => tag.value === post.tags[post.tags.length - 1] && tag.color,
					)}
				>
					{post.tags[post.tags.length - 1]}
				</TagCategory>
			</HeaderPost>
			<DescriptionPost>{post.description}</DescriptionPost>
			<ImgPost src={post.pictureUrl} alt="imagen-producto" origin={origin} />
			<Flex>
				<Flex>
					<FontAwesomeIcon icon={faThumbsUp} size="lg" color={'gray'} />
					<FontAwesomeIcon icon={faThumbsDown} size="lg" color={'gray'} />
					<FontAwesomeIcon
						icon={faCommentAlt}
						size="lg"
						color={'gray'}
						onClick={() => handleNewComment(post.id)}
					/>
				</Flex>

				<Flex>
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
		</ContainerPost>
	);
};

const ContainerPost = styled.div`
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
		max-height: ${(props) => (props.origin === 'comments' ? '200px' : '50vh')};
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 3rem;
	cursor: pointer;
`;

const DescriptionPost = styled.p`
	margin: 0.5rem 0;
	line-height: 1.5;
`;

export default Post;
