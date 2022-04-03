import styled from 'styled-components';

const ErrorMessage = styled.div`
	display: block;
	color: #cb3234;
	padding: 1rem;
	text-align: center;
`;

const Error = ({ message }) => {
	return <ErrorMessage> {message} </ErrorMessage>;
};

export default Error;
