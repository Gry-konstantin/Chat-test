import { AxiosResponse } from "axios";
import api from "..";
interface IGenders {
  id?: number;
  gender?: string;
  value: string;
  label?: string;
}
interface IPromise {
  genders: IGenders[];
}

export const GetGenders = async (): Promise<AxiosResponse<IPromise>> => {
  return await api.get("/api/auth");
};
