import { configureStore } from '@reduxjs/toolkit';
import posts from './slices/posts';
import comments from './slices/comments';

export default configureStore({
	reducer: {
		posts,
		comments,
	},
});
