import styled from 'styled-components';

const WithoutPublications = () => {
	return <Container>No hay publicaciones para mostrar...</Container>;
};

const Container = styled.p`
	text-align: center;
	margin-top: 2rem;
	font-size: 1.5rem;
`;

export default WithoutPublications;
