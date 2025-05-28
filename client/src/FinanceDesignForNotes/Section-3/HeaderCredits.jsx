export default function HeaderCredits() {
  return (
    <div className="w-[90%] mx-auto">
      <div className="bg-yellow-50 shadow-2xl p-10 rounded-2xl mx-auto space-y-4">
        <h2 className="text-3xl text-center font-bold mb-3">
          What Is Credit and Why It Matters
        </h2>

        <div className="bg-blue-200 p-4 rounded-xl shadow-sm">
          <p className="font-medium mb-4 text-xl">In this section, you will learn - </p>
          <ul className="list-disc pl-3 text-xl space-y-2 ">
            <li>What Is Credit?</li>
            <li>Why Credit Can Be Tricky?</li>
            <li>Credit Score</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
