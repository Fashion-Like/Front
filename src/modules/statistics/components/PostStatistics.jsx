import styled from 'styled-components';
import {
	faThumbsUp,
	faCommentAlt,
	faThumbsDown,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PostStatistics = ({ post }) => {
	return (
		<ContainerPost>
			<ImgPost src={post.pictureUrl} alt="imagen-producto" />
			<div>
				<Flex>
					<FontAwesomeIcon icon={faThumbsUp} size="lg" color={'gray'} />
					<p> {post.likeCount} </p>
				</Flex>
				<Flex>
					<FontAwesomeIcon icon={faThumbsDown} size="lg" color={'gray'} />
					<p> {post.dislikeCount} </p>
				</Flex>
				<Flex>
					<FontAwesomeIcon icon={faCommentAlt} size="lg" color={'gray'} />
					<p> 5 </p>
				</Flex>
			</div>
		</ContainerPost>
	);
};

const ContainerPost = styled.div`
	display: flex;
	gap: 1rem;
`;

const ImgPost = styled.img`
	width: 170px;
	height: 200px;
	border-radius: 10px;
`;

const Flex = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
`;
