import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {
	setNewComment,
	setUpdateComment,
	getAllComments,
} from '../../../stores/slices/comments';
import { createComment } from '../../../services/CommentService';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../components/Comment';
import { updateComment } from '../../../services/CommentService';

const Comments = ({ postId }) => {
	const [dataComment, setDataComment] = useState({});
	const [updateDataComment, setUpdteDataComment] = useState({});
	const [isEditComment, setIsEditComment] = useState(false);
	const [commentId, setCommentId] = useState('');
	const [editedComment, setEditedComment] = useState(false);

	const dispatch = useDispatch();

	let { comments } = useSelector((state) => state.comments);
	useEffect(() => {
		dispatch(getAllComments(postId));
	}, [dispatch]);

	const handleTextComment = (e) => {
		const comment = {
			postId,
			text: e.target.value,
		};
		!isEditComment ? setDataComment(comment) : setUpdteDataComment(comment);
	};

	const handleSaveComment = (e) => {
		e.preventDefault();
		if (!isEditComment) {
			createComment(dataComment).then((response) => {
				dispatch(setNewComment(response));
			});
		} else {
			updateComment(commentId, updateDataComment).then((response) => {
				setEditedComment(true);
				dispatch(setUpdateComment(response));
			});
		}
		setDataComment({});
	};

	const handleUpdateComment = (id) => {
		setIsEditComment(true);
		setCommentId(id);
	};

	const inputElement = useRef(null);

	useEffect(() => {
		if (isEditComment) {
			inputElement.current.focus();
		}
	}, [isEditComment]);

	return (
		<Container>
			<Scroll>
				{comments.length > 0 ? (
					comments.map((comment) => {
						return (
							<Comment
								key={comment.id}
								comment={comment}
								isEditComment={isEditComment}
								setIsEditComment={setIsEditComment}
								handleUpdateComment={handleUpdateComment}
								editedComment={editedComment}
								setEditedComment={setEditedComment}
							/>
						);
					})
				) : (
					<WithOutComments>No hay comentarios, agrega uno...</WithOutComments>
				)}
			</Scroll>
			<form onSubmit={handleSaveComment}>
				<ContainerInput isEdit={isEditComment}>
					<input
						placeholder={
							isEditComment ? 'Edita tu comentario...' : 'Escribe un comentario...'
						}
						ref={inputElement}
						autoFocus
						onChange={handleTextComment}
					/>
					<button type="submit" value="button">
						Enviar
					</button>
				</ContainerInput>
			</form>
		</Container>
	);
};

const Container = styled.div`
	margin: 0 1.5rem;
`;

const Scroll = styled.div`
	overflow: auto;
	max-height: 70vh;
	min-height: 425px;

	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-track {
		background: #ececec;
		border-radius: 30px;
	}
	&::-webkit-scrollbar-thumb {
		background: #ccd7e0;
		border-radius: 30px;
	}
`;

const ContainerInput = styled.div`
	display: grid;
	grid-template-columns: 1fr 50px;
	margin: 2px 5px;
	padding: 0.6rem 1rem;
	background: #e5e5e5;
	border-radius: 30px;
	border: solid 2px ${(props) => (props.isEdit ? 'rgba(82,168,236,.8)' : 'none')};
	box-shadow: ${(props) => (props.isEdit ? '0 0 8px rgba(82,168,236,.6)' : 'none')};

	& input {
		font-size: inherit;
		background-color: transparent;
		padding-left: 5px;
		border: 0;
		&:focus {
			outline: none;
		}
	}
	& button {
		background: transparent;
		border: none;
		color: gray;
		font-weight: bold;
	}
`;

const WithOutComments = styled.div`
	padding: 1rem;
	text-align: center;
	height: auto;
`;

export default Comments;
