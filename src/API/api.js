import axios from "axios";

const api = axios.create({
  baseURL: "https://apis.allsoft.co/api/documentManagement",
  headers: {
    "Content-Type": "application/json",
  },
});

// attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

export const generateOTP = (mobile_number) =>
  api.post("/generateOTP", { mobile_number });

export const validateOTP = (mobile_number, otp) =>
  api.post("/validateOTP", { mobile_number, otp });

export default api;
export const uploadDocument = (formData) =>
  api.post("/uploadDocument", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const searchDocuments = (params) =>
  api.post("/searchDocuments", params);
