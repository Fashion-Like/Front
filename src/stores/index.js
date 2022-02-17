import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/posts";

export default configureStore({
  reducer: {
    posts,
  },
});
