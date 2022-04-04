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
				comments: [...state.comments, action.payload],
			};
		},
		setDeleteComment: (state, action) => {
			state.comments = state.comments.filter((item) => item.id !== action.payload.id);
		},
		setUpdateComment: (state, action) => {
			state.comments = state.comments.map((item) => {
				if (item.id === action.payload.id) {
					return (item = action.payload);
				}
				return item;
			});
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

export const { setComments, setNewComment, setDeleteComment, setUpdateComment } =
	commentsSlice.actions;

export default commentsSlice.reducer;
