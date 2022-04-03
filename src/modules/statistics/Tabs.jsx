import { useState } from 'react';
import styled from 'styled-components';

export const Tabs = ({ tab1, tab2, children }) => {
	const [index, setIndex] = useState(0);

	console.log(index);
	return (
		<Container>
			<ContainerTabs>
				<Tab selected={index === 0} onClick={() => setIndex(0)}>
					<span>{tab1}</span>
					<Divider selected={index === 0} />
				</Tab>
				<Tab selected={index === 1} onClick={() => setIndex(1)}>
					<span>{tab2}</span>
					<Divider selected={index === 1} />
				</Tab>
			</ContainerTabs>

			{children.map(
				(contentTab, idx) => index === idx && <div key={idx}>{contentTab}</div>,
			)}
		</Container>
	);
};
const Container = styled.div`
	padding: 1rem 2rem;
	@media (min-width: 1024px) {
		padding: 1rem 7rem;
	}
`;

const ContainerTabs = styled.div`
	display: flex;
	gap: 1.5rem;
	color: #354a62;
`;

const Tab = styled.span`
	cursor: pointer;
	color: ${(props) => (props.selected ? '#073992' : '#354a62')};
	&:hover,
	&:focus,
	&:active {
		color: ${(props) => (props.selected ? '#073992' : '#354a62')};
	}
`;

const Divider = styled.div`
	width: 130px;
	height: ${(props) => (props.selected ? '2px' : '1px')};
	background: ${(props) => (props.selected ? '#073992' : '#354a62')};
	margin: 1rem 0;
`;
