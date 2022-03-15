export const formatDate = (date) => {
	const newDate = new Date(date);
	const options = {
		month: 'long',
		day: '2-digit',
	};
	return new Intl.DateTimeFormat('es', options).format(newDate);
};
