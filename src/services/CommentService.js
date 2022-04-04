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

export const deleteComment = async (id) => {
	const res = await http.delete(`/Comments/${id}`);
	return res;
};

export const updateComment = async (id, post) => {
	const res = await http.put(`/Comments/${id}`, post);
	return res;
};
