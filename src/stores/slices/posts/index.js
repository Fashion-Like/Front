import { createSlice } from '@reduxjs/toolkit';
import { getPosts, getPostsFeatured } from '../../../services/PostService';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
	},
	reducers: {
		setPosts: (state, action) => {
			state.posts = action.payload;
		},
		setPostById: (state, action) => {
			state.posts.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				}
			});
		},
		setPostsFeatured: (state, action) => {
			state.postsFeatured = action.payload;
		},
		setDeletePost: (state, action) => {
			state.posts = state.posts.filter((item) => item.id !== action.payload.id);
		},
		setNewPost: (state, action) => {
			return {
				...state,
				posts: [action.payload, ...state.posts],
			};
		},
		setUpdatePost: (state, action) => {
			state.posts = state.posts.map((item) => {
				if (item.id === action.payload.id) {
					return (item = action.payload);
				}
				return item;
			});
		},
		// setReactionPost: (state, action) => {
		// 	state.posts.map((item) => {
		// 		if (item.id === action.payload.id) {
		// 			item = action;
		// 		}
		// 	});
		// },
	},
});

export const getAllPosts = (search) => (dispatch) => {
	getPosts(search)
		.then((response) => {
			dispatch(setPosts(response));
		})
		.catch((error) => console.log(error));
};

// export const getAllPostsFeatured = () => (dispatch) => {
//   getPostsFeatured()
//     .then((response) => {
//       console.log(response);
//       dispatch(setPostsFeatured(response));
//     })
//     .catch((error) => console.log(error));
// };

export const {
	setPosts,
	setDeletePost,
	setNewPost,
	setUpdatePost,
	setPostById,
	setPostsFeatured,
} = postsSlice.actions;

export default postsSlice.reducer;
