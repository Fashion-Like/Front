import styled from 'styled-components';
import IconComments from '../../../assets/images/icon-comments.png';
import { deletePost, getTags, reactToPost } from '../../../services/PostService';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAllPosts,
	setDeletePost,
	setPostById,
	setUpdatePost,
} from '../../../stores/slices/posts';
import NewPostModal from '../../posts/modal/NewPostModal';
import ModalConfirmDelete from '../modal/ModalConfirmDelete';
import CommentsModal from '../../../modules/comments/modal/CommentsModal';
import Post from '../components/Post';

const SectionPost = ({
	category,
	search,
	setIsOpenModal,
	isOpenModal,
	setIsEdit,
	isEdit,
}) => {
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
	const [isOpenModalComments, setIsOpenModalComments] = useState(false);
	const [prevPost, setPrevPost] = useState({});
	const [statusLike, setStatusLike] = useState(false);
	const [currentPost, setCurrentPost] = useState({});

	const user = JSON.parse(localStorage.getItem('user'));

	const title = isEdit ? 'Editar publicación' : 'Crear publicación';

	const dispatch = useDispatch();

	let { posts } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(getAllPosts());
	}, [dispatch]);

	const handleDeletePost = (post) => {
		setIsOpenModalDelete(true);
		setCurrentPost(post);
	};

	const confirmDeletePost = async (post) => {
		const response = await deletePost(post.id);
		response ? dispatch(setDeletePost(post)) : console.log('error');
	};

	const handleEditPost = (post) => {
		setIsEdit(true);
		setPrevPost(dispatch(setPostById(post)));
		setIsOpenModal(true);
	};

	const getAllTags = async () => {
		const allTags = await getTags();
		console.log(allTags);
	};

	isOpenModal && getAllTags();

	if (category) {
		posts = posts.filter((post) => post.tags[post.tags.length - 1] === category);
	}

	if (search) {
		posts = posts.filter((post) => {
			return (
				post.tags[post.tags.length - 1].toLowerCase().includes(search) ||
				post.description.toLowerCase().includes(search)
			);
		});
	}

	const handleLike = async (post) => {
		setStatusLike(!statusLike);
		const data = {
			postId: post.id,
			reactionType: statusLike ? 1 : 2,
		};
		reactToPost(data).then((response) => {
			console.log(response);
			dispatch(setUpdatePost({ ...post, userReaction: response.reactionType }));
		});
	};

	const handleNewComment = () => {
		setIsOpenModalComments(true);
		console.log('commentario');
	};

	return (
		posts && (
			<Container>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: '1rem',
					}}
				>
					<div
						style={{
							display: 'flex',
							gap: '.5rem',
							alignItems: 'center',
							borderBottom: 'solid 1px #354A62',
							height: '40px',
						}}
					>
						<img style={{ width: '20px' }} src={IconComments} alt="icon_comments" />
						<Title>Publicaciones</Title>
					</div>
				</div>
				{posts?.length > 0 ? (
					posts.map((post) => (
						<div key={post.id}>
							<Post
								post={post}
								handleEditPost={handleEditPost}
								handleNewComment={handleNewComment}
								handleDeletePost={handleDeletePost}
							/>
							{isOpenModalComments && (
								<CommentsModal
									key={post.id}
									isOpenModal={isOpenModalComments}
									setIsOpenModal={setIsOpenModalComments}
									post={post}
								/>
							)}
						</div>
					))
				) : (
					<p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.5rem' }}>
						{' '}
						No hay publicaciones para mostrar...{' '}
					</p>
				)}
				{isOpenModal && (
					<NewPostModal
						title={title}
						setIsOpenModal={setIsOpenModal}
						isOpenModal={isOpenModal}
						setIsEdit={setIsEdit}
						isEdit={isEdit}
						prevPost={prevPost}
					/>
				)}
				{isOpenModalDelete && (
					<ModalConfirmDelete
						setIsOpenModal={setIsOpenModalDelete}
						isOpenModal={isOpenModalDelete}
						title={'Eliminar publicación'}
						message={'¿Estás seguro que deseas eliminar esta publicación?'}
						confirmDeletePost={confirmDeletePost}
						currentPost={currentPost}
					/>
				)}
			</Container>
		)
	);
};

const Container = styled.div`
	padding: 1rem 1.5rem;
`;

const Title = styled.h2`
	color: #354a62;
	font-size: 1rem;
`;

export default SectionPost;
