import { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import OptionsComments from './OptionsComments';
import { deleteComment } from '../../../services/CommentService';
import { setDeleteComment } from '../../../stores/slices/comments';
import { formatDate } from '../../../helpers/FormatDate';

const Comment = ({
	comment,
	isEditComment,
	setIsEditComment,
	handleUpdateComment,
	editedComment,
	setEditedComment,
}) => {
	const [openOptionsComments, setOpenOptionsComments] = useState(false);

	const openOptions = () => {
		setOpenOptionsComments(true);
	};

	const handleDeleteComment = async () => {
		try {
			await deleteComment(comment.id);
			dispatch(setDeleteComment(comment));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			{openOptionsComments && (
				<OptionsComments
					setOpenOptionsComments={setOpenOptionsComments}
					handleDeleteComment={handleDeleteComment}
					handleUpdateComment={handleUpdateComment}
					isEditComment={isEditComment}
					setIsEditComment={setIsEditComment}
					comment={comment}
					editedComment={editedComment}
					setEditedComment={setEditedComment}
					setIsEditComment={setIsEditComment}
				/>
			)}
			<Container>
				<ContainerComment>
					<h4>{comment.user}</h4>
					<p> {comment.text} </p>
					<span> {formatDate(comment.creationDate)} </span>
				</ContainerComment>
				{comment.isOwn && (
					<div>
						<FontAwesomeIcon
							icon={faEllipsisV}
							size="sm"
							color={'gray'}
							onClick={openOptions}
						/>
					</div>
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
