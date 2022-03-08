import { create } from './BaseService';

const http = create();

export const createComment = async (data) => {
	const res = await http.post('/Comments', data);
	return res;
};

export const getComments = async (postId) => {
	const res = await http.get(`/Comments/${postId}`);
	return res;
};
