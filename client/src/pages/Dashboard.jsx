import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  if (!currentUser) {
    // Redirect to login if not authenticated
    useEffect(() => {
      navigate("/login");
    }, [navigate]);

    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">My Dashboard</h1>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <LogOut size={16} className="mr-1" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4">
            <h2 className="text-white text-lg font-semibold">
              Welcome, {currentUser.name}!
            </h2>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Your Character
                </h3>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-indigo-700 font-medium">
                      {currentUser.character.name}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <p className="text-sm font-medium text-gray-500">Gender</p>
                    <p className="text-indigo-700 font-medium">
                      {currentUser.character.gender}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <p className="text-sm font-medium text-gray-500">Style</p>
                    <p className="text-indigo-700 font-medium">
                      {currentUser.character.style}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <p className="text-sm font-medium text-gray-500">Traits</p>
                    <div className="flex gap-2 mt-1">
                      {currentUser.character.traits.map((trait, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Your Information
                </h3>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Name
                      </dt>
                      <dd className="mt-1 text-gray-900">{currentUser.name}</dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-gray-500">Age</dt>
                      <dd className="mt-1 text-gray-900">{currentUser.age}</dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Phone
                      </dt>
                      <dd className="mt-1 text-gray-900">
                        {currentUser.phone.replace(
                          /(\d{3})(\d{3})(\d{4})/,
                          "$1-$2-$3"
                        )}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Account Created
                      </dt>
                      <dd className="mt-1 text-gray-900">
                        {new Date().toLocaleDateString()}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    What's Next?
                  </h3>
                  <p className="text-gray-600">
                    Start your journey with your new character! Explore the
                    world, complete quests, and level up your skills.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                    Start Adventure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
