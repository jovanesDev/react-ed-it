import { axiosClient } from "../client/axios";

export const getUserById = async (id) => {
  const response = await axiosClient(`/users/${id}`);
  return response.data;
};

export const getUsersFetch = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return result;
};
