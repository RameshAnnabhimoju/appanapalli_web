import { api } from "../configs/axiosConfigs";
import { appConstants, storageKeys } from "../configs/appConfigs";
const { LOGIN_URL, GET_DONATIONS_URL } = appConstants;
import { storageService } from "./storageService";
import { getDonationTypes } from "../types/appServiceTypes";
export const login = async (values: { username: string; password: string }) => {
  try {
    const response = await api.post(LOGIN_URL, values);
    if (
      response.data.type === "success" &&
      response.data.isLoggedin &&
      response.data.token
    ) {
      storageService.setItem(storageKeys.AUTH, response.data);
    }
    return response.data;
  } catch (error) {
    console.log("Error @ appService > login ", error);
    return error;
  }
};
export const getDonations = async (params: getDonationTypes) => {
  try {
    const response = await api.get(GET_DONATIONS_URL, { params });
    return response.data;
  } catch (error) {
    console.log("Error @ appService > getDonations ", error);
    return error;
  }
};
