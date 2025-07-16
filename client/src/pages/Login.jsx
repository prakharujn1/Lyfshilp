import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { KeyRound, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { sendOtpForLogin, verifyOtpAndLogin } = useAuth();

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setError("");
  };

  const handlesendOtpForLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!phone) return setError("Phone number is required");
    if (!/^\d{10}$/.test(phone))
      return setError("Enter a valid 10-digit phone number");

    setLoading(true);
    try {
      const res = await sendOtpForLogin(phone);
      setStep(2);
    } catch {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);
    setOtp(newOtpInputs.join(""));
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpInputs[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) return setError("Enter the complete 6-digit OTP");

    setLoading(true);
    try {
      const result = await verifyOtpAndLogin(otp, navigate);
      if (result.success) {
        navigate("/dashboard");
      } else {
        setError(result.message || "Invalid OTP.");
        setOtpInputs(["", "", "", "", "", ""]);
        setOtp("");
      }
    } catch {
      setError("Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 bg-[#00A547] text-white flex flex-col justify-center items-center p-8">
        <div className="flex items-center gap-2 mb-6">
          <img src="/logo.png" alt="Edumaniax" className="h-8" />
          <h1 className="text-white text-2xl font-bold">Edumaniax</h1>
        </div>
        <img
          src="/child-pencil.png"
          alt="Flying Pencil Kid"
          className="max-w-[300px]"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Login To Learn!
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Welcome back! Login to continue your journey with us—we’ve got great
            things waiting.
          </p>

          {step === 1 ? (
            <form onSubmit={handlesendOtpForLogin} className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="flex border rounded px-3 py-2 gap-2">
                <span className="text-gray-500">+91</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full outline-none"
                  placeholder="0123456789"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" /> Remember
                me
              </label>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
              >
                {loading ? "Sending..." : "Log In"}
              </button>
              <p className="text-center text-sm text-gray-600">
                Don’t have an account?{" "}
                <a
                  href="/register"
                  className="text-green-700 font-medium hover:underline"
                >
                  Register Now
                </a>
              </p>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <KeyRound size={28} className="text-green-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  OTP Verification
                </h2>
                <p className="text-sm text-gray-600">
                  We sent a code to +91-
                  {phone.replace(/(\d{5})(\d{5})/, "$1-$2")}
                </p>
              </div>

              <div className="flex justify-between gap-2">
                {otpInputs.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className="w-10 h-12 text-center border border-gray-300 rounded-md text-lg font-bold focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    autoFocus={idx === 0}
                  />
                ))}
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
