import { HeadModal, Backdrop } from '../../../assets/css/styledModal';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Comments from '../sections/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Post from '../../posts/components/Post';

const CommentsModal = ({ isOpenModal, setIsOpenModal, post }) => {
	const closeModal = () => {
		setIsOpenModal(false);
	};

	return (
		<>
			{isOpenModal && (
				<Backdrop>
					<ContainerModal>
						<HeadModal>
							<button onClick={closeModal}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</HeadModal>

						<BodyModal>
							<Post post={post} origin={'comments'} />
							<Comments postId={post.id} />
						</BodyModal>
					</ContainerModal>
				</Backdrop>
			)}
		</>
	);
};
const ContainerModal = styled.div`
	padding: 1rem;
	line-height: 1.5;
	border-radius: 10px;
	width: auto;
	max-width: 750px;
	max-height: 550px;
	background: #ffffff;
`;

const BodyModal = styled.div`
	display: grid;
	grid-template-columns: 2fr 1.5fr;
`;

export default CommentsModal;
