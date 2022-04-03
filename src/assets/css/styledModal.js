import styled from 'styled-components';

const Backdrop = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.7);
	padding: 40px;
	z-index: 1;
	display: grid;
	align-items: center;
	justify-items: center;
`;

const ContainerModal = styled.div`
	position: fixed;
	z-index: 2;
	background: white;
	width: 380px;
	min-height: 350px;
	height: auto;
	border-radius: 5px;
	padding: 20px;
`;

const HeadModal = styled.div`
	display: flex;
	flex-direction: column;

	div {
		text-align: center;
	}

	button {
		width: 30px;
		font-size: 22px;
		align-self: flex-end;
		background: transparent;
		border: none;
		cursor: pointer;
	}
`;

const BodyModal = styled.div`
	padding-top: 2rem;
	min-height: 60%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	button {
		width: 90%;
		background: linear-gradient(90deg, #003185 1.89%, #01567e 98.36%);
		height: 30px;
		border: none;
		color: white;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;

		&:hover {
			opacity: 0.97;
		}
	}
`;

export { Backdrop, ContainerModal, HeadModal, BodyModal };
