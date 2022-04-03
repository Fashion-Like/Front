import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllComments } from '../../stores/slices/comments/';

export const CommentsChart = () => {
	// const dispatch = useDispatch();

	// let { comments } = useSelector((state) => state.comments);
	// console.log(comments);

	// useEffect(() => {
	// 	dispatch(getAllComments(postId));
	// }, [dispatch]);

	const series = [
		{
			data: [1, 2, 10, 7, 5, 0, 3, 11],
		},
	];

	const options = {
		chart: {
			type: 'bar',
			height: 380,
		},
		plotOptions: {
			bar: {
				barHeight: '100%',
				distributed: true,
				horizontal: true,
				dataLabels: {
					position: 'bottom',
				},
			},
		},
		colors: [
			'#33b2df',
			'#546E7A',
			'#d4526e',
			'#13d8aa',
			'#A5978B',
			'#2b908f',
			'#f9a3a4',
			'#90ee7e',
			'#f48024',
			'#69d2e7',
		],
		dataLabels: {
			enabled: true,
			textAnchor: 'start',
			style: {
				colors: ['#fff'],
			},
			formatter: function (val, opt) {
				return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
			},
			offsetX: 0,
			dropShadow: {
				enabled: true,
			},
		},
		stroke: {
			width: 1,
			colors: ['#fff'],
		},
		xaxis: {
			categories: [
				'Abrigos',
				'Blazer',
				'Camisas',
				'Faldas',
				'Jeans',
				'Shorts',
				'Vestidos',
				'Lencería',
			],
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		title: {
			text: 'Comentarios totales',
			align: 'center',
			floating: true,
		},
		subtitle: {
			text: 'Cantidad acumulada de comentarios según categoría',
			align: 'center',
		},
		tooltip: {
			theme: 'dark',
			x: {
				show: false,
			},
			y: {
				title: {
					formatter: function () {
						return '';
					},
				},
			},
		},
	};

	return (
		<div style={{ width: '100%' }}>
			{/* <ReactApexChart options={options} series={series} type="area" height={350} /> */}
			<br />
			<ReactApexChart options={options} series={series} type="bar" height={350} />
		</div>
	);
};
