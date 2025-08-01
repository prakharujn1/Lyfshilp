import { useEffect, useRef, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout, role } = useAuth();
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState("/dashboardDesign/uploadPic.svg");

  useEffect(() => {
    if (!user && role !== "admin") {
      navigate("/login");
    }
  }, [user, role, navigate]);

  const handleLogout = () => {
    logout(navigate);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const formatDateWithSuffix = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-GB", { month: "long" });
    const year = date.getFullYear();

    // Determine the suffix
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    return `${day}${suffix} ${month} ${year}`;
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col py-8 px-6">
        <div>
          <div className="flex items-center gap-2 mb-10">
            <img
              src="/dashboardDesign/homeImg.svg"
              alt="Logo"
              className="w-15 h-15"
            />
            <h1 className="text-2xl font-bold text-green-600 -mt-1">
              Edumaniax
            </h1>
          </div>

          <nav className="flex flex-col gap-7 ml-5 text-sm font-medium">
            <NavLink className="flex items-center gap-3 text-green-600 hover:text-green-700">
              <img
                src="/dashboardDesign/profile.svg"
                alt="Profile"
                className="w-5 h-5"
              />
              <span className="font-bold">My Profile</span>
            </NavLink>

            <NavLink
              to="/modules"
              className="flex items-center gap-3 text-gray-400 hover:text-green-600"
            >
              <img
                src="/dashboardDesign/modules.svg"
                alt="Modules"
                className="w-5 h-5"
              />
              <span className="font-bold">My Modules</span>
            </NavLink>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 text-red-500 hover:text-red-600"
            >
              <img
                src="/dashboardDesign/logout.svg"
                alt="Logout"
                className="w-5 h-5"
              />
              Log Out
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-6">
          {/* DASHBOARD HEADER */}
          <div className="bg-[#068F36] text-5xl font-bold text-center px-10 py-4 rounded-md shadow-sm mb-8">
            <span className="text-white" style={{ opacity: 0.72 }}>
              DASHBOARD
            </span>
          </div>

          {/* PROFILE + CHARACTER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* LEFT COLUMN (Profile + Comments) */}
            <div className="flex flex-col gap-6 max-w-[520px]">
              {/* Profile Card */}
              <div className="bg-white rounded-xl shadow-md p-6 relative">
                {/* Avatar */}
                <div className="flex flex-col items-center relative -mt-12">
                  <img
                    src={avatar}
                    alt="Profile Avatar"
                    className="w-24 h-24 rounded-full"
                  />

                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />

                  {/* Upload Button */}
                  <button
                    onClick={handleUploadClick}
                    className="absolute mt-17 ml-30 transform translate-y-1/2 bg-[#068F36] text-white text-xs px-4 py-1 rounded shadow hover:bg-green-700"
                  >
                    Upload Photo
                  </button>
                </div>

                {/* Profile Info */}
                <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                  {/* Left Section: Name, Class, Age */}
                  <div className="border rounded-lg p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-xs">Your Name</p>
                        <p className="font-semibold">{user.name}</p>
                      </div>
                      <button className="bg-[#F0EFFA] text-gray-600 text-xs px-3 py-1 rounded-lg">
                        Edit
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-xs">Class</p>
                        <p className="font-semibold">{user.userClass}</p>
                      </div>
                      <button className="bg-[#F0EFFA] text-gray-600 text-xs px-3 py-1 rounded-lg">
                        Edit
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-xs">Age</p>
                        <p className="font-semibold">{user.age} Yrs.</p>
                      </div>
                      <button className="bg-[#F0EFFA] text-gray-600 text-xs px-3 py-1 rounded-lg">
                        Edit
                      </button>
                    </div>
                  </div>

                  {/* Right Section: Phone, Email, Account Created On */}
                  <div className="border rounded-lg p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-xs">Phone Number</p>
                        <p className="font-semibold">{user.phonenumber}</p>
                      </div>
                      <button className="bg-[#F0EFFA] text-gray-600 text-xs px-3 py-1 rounded-lg">
                        Edit
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-xs">Email ID</p>
                      </div>
                      <button className="bg-[#068F36] text-white text-xs px-3 py-1 rounded-lg">
                        Add Now
                      </button>
                    </div>

                    <div>
                      <p className="text-gray-500 text-xs">
                        Account Created On
                      </p>
                      <p className="font-semibold">
                        {formatDateWithSuffix(user.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  Comments Written
                </h4>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm flex-1">
                    <h5 className="text-sm font-semibold mb-1 text-blue-800">
                      AI Research Blog
                    </h5>
                    <p className="text-sm text-gray-600">
                      Excellent conversation with him.. very knowledgeable
                      person happy to talk with him
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm flex-1">
                    <h5 className="text-sm font-semibold mb-1 text-blue-800">
                      Data Analytics and Research 2025
                    </h5>
                    <p className="text-sm text-gray-600">
                      Excellent conversation with him.. very knowledgeable
                      person happy to talk with him
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (Character Card) */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Your Character
              </h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                {user.characterName}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {user.characterGender}
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {user.characterStyle}
                </span>
                {user.characterTraits.map((trait, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 px-4 mb-6">
                Meet "{user.characterName}" who is 40% creative, 30% curious,
                20% sporty, and 10% mysterious
              </p>

              <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
                Start Exploration Now →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
