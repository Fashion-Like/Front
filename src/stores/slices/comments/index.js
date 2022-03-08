import { createSlice } from '@reduxjs/toolkit';
import { getComments } from '../../../services/CommentService';

export const commentsSlice = createSlice({
	name: 'comments',
	initialState: {
		comments: [],
	},
	reducers: {
		setComments: (state, action) => {
			state.comments = action.payload;
		},
		setNewComment: (state, action) => {
			return {
				...state,
				comments: [action.payload, ...state.comments],
			};
		},
	},
});

export const getAllComments = (postId) => (dispatch) => {
	getComments(postId)
		.then((response) => {
			dispatch(setComments(response));
		})
		.catch((error) => console.log(error));
};

export const { setComments, setNewComment } = commentsSlice.actions;

export default commentsSlice.reducer;
