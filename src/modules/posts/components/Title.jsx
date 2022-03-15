import styled from 'styled-components';
import IconComments from '../../../assets/images/icon-comments.png';

const Title = ({ title }) => {
	return (
		<Container>
			<img src={IconComments} alt="icon_comments" />
			<h2>{title}</h2>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	& h2 {
		color: #354a62;
		font-size: 1rem;
	}
	& img {
		width: 20px;
	}
`;

export default Title;
