import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import AvatarSelection from "../components/AvatarSelection";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    character: {
      gender: "",
      name: "",
      style: "",
      traits: [],
    },
  });
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    phone: "",
    characterName: "",
    characterGender: "",
    characterStyle: "",
    characterTraits: "",
  });

  const validateStep = (currentStep) => {
    const newErrors = { ...errors };

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      else newErrors.name = "";

      if (!formData.age) newErrors.age = "Age is required";
      else if (parseInt(formData.age) < 13)
        newErrors.age = "You must be at least 13 years old";
      else newErrors.age = "";

      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!/^\d{10}$/.test(formData.phone))
        newErrors.phone = "Enter a valid 10-digit phone number";
      else newErrors.phone = "";

      setErrors(newErrors);
      return !newErrors.name && !newErrors.age && !newErrors.phone;
    }

    if (currentStep === 2) {
      if (!formData.character.gender)
        newErrors.characterGender = "Please select a gender";
      else newErrors.characterGender = "";

      if (!formData.character.name.trim())
        newErrors.characterName = "Character name is required";
      else newErrors.characterName = "";

      setErrors(newErrors);
      return !newErrors.characterGender && !newErrors.characterName;
    }

    if (currentStep === 3) {
      if (!formData.character.style)
        newErrors.characterStyle = "Please select a character style";
      else newErrors.characterStyle = "";

      setErrors(newErrors);
      return !newErrors.characterStyle;
    }

    if (currentStep === 4) {
      if (formData.character.traits.length !== 2) {
        newErrors.characterTraits = "Please select exactly 2 traits";
        setErrors(newErrors);
        return false;
      } else {
        newErrors.characterTraits = "";
        setErrors(newErrors);
        return true;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCharacterInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      character: { ...formData.character, [name]: value },
    });
  };

  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      character: { ...formData.character, gender },
    });
  };

  const handleStyleSelect = (style) => {
    setFormData({
      ...formData,
      character: { ...formData.character, style },
    });
  };

  const handleTraitSelect = (trait) => {
    const currentTraits = [...formData.character.traits];
    const traitIndex = currentTraits.indexOf(trait);

    if (traitIndex > -1) {
      // Remove trait if already selected
      currentTraits.splice(traitIndex, 1);
    } else {
      // Add trait if not already selected and less than 2 traits are selected
      if (currentTraits.length < 2) {
        currentTraits.push(trait);
      } else {
        // Replace the first trait if 2 are already selected
        currentTraits.shift();
        currentTraits.push(trait);
      }
    }

    setFormData({
      ...formData,
      character: { ...formData.character, traits: currentTraits },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      setLoading(true);

      try {
        // In a real app, this would be an API call
        register({
          name: formData.name,
          age: parseInt(formData.age),
          phone: formData.phone,
          character: formData.character,
        });

        navigate("/dashboard");
      } catch (error) {
        console.error("Registration error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transition-all duration-500">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <h1 className="text-white text-2xl font-bold">Create Your Account</h1>
          <div className="flex mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-1 px-1">
                <div
                  className={`h-2 rounded-full ${
                    i === step
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

        <form onSubmit={handleSubmit} className="p-6">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-800">
                Personal Information
              </h2>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.age ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                />
                {errors.age && (
                  <p className="mt-1 text-sm text-red-600">{errors.age}</p>
                )}
              </div>

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
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit number"
                  className={`mt-1 block w-full rounded-md border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
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
                      className={`cursor-pointer p-4 rounded-lg flex items-center justify-center transition-all ${
                        formData.character.gender === gender
                          ? "bg-indigo-100 border-2 border-indigo-500"
                          : "bg-gray-50 border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-sm font-medium">{gender}</span>
                    </div>
                  ))}
                </div>
                {errors.characterGender && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.characterGender}
                  </p>
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
                  name="name"
                  value={formData.character.name}
                  onChange={handleCharacterInputChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.characterName ? "border-red-500" : "border-gray-300"
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
                selectedStyle={formData.character.style}
                onSelectStyle={handleStyleSelect}
                gender={formData.character.gender}
              />

              {errors.characterStyle && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.characterStyle}
                </p>
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
                    className={`cursor-pointer p-3 rounded-lg flex items-center justify-between transition-all ${
                      formData.character.traits.includes(trait)
                        ? "bg-indigo-100 border-2 border-indigo-500"
                        : "bg-gray-50 border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-sm font-medium">{trait}</span>
                    {formData.character.traits.includes(trait) && (
                      <Check size={16} className="text-indigo-600" />
                    )}
                  </div>
                ))}
              </div>

              {errors.characterTraits && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.characterTraits}
                </p>
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
                    {formData.character.name}
                  </li>
                  <li>
                    <span className="font-medium">Gender:</span>{" "}
                    {formData.character.gender}
                  </li>
                  <li>
                    <span className="font-medium">Style:</span>{" "}
                    {formData.character.style}
                  </li>
                  <li>
                    <span className="font-medium">Traits:</span>{" "}
                    {formData.character.traits.join(", ")}
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm">
                Please review your information. You can go back to make changes
                or click "Complete Registration" to finish.
              </p>
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
            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Next
                <ArrowRight size={16} className="ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className={`ml-auto px-4 py-2 bg-indigo-600 text-white rounded-md transition-colors ${
                  loading
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
    </div>
  );
};

export default Register;
