import axios from "axios";
import { getAccessToken, logout } from "../stores/AccessTokenStore";

const URL = process.env.REACT_APP_API_HOST || "http://localhost:44360";

export const create = (opts = {}) => {
  const http = axios.create({
    baseURL: URL + "/api",
    ...opts
  });

  http.interceptors.request.use((request) => {
    if (opts.useAccessToken !== false) {
      request.headers.common.Authorization = `Bearer ${getAccessToken()}`;
    } else {
      delete request.headers.common.Authorization;
    }
    return request;
  });

  http.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response && [401, 403].includes(error.response.status)) {
        console.log(response.data)
        console.log(error.response)
        logout();
      }

      return Promise.reject(error);
    }
  );
  return http;
};
