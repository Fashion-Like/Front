import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getUserStatistics } from '../../services/StatisticsService';

export const TotalUsersChart = () => {
	const [users, setUsers] = useState([]);

	const getTotalUsers = async () => {
		try {
			const totalUser = await getUserStatistics();
			return totalUser;
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const readTotalUsers = async () => {
			const allUsers = await getTotalUsers();
			allUsers && setUsers(allUsers);
		};
		readTotalUsers();
	}, []);

	const dateData = users.map((item) => item.date);
	const userData = users.map((item) => item.count);
	const totalUsers = userData.reduce((prev, current) => prev + current, 0);

	const series = [
		{
			name: 'Usuarios registrados',
			data: userData,
		},
	];
	const options = {
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'straight',
		},
		xaxis: {
			type: 'datetime',
			categories: dateData,
		},
		title: {
			text: `${totalUsers} Usuarios`,
			offsetX: 30,
			style: {
				fontSize: '24px',
				cssClass: 'apexcharts-yaxis-title',
			},
		},
		subtitle: {
			text: 'Acumulado',
			offsetX: 30,
			style: {
				fontSize: '14px',
				cssClass: 'apexcharts-yaxis-title',
			},
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy',
			},
		},
	};

	return (
		<div style={{ width: '100%' }}>
			<ReactApexChart options={options} series={series} type="area" height={350} />
		</div>
	);
};
