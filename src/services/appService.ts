import { api } from "../configs/axiosConfigs";
import { appConstants, storageKeys } from "../configs/appConfigs";
const { LOGIN_URL, DONATIONS_URL, MULTIPLE_DONATIONS_URL, PINCODE_URL } =
  appConstants;
import { storageService } from "./storageService";
import { getDonationTypes } from "../types/appServiceTypes";
import { saveAs } from "file-saver";

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
    const response = await api.get(DONATIONS_URL, { params });
    return response.data;
  } catch (error) {
    console.log("Error @ appService > getDonations ", error);
    return error;
  }
};

export const saveDonation = async (values: getDonationTypes) => {
  try {
    const response = await api.post(DONATIONS_URL, values);
    return response.data;
  } catch (error) {
    console.log("Error @ appService > addDonation ", error);
    return error;
  }
};

export const downloadDonationsExcel = async (params: getDonationTypes) => {
  try {
    const response = await api.get(MULTIPLE_DONATIONS_URL, {
      params,
      responseType: "blob", // Ensures the response is treated as binary data
    });

    // Extract filename from the Content-Disposition header
    const contentDisposition = response.headers["content-disposition"];
    let fileName = "donations.xlsx"; // Default filename

    if (contentDisposition) {
      const match = contentDisposition.match(/filename="?([^"]+)"?/);
      if (match && match[1]) {
        fileName = match[1];
      }
    }

    // Create a Blob from the response data
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Use file-saver to trigger the download
    saveAs(blob, fileName);

    return response.data;
  } catch (error) {
    console.log("Error @ appService > downloadDonations ", error);
    return error;
  }
};

export const uploadDonationsExcel = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post(MULTIPLE_DONATIONS_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error @ appService > uploadDonationsExcel ", error);
    return error;
  }
};

export const getAddressByPincode = async (pincode: number) => {
  try {
    const response = await api.get(PINCODE_URL + "?pincode=" + pincode, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error @ appService > getAddressByPincode ", error);
    return error;
  }
};
