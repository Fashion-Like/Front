import ReactApexChart from 'react-apexcharts';

export const TotalUsersChart = () => {
	const series = [
		{
			name: 'Usuarios registrados',
			data: [2, 10, 8, 50, 100, 200, 250, 300, 500],
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
			categories: [
				'1/22/20',
				'2/1/20',
				'2/15/20',
				'3/1/20',
				'3/15/20',
				'4/1/20',
				'4/15/20',
				'5/1/20',
				'5/7/20',
			],
		},
		title: {
			text: '500 usuarios',
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
			{/* <ReactApexChart options={options} series={series} type="area" height={350} /> */}
			<br />
			<ReactApexChart options={options} series={series} type="area" height={350} />
		</div>
	);
};
