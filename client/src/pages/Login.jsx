import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyRound, ArrowRight } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, verifyOTP } = useAuth();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setError("");
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");

    if (!phone) {
      setError("Phone number is required");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
      login(phone);
      setOtpSent(true);
      setStep(2);
      // In a real app, OTP would be sent via SMS
      // For demo purposes, use "123456" as the OTP
      console.log('Use "123456" as the OTP for testing');
    } catch {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    // Only allow numeric inputs
    if (value && !/^\d+$/.test(value)) return;

    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);
    setOtp(newOtpInputs.join(""));

    // Auto focus to next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace" && !otpInputs[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");

    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setLoading(true);

    try {
      const isValid = verifyOTP(otp);
      if (isValid) {
        navigate("/dashboard");
      } else {
        setError("Invalid OTP. Please try again.");
        setOtpInputs(["", "", "", "", "", ""]);
        setOtp("");
        // Focus the first input
        const firstInput = document.getElementById("otp-0");
        if (firstInput) firstInput.focus();
      }
    } catch (err) {
      setError("Failed to verify OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transition-all duration-500">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <h1 className="text-white text-2xl font-bold">Welcome Back</h1>
          <p className="text-blue-100 mt-2">
            Sign in to continue your adventure
          </p>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter your 10-digit number"
                  className={`mt-1 block w-full rounded-md border ${
                    error ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }`}
              >
                {loading ? "Sending..." : "Send OTP"}
                {!loading && <ArrowRight size={16} className="ml-2" />}
              </button>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  <KeyRound size={24} />
                </div>
                <h2 className="text-lg font-medium text-gray-900">
                  OTP Verification
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  We sent a code to{" "}
                  {phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
                </p>
              </div>

              <div className="mt-6">
                <label htmlFor="otp-0" className="sr-only">
                  One-time password
                </label>
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
                      className="block w-12 h-12 text-center text-xl font-semibold rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      autoFocus={idx === 0}
                    />
                  ))}
                </div>
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 ${
                  loading || otp.length !== 6
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }`}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Didn't receive the code?{" "}
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-800"
                    onClick={() => {
                      setOtpSent(false);
                    }}
                  >
                    Send again
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
