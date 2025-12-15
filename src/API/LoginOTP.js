import { generateOTP, validateOTP } from "../API/api";

await generateOTP("9876543210");

const res = await validateOTP("9876543210", otp);
localStorage.setItem("token", res.data.token);
