import { digitalTools, toolIcons } from "../../utilities/constants.js";

const DigitalTools = () => {
  return (
    <div
      className="mb-10"
    >
      <section id="digital-tools" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Digital Banking Tools You Use
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalTools.map((tool) => {
              const IconComponent = toolIcons[tool.icon];

              return (
                <div
                  key={tool.name}
                  className="bg-blue-50 rounded-xl p-6 flex items-start transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
                    <p className="text-gray-700">{tool.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              The Digital Banking Revolution
            </h3>
            <p className="mb-4">
              Banking has evolved from standing in lines at branches to being
              available 24/7 in your pocket. Today's banking tools give you
              instant access to your money and financial information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Convenience</h4>
                <p className="text-blue-100">
                  Bank anytime, anywhere without visiting a branch
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Speed</h4>
                <p className="text-blue-100">
                  Instant transfers and payments in seconds
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Control</h4>
                <p className="text-blue-100">
                  Monitor your spending and account activity in real-time
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">
              Security Tip
            </h3>
            <p className="text-gray-700">
              Always protect your digital banking credentials. Never share
              passwords, PINs, or OTPs with anyone, even if they claim to be
              from your bank. Legitimate banks will never ask for your full
              password or PIN.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default DigitalTools;
