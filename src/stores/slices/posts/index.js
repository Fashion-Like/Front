import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getPostsFeatured } from "../../../services/PostService";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostById: (state, action) => {
      console.log(state, action);
      state.posts.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload);
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
      state.posts.push(action.payload);
    },
    setUpdatePost: (state, action) => {
      console.log(state, action);
      state.posts.map((item) => {
        if (item.id === action.payload.id) {
          item = action;
        }
      });
    },
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
