import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const OptionsComments = ({
	setOpenOptionsComments,
	handleDeleteComment,
	handleUpdateComment,
	comment,
	editedComment,
	setEditedComment,
	setIsEditComment,
}) => {
	const closeOptions = () => {
		setOpenOptionsComments(false);
	};

	useEffect(() => {
		if (editedComment) {
			closeOptions();
			setEditedComment(false);
			setIsEditComment(false);
		}
	}, [editedComment]);

	return (
		<Container>
			<div onClick={() => handleUpdateComment(comment.id)}>
				<span>Editar</span>
				<FontAwesomeIcon icon={faEdit} size="sm" color={'gray'} />
			</div>
			<div onClick={() => handleDeleteComment()}>
				<span>Eliminar</span>
				<FontAwesomeIcon icon={faTrashAlt} size="sm" color={'gray'} />
			</div>
		</Container>
	);
};

const Container = styled.div`
	background: #f5f5f5;
	font-size: 12px;
	line-height: 2;
	& button {
		margin-left: 95%;
		border: none;
		background: transparent;
		cursor: pointer;
	}
	& div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.1rem 2rem;
		cursor: pointer;

		:hover {
			background: #f1f1f1;
		}
	}
`;

export default OptionsComments;
