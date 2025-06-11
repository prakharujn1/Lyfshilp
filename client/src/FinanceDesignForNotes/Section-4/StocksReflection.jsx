export default function StocksReflection() {
  return (
    <div
      
      className="mb-10"
    >
      <div className="bg-yellow-50 max-w-3xl shadow-2xl p-6 rounded-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-3">🧠 Reflection Prompt:</h2>

      <div className="bg-blue-200 p-4 rounded-xl shadow-sm">
        <p className="font-bold mb-4 text-xl">Ask an adult</p>
        <div className="flex space-x-2">
          <div className="bg-red-200 w-48 text-xl p-2  text-center flex justify-center items-center rounded-lg">
            Have they ever invested in the stock market?
          </div>
          <div className="bg-green-200 w-48 text-xl p-2 flex justify-center items-center text-center rounded-lg">
            What happened?
          </div>
          <div className="bg-yellow-200 w-48 text-xl p-2 text-center flex justify-center items-center rounded-lg">
            What advice would they like to give you?
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
