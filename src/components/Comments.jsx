import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	setNewComment,
	setUpdateComment,
	getAllComments,
} from '../stores/slices/comments';
import { createComment } from '../services/CommentService';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './Comment';

const Container = styled.div`
	margin: 0 1.5rem;
`;

const Input = styled.input`
	display: block;
	width: 100%;
	padding: 0.5rem 1rem 0.4rem 1rem;
	border: none;
	outline: none;
	border-bottom: 1px solid gray;
	background: transparent;
`;

const Comments = ({ postId }) => {
	const [dataComment, setDataComment] = useState({});

	const dispatch = useDispatch();

	let { comments } = useSelector((state) => state.comments);
	console.log(comments);
	useEffect(() => {
		dispatch(getAllComments(postId));
	}, [dispatch]);

	const handleTextComment = (e) => {
		const comment = {
			postId,
			text: e.target.value,
		};
		setDataComment(comment);
	};

	const handleSaveComment = (e) => {
		e.preventDefault();
		createComment(dataComment).then((response) => {
			dispatch(setNewComment(response));
		});
		setDataComment({});
	};

	return (
		<Container>
			{comments.length > 0 &&
				comments.map((comment) => {
					return (
						<Comment
							key={comment.id}
							author={comment.user}
							text={comment.text}
							date={comment.creationDate}
							commentId={comment.id}
						/>
					);
				})}
			<form onSubmit={handleSaveComment}>
				<Input placeholder="Agrega un comentario..." onChange={handleTextComment} />
				<input type="submit" value="button" hidden />
			</form>
		</Container>
	);
};

export default Comments;
