import { AxiosResponse } from "axios";
import api from "..";
export const UserSignin = async (data: FormData) => {
  const response: AxiosResponse<boolean> = await api.post(
    "/api/auth/register",
    data
  );
};
