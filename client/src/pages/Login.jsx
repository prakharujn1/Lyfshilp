import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { KeyRound, ArrowRight } from "lucide-react";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const { sendOtpForLogin, verifyOtpAndLogin } = useAuth();

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedPhone = Cookies.get("rememberedPhone");
    if (savedPhone) {
      setPhone(savedPhone);
      setRememberMe(true);
    }
  }, []);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setError("");
  };

  const handlesendOtpForLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Basic phone validation
    if (!phone) return setError("Phone number is required");
    if (!/^\d{10}$/.test(phone))
      return setError("Enter a valid 10-digit phone number");

    setLoading(true);
    try {
      // Attempt sending OTP
      const res = await sendOtpForLogin(phone);

      // ✅ Store phone in cookie if "Remember Me" is checked
      if (rememberMe) {
        Cookies.set("rememberedPhone", phone, { expires: 7 }); // expires in 7 days
      } else {
        Cookies.remove("rememberedPhone");
      }

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
      <div className="h-[50vh] lg:h-screen lg:w-1/2 relative overflow-hidden flex items-end justify-center">
        {/* ✅ Background */}
        <img
          src="/loginPageDesign/RightBg.svg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* ✅ Logo (only show on lg+) */}
        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          <img
            src="/loginPageDesign/EduManiax_Logo.svg"
            alt="Edumaniax Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-white text-2xl font-bold">Edumaniax</h1>
        </div>

        {/* ✅ FlyingBoy — not absolute on mobile, absolute on lg+ */}
        <div className="z-10 lg:absolute lg:left-[8%] lg:-bottom-[3%]">
          <img
            src="/loginPageDesign/FlyingBoy.svg"
            alt="Flying Pencil Kid"
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[500px]"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="h-1/2 lg:h-screen lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl overflow-y-auto max-h-full">
          <h2 className="text-4xl text-center sigmar-font font-bold text-green-800 mb-2">
            Login To Learn!
          </h2>
          <p className="text-sm text-gray-600 mt-6">
            Welcome back! Login to continue your journey with us—we’ve got great
            things waiting.
          </p>

          {step === 1 ? (
            <form onSubmit={handlesendOtpForLogin} className="space-y-4">
              <div className="relative mt-8">
                <label className="absolute -top-2 left-3 px-1 bg-white text-green-700 text-sm font-medium z-10">
                  Phone Number
                </label>
                <div className="flex items-center border-2 border-green-600 rounded-lg px-3 py-2 gap-2 focus-within:border-green-700 transition-colors">
                  <img
                    src="/loginPageDesign/indianNumber.svg"
                    alt="India"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-800 font-medium">+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full outline-none text-gray-800 placeholder-gray-400"
                    placeholder="0123456789"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  We will use this number to validate your account.
                </p>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-green-600"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
              >
                {loading ? "Sending..." : "Log In"}
              </button>
              <p className="text-center text-sm text-gray-600">
                Don’t have an account?{" "}
                <a
                  href="/register"
                  className="text-blue-500 font-medium hover:underline"
                >
                  Register Now
                </a>
              </p>
              <p className="text-center text-sm text-gray-600">
                <a
                  href="/"
                  className="text-blue-500 font-medium hover:underline"
                >
                  Go to Home
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
