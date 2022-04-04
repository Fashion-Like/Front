import { create } from './BaseService';

const http = create();

export const getUserStatistics = async () => {
	return await http.get('/Statistics/GetUserStatistics');
};

export const getLikeStatistics = async () => {
	return await http.get('/Statistics/GetLikeStatistics');
};

export const getDislikeStatistics = async () => {
	return await http.get('/Statistics/GetDislikeStatistics');
};
