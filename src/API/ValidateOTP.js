export const validateOTP = (mobile_number, otp) => {
  return api.post("/validateOTP", {
    mobile_number,
    otp
  });
};
