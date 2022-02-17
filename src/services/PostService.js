import { create } from "./BaseService";

const http = create();

export const createPost = async (data) => {
  const res = await http.post("/Posts", data);
  return res;
};

export const getPosts = async () => {
  const res = await http.get("/Posts");
  return res.data;
};

export const deletePost = async (id) => {
  const res = await http.delete(`/Posts/${id}`);
  return res;
};

export const getPostById = async (id) => {
  const res = await http.get(`/Posts/${id}`);
  return res;
};

export const updatePost = async (id, post) => {
  const res = await http.put(`/Posts/${id}`, post);
  return res;
};

export const getTags = async () => {
  const res = await http.get("/Tags");
  return res;
};
