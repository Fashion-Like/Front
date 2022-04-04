import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getDislikeStatistics } from '../../services/StatisticsService';

export const TotalDislikesChart = () => {
	const [dislikes, setDislikes] = useState([]);

	const getTotalDislikes = async () => {
		try {
			const totalDislikes = await getDislikeStatistics();
			return totalDislikes;
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const readTotalDislikes = async () => {
			const allDislikes = await getTotalDislikes();
			allDislikes && setDislikes(allDislikes);
		};
		readTotalDislikes();
	}, []);

	const dateData = dislikes.map((item) => item.date);
	const dislikeData = dislikes.map((item) => item.count);
	const totalDislikes = dislikeData.reduce((prev, current) => prev + current, 0);

	const series = [
		{
			name: 'Usuarios registrados',
			data: dislikeData,
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
			text: `${totalDislikes} No me gusta`,
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
