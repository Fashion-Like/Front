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
<<<<<<< HEAD
	const [dataComment, setDataComment] = useState({
		text: '',
	});

	const { text } = dataComment;
=======
	console.log(postId, 'id comments');
	const [dataComment, setDataComment] = useState({ postId: '', text: '' });
	const [isEditComment, setIsEditComment] = useState(false);
	const [commentId, setCommentId] = useState('');
	const [editedComment, setEditedComment] = useState(false);
>>>>>>> 877d0886389a81cd1e384ae3223dff750a8ab498

	const dispatch = useDispatch();

	useEffect(() => {
		postId && dispatch(getAllComments(postId));
	}, [dispatch]);

	let { comments } = useSelector((state) => state.comments);
	console.log(comments, comments.length);

	const handleTextComment = (e) => {
		const comment = {
			postId,
			[e.target.name]: e.target.value,
		};
		setDataComment(comment);
	};

	const handleSaveComment = (e) => {
		e.preventDefault();
<<<<<<< HEAD
		createComment(dataComment).then((response) => {
			dispatch(setNewComment(response));
		});
		setDataComment({
			text: '',
		});
=======
		if (!isEditComment) {
			createComment(dataComment).then((response) => {
				dispatch(setNewComment(response));
			});
		} else {
			updateComment(commentId, dataComment).then((response) => {
				setEditedComment(true);
				dispatch(setUpdateComment(response));
			});
		}
		e.target.reset();
		setDataComment({});
>>>>>>> 877d0886389a81cd1e384ae3223dff750a8ab498
	};

	const handleUpdateComment = (id) => {
		const commentToUpdate = comments.filter((comment) => comment.id === id);
		setDataComment({ text: commentToUpdate[0].text });
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
				{comments.length === 0 ? (
					<WithOutComments>No hay comentarios, agrega uno..</WithOutComments>
				) : (
<<<<<<< HEAD
					<WithOutComments>
						No hay comentarios, agrega uno...
					</WithOutComments>
				)}
			</Scroll>
			<form onSubmit={handleSaveComment}>
				<ContainerInput>
					<input
						placeholder="Escribe un comentario..."
						onChange={handleTextComment}
						name="text"
						value={text}
=======
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
				)}
			</Scroll>
			<form onSubmit={handleSaveComment}>
				<ContainerInput isEdit={isEditComment}>
					<input
						placeholder={'Escribe un comentario...'}
						ref={inputElement}
						autoFocus
						name="comment"
						onChange={handleTextComment}
						value={dataComment.text}
>>>>>>> 877d0886389a81cd1e384ae3223dff750a8ab498
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
	margin: 0 1rem;
	@media (min-width: 800px) {
		position: relative;
	}
	@media (max-width: 800px) {
		grid-area: comments;
	}
`;

const Scroll = styled.div`
	overflow: auto;
	min-height: 75vh;
	max-height: 80vh;

	@media (min-width: 800px) {
		min-height: 380px;
		max-height: 53vh;
	}

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
	width: 100%;

	@media (min-width: 800px) {
		position: absolute;
		bottom: 10px;
	}

	& input {
		font-size: inherit;
		background-color: transparent;
		padding-left: 5px;
		border: 0;
		width: 100%;
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
