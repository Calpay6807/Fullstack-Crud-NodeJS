import { AxiosResponse } from "axios";
import { axiosClient } from "./instance";

export async function getRequest(URL, params) {
  const response = await axiosClient.get(`${URL}`, {
    params: params,
  });
  return response;
}

export async function postRequest(URL, params) {
  const response = await axiosClient.post(`${URL}`, {
    params: params,
  });
  return response;
}
