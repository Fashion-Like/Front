import styled from 'styled-components';
import { deletePost } from '../../../services/PostService';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, setDeletePost, setPostById } from '../../../stores/slices/posts';
import NewPostModal from '../modal/NewPostModal';
import ModalConfirmDelete from '../modal/ModalConfirmDelete';
import Post from '../components/Post';
import CommentsModal from '../../comments/modal/CommentsModal';
import Title from '../components/Title';
import WithoutPublications from '../components/WithoutPublications';

const SectionPosts = ({
	category,
	search,
	setIsOpenModal,
	setIsEdit,
	isEdit,
	isOpenModal,
}) => {
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
	const [prevPost, setPrevPost] = useState({});
	const [currentPost, setCurrentPost] = useState({});
	const [isOpenComment, setIsOpenComment] = useState(false);
	const [dataComments, setdataComments] = useState({});

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

	const handleNewComment = (post) => {
		if (window.innerWidth >= 800) {
			setIsOpenComment(true);
			setdataComments(post);
		} else {
			window.location.href = `/comments/${post.id}`;
		}
	};

	return (
		posts && (
			<Container>
				<Title title={'Publicaciones'} />
				<Divider />
				{posts?.length > 0 ? (
					posts.map((post) => (
						<Post
							key={post.id}
							post={post}
							handleEditPost={handleEditPost}
							handleDeletePost={handleDeletePost}
							handleNewComment={() => handleNewComment(post)}
						/>
					))
				) : (
					<WithoutPublications />
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
				{isOpenComment && (
					<CommentsModal
						setIsOpenModal={setIsOpenComment}
						isOpenModal={isOpenComment}
						post={dataComments}
					/>
				)}
			</Container>
		)
	);
};

const Container = styled.div`
	padding: 1rem 1.5rem;
`;

const Divider = styled.div`
	width: 130px;
	height: 1px;
	background: #354a62;
	margin: 1rem 0;
`;

export default SectionPosts;
