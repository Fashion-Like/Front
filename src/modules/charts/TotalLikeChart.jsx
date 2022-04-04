import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getLikeStatistics } from '../../services/StatisticsService';

export const TotalLikesChart = () => {
	const [likes, setLikes] = useState([]);

	const getTotalLikes = async () => {
		try {
			const totalLikes = await getLikeStatistics();
			return totalLikes;
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const readTotalLikes = async () => {
			const allLikes = await getTotalLikes();
			allLikes && setLikes(allLikes);
		};
		readTotalLikes();
	}, []);

	const dateData = likes.map((item) => item.date);
	const likeData = likes.map((item) => item.count);
	const totalLikes = likeData.reduce((prev, current) => prev + current, 0);

	const series = [
		{
			name: 'Usuarios registrados',
			data: likeData,
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
			text: `${totalLikes} Me gusta`,
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
