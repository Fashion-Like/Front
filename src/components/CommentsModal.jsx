import { HeadModal, Backdrop } from '../assets/css/styledModal';
import LogoPost from '../assets/images/logomobile.svg';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Comments from './Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TAGS } from '../constants.js/tags';

const CommentsModal = ({ isOpenModal, setIsOpenModal, post }) => {
	const closeModal = () => {
		setIsOpenModal(false);
	};

	const formatDate = (date) => {
		const newDate = new Date(date);
		const options = {
			month: 'long',
			day: '2-digit',
		};
		return new Intl.DateTimeFormat('es', options).format(newDate);
	};

	return (
		<>
			{isOpenModal && (
				<Backdrop>
					<ContainerModal>
						<HeadModal>
							<button onClick={closeModal}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</HeadModal>

						<BodyModal>
							<div style={{ textAlign: 'center' }}>
								<HeaderPost>
									<DatePost>
										<img src={LogoPost} alt="logo_fashion_like" />
										<div>
											<h3>Fashion Like</h3>
											<span>{formatDate(post.creationDate)}</span>
										</div>
									</DatePost>
									<TagCategory
										color={TAGS.map(
											(tag) => tag.value === post.tags[post.tags.length - 1] && tag.color,
										)}
									>
										{post.tags[post.tags.length - 1]}
									</TagCategory>
								</HeaderPost>
								<p style={{ textAlign: 'left', margin: '0.5rem' }}>{post.description}</p>
								<img src={post.pictureUrl} alt="imagen-producto" />
							</div>
							<Comments postId={post.id} />
						</BodyModal>
					</ContainerModal>
				</Backdrop>
			)}
		</>
	);
};
const ContainerModal = styled.div`
	padding: 1rem;
	line-height: 1.5;
	border-radius: 10px;
	width: auto;
	max-width: 750px;
	background: #ffffff;
`;

const BodyModal = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
`;

const HeaderPost = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.25rem;
`;

const DatePost = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

const TagCategory = styled.span`
	border: solid 2px ${(props) => props.color};
	padding: 0.2rem;
	border-radius: 5px;
`;

export default CommentsModal;
