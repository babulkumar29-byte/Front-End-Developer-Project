export const generateOTP = (mobile_number) => {
  return api.post("/generateOTP", {
    mobile_number
  });
};
