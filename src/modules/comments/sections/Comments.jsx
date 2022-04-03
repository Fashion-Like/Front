import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	setNewComment,
	setUpdateComment,
	getAllComments,
} from '../../../stores/slices/comments';
import { createComment } from '../../../services/CommentService';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../components/Comment';

const Comments = ({ postId }) => {
	const [dataComment, setDataComment] = useState({
		text: '',
	});

	const { text } = dataComment;

	const dispatch = useDispatch();

	let { comments } = useSelector((state) => state.comments);
	console.log(comments);
	useEffect(() => {
		dispatch(getAllComments(postId));
	}, [dispatch]);

	const handleTextComment = (e) => {
		const comment = {
			postId,
			[e.target.name]: e.target.value,
		};
		setDataComment(comment);
	};

	const handleSaveComment = (e) => {
		e.preventDefault();
		createComment(dataComment).then((response) => {
			dispatch(setNewComment(response));
		});
		setDataComment({
			text: '',
		});
	};

	return (
		<Container>
			<Scroll>
				{comments.length > 0 ? (
					comments.map((comment) => {
						return <Comment key={comment.id} comment={comment} />;
					})
				) : (
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
	background: lightgrey;
	border-radius: 30px;
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
	min-height: 350px;
`;

export default Comments;
