import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const api = axios.create({ withCredentials: true });

export const fetchWelcomeMessage = async () => {
  const response = await api.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};

const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await api.get(`${ASSIGNMENT_API}`);
  return response.data;
};

export const updateTitle = async (title: string) => {
  const response = await api.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await api.get(TODOS_API);
  return response.data;
};

export const removeTodo = async (todo: any) => {
  const response = await api.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

export const createTodo = async () => {
  const response = await api.get(`${TODOS_API}/create`);
  return response.data;
};

export const postTodo = async (todo: any) => {
  const response = await api.post(`${TODOS_API}`, todo);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await api.delete(`${TODOS_API}/${id}`);
  return response;
};



// 11/22 funcionando

// import axios from "axios";

// const axiosWithCredentials = axios.create({ withCredentials: true });

// export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// export const USERS_API = `${REMOTE_SERVER}/api/users`;

// export const signin = async (credentials: any) => {
//   const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
//   return response.data;
// };

// export const signup = async (user: any) => {
//   const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
//   return response.data;
// };

// export const updateUser = async (user: any) => {
//   const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
//   return response.data;
// };

// export const profile = async () => {
//   const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
//   return response.data;
// };

// export const signout = async () => {
//   const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
//   return response.data;
// };

// export const findMyCourses = async () => {
//     const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
//     return data;
//   };
  