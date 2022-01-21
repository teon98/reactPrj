import axios from "axios";

//포스트 읽기
export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

//모든 사용자 불러오기
export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
