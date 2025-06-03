export default function PricesFluctuate({ topicRefs }) {
  return (
    <div
      id="4-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4-5"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="bg-yellow-50 max-w-3xl shadow-2xl p-6 rounded-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-3">
        💰 Why Do Share Prices Go Up or Down?
      </h2>

      <div className="bg-red-100 p-4 rounded-xl  shadow-sm">
        <p className="text-xl font-medium mb-2">
          Share prices change every day. Why?
        </p>
        <ul className="list-disc pl-6 space-y-1 text-xl text-gray-700">
          <li>Company profits or losses</li>
          <li>News (like new products or scandals)</li>
          <li>People buying or selling shares</li>
          <li>Government policies or world events</li>
        </ul>
      </div>

      <div className="bg-blue-100 p-4 rounded-xl shadow-sm space-y-2">
        <p className="font-semibold text-xl">📊 Think of it like this:</p>
        <p className="text-xl">
          If everyone wants a CrunchyMunch share →{" "}
          <strong>Price goes UP</strong>
          <br />
          If everyone wants to sell → <strong>Price goes DOWN</strong>
        </p>
      </div>
    </div>
    </div>
    
  );
}
