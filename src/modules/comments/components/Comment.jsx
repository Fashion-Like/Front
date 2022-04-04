import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteComment } from '../../../services/CommentService';
import { setDeleteComment } from '../../../stores/slices/comments';
import { formatDate } from '../../../helpers/FormatDate';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const Comment = ({
	comment,
	setIsEditComment,
	handleUpdateComment,
	editedComment,
	setEditedComment,
}) => {
	const [isHover, setIsHover] = useState(false);
	const dispatch = useDispatch();

	const handleDeleteComment = async () => {
		console.log('borrar');
		try {
			await deleteComment(comment.id);
			dispatch(setDeleteComment(comment));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (editedComment) {
			setEditedComment(false);
			setIsEditComment(false);
		}
	}, [editedComment]);

	return (
		<>
			<Container
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<ContainerComment>
					<h4>{comment.user}</h4>
					<p> {comment.text} </p>
					<span> {formatDate(comment.creationDate)} </span>
				</ContainerComment>
				{comment.isOwn && isHover && (
					<Options>
						<FontAwesomeIcon
							icon={faEdit}
							size="sm"
							color={'gray'}
							onClick={() => handleUpdateComment(comment.id)}
						/>
						<FontAwesomeIcon
							icon={faTrashAlt}
							size="sm"
							color={'gray'}
							onClick={() => handleDeleteComment()}
						/>
					</Options>
				)}
			</Container>
		</>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 10px;
	margin: 1rem;
`;

const Options = styled.div`
	cursor: pointer;
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
