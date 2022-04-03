import { Provider } from 'react-redux';
import store from '../stores/index';
import { CommentsChart } from '../modules/charts/CommentsChart';
import { TotalUsersChart } from '../modules/charts/TotalUsersChart';
import Header from '../modules/Header/sections/Header';
import GlobalStyle from '../assets/css/globalStyles';
import styled from 'styled-components';
import { Tabs } from '../modules/statistics/Tabs';
import { PostsStatistics } from '../modules/statistics/sections/PostsStatistics';

const Statistics = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<GridLayout>
				<Header />
				<ContainerStatistics>
					<Tabs tab1={'General'} tab2={'Detalle'}>
						<div>
							<GeneralStatistics>
								<TotalUsersChart />
								<TotalUsersChart />
								<TotalUsersChart />
							</GeneralStatistics>
						</div>

						<div>
							<PostsStatistics />
						</div>
					</Tabs>
				</ContainerStatistics>
			</GridLayout>
		</Provider>
	);
};

const GridLayout = styled.div`
	display: grid;
	grid-template-areas:
		'header'
		'statistics';
	grid-template-rows: 15vh 85vh;
`;

const ContainerStatistics = styled.div`
	grid-area: statistics;
`;

const GeneralStatistics = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media (min-width: 800px) {
		display: flex;
		flex-direction: row;
	}
`;

export default Statistics;
