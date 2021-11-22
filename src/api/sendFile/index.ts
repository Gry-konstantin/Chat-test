import { AxiosResponse } from "axios";
import api from "..";
export const sendFile = async (data: FormData) => {
  const response: AxiosResponse<string> = await api.post("/api/upload", data);
  return response;
};
