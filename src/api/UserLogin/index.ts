import { AxiosResponse } from "axios";
import api from "..";
export const UserLogin = async (data: FormData) => {
  const response: AxiosResponse<string> = await api.post(
    "/api/auth/login",
    data
  );
  localStorage.setItem("connect_key", response.data);
};
