import {
	ContainerModal,
	HeadModal,
	BodyModal,
	Backdrop,
} from '../../../assets/css/styledModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ModalConfirmDelete = ({
	title,
	message,
	isOpenModal,
	setIsOpenModal,
	confirmDeletePost,
	currentPost,
}) => {
	const closeModal = () => {
		setIsOpenModal(false);
	};

	const deletePost = () => {
		confirmDeletePost(currentPost);
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
								<FontAwesomeIcon icon={faQuestionCircle} size="6x" color={'blue'} />
							</div>
						</HeadModal>

						<BodyModal style={{ lineHeight: '2' }}>
							<h2> {title} </h2>
							<p style={{ textAlign: 'center' }}> {message} </p>
							<button onClick={deletePost}>ELIMINAR</button>
							<p style={{ textDecoration: 'underline' }} onClick={closeModal}>
								Cancelar
							</p>
						</BodyModal>
					</ContainerModal>
				</Backdrop>
			)}
		</>
	);
};

export default ModalConfirmDelete;
