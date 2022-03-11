import { ContainerModal, HeadModal, Backdrop } from '../assets/css/styledModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PostForm from './PostForm';
import styled from 'styled-components';

const BodyModal = styled.div`
	margin-top: 1rem;
	height: auto;
`;

const NewPostModal = ({
	title,
	isOpenModal,
	setIsOpenModal,
	setIsEdit,
	isEdit,
	prevPost,
}) => {
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
							<div>
								<h2> {title} </h2>
							</div>
						</HeadModal>

						<BodyModal>
							<PostForm
								setIsOpenModal={setIsOpenModal}
								prevPost={prevPost}
								isEdit={isEdit}
								setIsEdit={setIsEdit}
							/>
						</BodyModal>
					</ContainerModal>
				</Backdrop>
			)}
		</>
	);
};

export default NewPostModal;
