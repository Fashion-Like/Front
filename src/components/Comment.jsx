import styled from 'styled-components';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteComment, updateComment } from '../services/CommentService';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteComment, setUpdateComment } from '../stores/slices/comments';
import ModalConfirmDelete from '../components/ModalConfirmDelete';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Comment = ({ comment }) => {
	const dispatch = useDispatch();
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

	const formatDate = (date) => {
		const newDate = new Date(date);
		const options = {
			month: 'long',
			day: '2-digit',
		};
		return new Intl.DateTimeFormat('es', options).format(newDate);
	};

	const openOptions = () => {
		// setIsOpenModalDelete(true);
		console.log('opciones de eliminar y editar');
	};

	const confirmDeleteComment = async () => {
		console.log('eliminar');
		// const response = await deleteComment(commentId);
		// response ? dispatch(setDeleteComment(commentId)) : console.log('error');
	};

	return (
		<>
			<Container>
				<ContainerComment>
					<h4>{comment.user}</h4>
					<p> {comment.text} </p>
					<span> {formatDate(comment.creationDate)} </span>
				</ContainerComment>
				{comment.user !== 'admin' && (
					<div>
						<FontAwesomeIcon
							icon={faEllipsisV}
							size="sm"
							color={'gray'}
							onClick={() => openOptions()}
						/>
					</div>
				)}
			</Container>
			{isOpenModalDelete && (
				<ModalConfirmDelete
					setIsOpenModal={setIsOpenModalDelete}
					isOpenModal={isOpenModalDelete}
					title={'Eliminar comentario'}
					message={'¿Estás seguro que deseas eliminar este comentario?'}
					confirmDeletePost={confirmDeleteComment}
				/>
			)}
		</>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 10px;
	margin: 1rem;
`;

const ContainerComment = styled.div`
	line-height: 1.3;
	& h4 {
		font-weight: bold;
	}
	& span {
		color: gray;
		font-size: 14px;
	}
`;

export default Comment;
