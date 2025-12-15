import { useState, useContext } from "react";
import { generateOTP, validateOTP } from "../API/api";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const sendOTP = async () => {
    if (!mobile) return alert("Enter mobile number");

    try {
      setLoading(true);
      await generateOTP(mobile);
      setStep(2);
      alert("OTP sent successfully");
    } catch (err) {
      alert("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!otp) return alert("Enter OTP");

    try {
      setLoading(true);
      const res = await validateOTP(mobile, otp);

      // token returned from backend
      login(res.data.token);

      alert("Login successful");
      navigate("/upload");
    } catch (err) {
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3 className="mb-3">OTP Login</h3>

      {step === 1 && (
        <>
          <input
            className="form-control mb-2"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button
            className="btn btn-primary w-100"
            onClick={sendOTP}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            className="form-control mb-2"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            className="btn btn-success w-100"
            onClick={verifyOTP}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      )}
    </div>
  );
}
