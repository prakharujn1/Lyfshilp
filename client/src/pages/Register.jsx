import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import AvatarSelection from "../components/AvatarSelection";
import Spline from "@splinetool/react-spline";

const Register = () => {
  const navigate = useNavigate();
  const {
    sendOtpForRegister,
    verifyOtpAndRegister,
  } = useAuth();
  // flat formData
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phonenumber: "",
    userClass: "",
    gender: "",
    characterName: "",
    style: "",
    traits: [],
  });
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState("");


  const validateStep = (currentStep) => {
    const errs = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) errs.name = "Name is required";
      if (!formData.age) errs.age = "Age is required";
      else if (parseInt(formData.age) < 13)
        errs.age = "Must be at least 13 years old";
      if (!formData.phonenumber.trim())
        errs.phonenumber = "Phone number is required";
      else if (!/^\d{10}$/.test(formData.phonenumber))
        errs.phonenumber = "Enter a valid 10-digit phone number";
      if (!formData.userClass.trim())
        errs.userClass = "User class is required";
    }

    if (currentStep === 2) {
      if (!formData.gender) errs.gender = "Please select a gender";
      if (!formData.characterName.trim())
        errs.characterName = "Character name is required";
    }

    if (currentStep === 3) {
      if (!formData.style) errs.style = "Please select a character style";
    }

    if (currentStep === 4) {
      if (formData.traits.length !== 2)
        errs.traits = "Please select exactly 2 traits";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };


  // Handlers for input changes, traits toggle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
  };

  const handleGenderSelect = (gender) => {
    setFormData((fd) => ({ ...fd, gender }));
  };

  const handleStyleSelect = (style) => {
    setFormData((fd) => ({ ...fd, style }));
  };

  const handleTraitSelect = (trait) => {
    let traits = [...formData.traits];
    const idx = traits.indexOf(trait);

    if (idx > -1) {
      traits.splice(idx, 1);
    } else {
      if (traits.length < 2) traits.push(trait);
      else {
        traits.shift();
        traits.push(trait);
      }
    }

    setFormData((fd) => ({ ...fd, traits }));
  };

  // Next button logic with OTP send after last data step (step 4)
  const handleNext = async () => {
    if (!validateStep(step)) return;

    if (step === 5) {
      // Send OTP here before proceeding to OTP step
      setLoading(true);
      const updatedFormData = {
        ...formData,
        age: parseInt(formData.age, 10), // ensure age is number
      };
      try {
        const result = await sendOtpForRegister(updatedFormData.phonenumber);
        if (result.success) {
          console.log("OTP sent successfully");
          setOtpSent(true);
          setStep(step + 1); // move to OTP step
        } else {
          console.log("Failed to send OTP:", result.message);
        }
      } catch (error) {
        setErrors({ phonenumber: "Failed to send OTP. Try again." });
      } finally {
        setLoading(false);
      }
    } else {
      setStep((s) => s + 1);
    }
  };

 const handleBack = () => {
  if (step === 6) {
    setOtpInputs(["", "", "", "", "", ""]);
    setOtp("");
    setOtpError("");
  }
  setStep((s) => s - 1);
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

  // OTP verify submit
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
  setOtpError("Please enter the 6-digit OTP");
  return;
}
    setLoading(true);
    setOtpError("");
    try {
      const finalFormData = {
        phonenumber: formData.phonenumber,
        name: formData.name,
        age: parseInt(formData.age, 10),
        userClass: formData.userClass,
        characterGender: formData.gender,
        characterName: formData.characterName,
        characterStyle: formData.style,
        characterTraits: formData.traits,
      };
      const result = await verifyOtpAndRegister(finalFormData, otp, navigate);
      if (!result.success) {
        setOtpError(result.message || "Invalid OTP, please try again.");
      }
      // On success, navigate happens inside handleVerify
    } catch (error) {
      setOtpError("Invalid OTP, please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col lg:flex-row items-center justify-center p-4 gap-8 lg:gap-16">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md lg:max-w-lg overflow-hidden transition-all duration-500">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <h1 className="text-white text-2xl font-bold">Create Your Account</h1>
          <div className="flex mt-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex-1 px-1">
                <div
                  className={`h-2 rounded-full ${i === step
                    ? "bg-white"
                    : i < step
                      ? "bg-blue-300"
                      : "bg-blue-400/30"
                    }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={step === 6 ? handleOtpSubmit : (e) => e.preventDefault()} className="p-6">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-800">
                Personal Information
              </h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${errors.age ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                />
                {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
              </div>

              <div>
                <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phonenumber"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  className={`mt-1 block w-full rounded-md border ${errors.phonenumber ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                />
                {errors.phonenumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.phonenumber}</p>
                )}
              </div>

              <div>
                <label htmlFor="userClass" className="block text-sm font-medium text-gray-700">
                  Class
                </label>
                <select
                  id="userClass"
                  name="userClass"
                  value={formData.userClass}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${errors.userClass ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                >
                  <option value="">Select your class</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th and above</option>
                </select>
                {errors.userClass && (
                  <p className="mt-1 text-sm text-red-600">{errors.userClass}</p>
                )}
              </div>
            </div>
          )}



          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-800">
                Character Basics
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose your character's gender
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Boy", "Girl", "Prefer not to say"].map((gender) => (
                    <div
                      key={gender}
                      onClick={() => handleGenderSelect(gender)}
                      className={`cursor-pointer p-4 rounded-lg flex items-center justify-center transition-all ${formData.gender === gender
                        ? "bg-indigo-100 border-2 border-indigo-500"
                        : "bg-gray-50 border border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                      <span className="text-sm font-medium">{gender}</span>
                    </div>
                  ))}
                </div>
                {errors.gender && (
                  <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="characterName"
                  className="block text-sm font-medium text-gray-700"
                >
                  What's your character's name?
                </label>
                <input
                  type="text"
                  id="characterName"
                  name="characterName"
                  value={formData.characterName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${errors.characterName ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                />
                {errors.characterName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.characterName}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-800">
                Character Style
              </h2>
              <p className="text-sm text-gray-600">
                Choose your character's style
              </p>

              <AvatarSelection
                selectedStyle={formData.style}
                onSelectStyle={handleStyleSelect}
                gender={formData.gender}
              />


              {errors.style && (
                <p className="mt-1 text-sm text-red-600">{errors.style}</p>
              )}

            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-800">
                Character Traits
              </h2>
              <p className="text-sm text-gray-600">
                Pick 2 traits that describe your character best
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Creative",
                  "Curious",
                  "Talkative",
                  "Logical",
                  "Smart thinker",
                  "Likes solving mysteries",
                ].map((trait) => (
                  <div
                    key={trait}
                    onClick={() => handleTraitSelect(trait)}
                    className={`cursor-pointer p-3 rounded-lg flex items-center justify-between transition-all ${formData.traits.includes(trait)
                      ? "bg-indigo-100 border-2 border-indigo-500"
                      : "bg-gray-50 border border-gray-300 hover:bg-gray-100"
                      }`}
                  >
                    <span className="text-sm font-medium">{trait}</span>
                    {formData.traits.includes(trait) && (
                      <Check size={16} className="text-indigo-600" />
                    )}
                  </div>
                ))}
              </div>

              {errors.traits && (
                <p className="mt-1 text-sm text-red-600">{errors.traits}</p>
              )}
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-800">
                Ready to Begin!
              </h2>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <h3 className="font-medium text-indigo-800">
                  Your Character Summary
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-indigo-700">
                  <li>
                    <span className="font-medium">Name:</span>{" "}
                    {formData.characterName}
                  </li>
                  <li>
                    <span className="font-medium">Gender:</span>{" "}
                    {formData.gender}
                  </li>
                  <li>
                    <span className="font-medium">Style:</span>{" "}
                    {formData.style}
                  </li>
                  <li>
                    <span className="font-medium">Traits:</span>{" "}
                    {formData.traits.join(", ")}
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm">
                Please review your information. You can go back to make changes
                or click "Complete Registration" to finish.
              </p>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-800">Verify Phone</h2>
              <p className="text-sm text-gray-600">
                We've sent an OTP to {formData.phonenumber}. Enter it below to verify.
              </p>

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
              {otpError && <p className="mt-1 text-sm text-red-600">{otpError}</p>}
            </div>
          )}




          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back
              </button>
            )}
            {step < 6 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                {step === 5
                  ? loading
                    ? "Sending..."
                    : "Send OTP"
                  : "Next"}
                <ArrowRight size={16} className="ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className={`ml-auto px-4 py-2 bg-indigo-600 text-white rounded-md transition-colors ${loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-indigo-700"
                  }`}
              >
                {loading ? "Processing..." : "Complete Registration"}
              </button>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
      {/* Spline Model */}
      <div className="w-full max-w-md lg:max-w-lg h-80 lg:h-[500px] rounded-2xl shadow-lg backdrop-blur-md bg-white/20 overflow-hidden">
        {/* <Spline scene="https://prod.spline.design/gu3sKHlo2-Mmh2CM/scene.splinecode" /> */}
      </div>
    </div>
  );
};

export default Register;
