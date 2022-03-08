import styled from 'styled-components';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteComment, updateComment } from '../services/CommentService';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteComment, setUpdateComment } from '../stores/slices/comments';
import ModalConfirmDelete from '../components/ModalConfirmDelete';

const Container = styled.div`
	max-width: 100%;
	position: relative;
	height: auto;
	padding: 0.5rem;
	margin-left: 2rem;
	background-color: #f5f5f5;
	border-radius: 10px;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
	margin-bottom: 0.7rem;
`;

const Tip = styled.span`
	width: 0px;
	height: 0px;
	position: absolute;
	background: transparent;
	border: 10px solid #dcdcdc;
	top: 10px;
	left: -20px;
	border-top-color: transparent;
	border-left-color: transparent;
	border-bottom-color: transparent;
`;

const Author = styled.span`
	font-weight: bold;
	padding: 0.5rem;
`;

const DateSpan = styled.span`
	color: gray;
	padding: 0.5rem;
`;

const Text = styled.p`
	display: block;
	width: 100%;
	padding-left: 0.5rem;
`;

const Hr = styled.hr`
	margin: 0.3rem;
	color: gray;
`;

const Comment = ({ author, date, text, commentId }) => {
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

	const handleDeleteComment = () => {
		// setIsOpenModalDelete(true);
		console.log('eliminar');
	};

	// const confirmDeleteComment = async () => {
	// 	const response = await deleteComment(commentId);
	// 	response ? dispatch(setDeleteComment(commentId)) : console.log('error');
	// };

	return (
		<Container>
			<Tip />
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>
						{' '}
						<Author>{author}</Author> <DateSpan> {formatDate(date)} </DateSpan>{' '}
					</div>
					<FontAwesomeIcon icon={faEdit} size="xs" color={'gray'} />
				</div>
				<Hr />
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Text>{text} </Text>
					<FontAwesomeIcon
						icon={faTrashAlt}
						size="sm"
						color={'gray'}
						onClick={() => handleDeleteComment()}
					/>
				</div>
			</div>
			{isOpenModalDelete && (
				<ModalConfirmDelete
					setIsOpenModal={setIsOpenModalDelete}
					isOpenModal={isOpenModalDelete}
					title={'Eliminar comentario'}
					message={'¿Estás seguro que deseas eliminar este comentario?'}
					confirmDeletePost={confirmDeleteComment}
				/>
			)}
		</Container>
	);
};

export default Comment;
