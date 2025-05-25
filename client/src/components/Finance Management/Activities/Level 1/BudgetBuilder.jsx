import { useRef, useState } from "react";
import {
  FaWallet,
  FaFilm,
  FaHamburger,
  FaGift,
  FaBook,
  FaPiggyBank,
  FaShoePrints,
  FaQuestionCircle,
} from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function parsePossiblyStringifiedJSON(text) {
  if (typeof text !== "string") return null;

  // Remove triple backticks and optional "json" after them
  text = text.trim();
  if (text.startsWith("```")) {
    text = text
      .replace(/^```(json)?/, "")
      .replace(/```$/, "")
      .trim();
  }

  // Remove single backticks
  if (text.startsWith("`") && text.endsWith("`")) {
    text = text.slice(1, -1).trim();
  }

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    return null;
  }
}

const APIKEY = import.meta.env.VITE_API_KEY;

const BudgetBuilder = () => {
  const initialExpenses = [
    { id: "1", label: "Weekend Movie", cost: 200, icon: <FaFilm /> },
    { id: "2", label: "Data Plan", cost: 210, icon: <FaPiggyBank /> },
    { id: "3", label: "Lunch", cost: 125, icon: <FaHamburger /> },
    { id: "4", label: "Save for Shoes", cost: 350, icon: <FaShoePrints /> },
    { id: "5", label: "Books", cost: 200, icon: <FaBook /> },
    { id: "6", label: "Gift", cost: 150, icon: <FaGift /> },
  ];

  const [surpriseExpenses, setSurpriseExpenses] = useState([
    {
      id: "s1",
      label: "Car Repair",
      cost: 250,
      icon: <FaQuestionCircle />,
      shown: false,
    },
    {
      id: "s2",
      label: "Medical Bill",
      cost: 180,
      icon: <FaQuestionCircle />,
      shown: false,
    },
    {
      id: "s3",
      label: "Midnight Cravings",
      cost: 120,
      icon: <FaQuestionCircle />,
      shown: false,
    },
    {
      id: "s4",
      label: "Ice Cream Treat",
      cost: 80,
      icon: <FaQuestionCircle />,
      shown: false,
    },
    {
      id: "s5",
      label: "Stationery",
      cost: 60,
      icon: <FaQuestionCircle />,
      shown: false,
    },
    {
      id: "s6",
      label: "Lend to a friend",
      cost: 50,
      icon: <FaQuestionCircle />,
      shown: false,
    },
    {
      id: "s7",
      label: "Split an Unexpected Bill",
      cost: 200,
      icon: <FaQuestionCircle />,
      shown: false,
    },
  ]);

  const [wallet, setWallet] = useState(1000);
  const [available, setAvailable] = useState(initialExpenses);
  const [spent, setSpent] = useState([]);
  const surpriseCount = useRef(0);

  const addSurpriseExpense = () => {
    console.log("surprise coutn", surpriseCount.current);

    if (surpriseCount.current >= 2) {
      return;
    }

    let index;

    index = Math.floor(Math.random() * surpriseExpenses.length);
    let trial = 0;

    while (
      surpriseExpenses[index].cost > wallet ||
      surpriseExpenses[index].shown
    ) {
      if (trial > 5) {
        return;
      }
      trial++;
      index = Math.floor(Math.random() * surpriseExpenses.length);
    }

    setSurpriseExpenses((prev) => {
      return surpriseExpenses.map((item, idx) => {
        if (idx === index) {
          return { ...item, shown: true };
        }
        return item;
      });
    });

    const surpriseItem = surpriseExpenses[index];

    console.log("Surprise expenses", surpriseExpenses);
    console.log("Surprise item", surpriseItem);

    toast.info(
      `💥 Surprise Expense Added : ${surpriseItem.label} : ₹${surpriseItem.cost}`
    );

    setSpent((prev) => [...prev, surpriseItem]);
    setWallet((prev) => prev - surpriseItem.cost);
    surpriseCount.current += 1;
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    console.log(result, source, destination);

    if (!destination) return;

    // Moving within same list - do nothing for now
    if (source.droppableId === destination.droppableId) return;

    let movedItem;
    // FROM AVAILABLE TO SPENT
    if (
      source.droppableId === "available" &&
      destination.droppableId === "spent"
    ) {
      movedItem = available[source.index];

      if (wallet < movedItem.cost) {
        toast.error("💸 Not enough money in wallet!");
        return;
      }

      const newAvailable = [...available];
      newAvailable.splice(source.index, 1);

      const newSpent = [...spent];
      newSpent.splice(destination.index, 0, movedItem);

      setAvailable(newAvailable);
      setSpent(newSpent);
      setWallet(wallet - movedItem.cost);

      if (Math.random() > 0.3) {
        addSurpriseExpense();
      }
    }

    // FROM SPENT TO AVAILABLE
    else {
      movedItem = spent[source.index];

      const newSpent = [...spent];
      newSpent.splice(source.index, 1);

      const newAvailable = [...available];
      newAvailable.splice(destination.index, 0, movedItem);

      setSpent(newSpent);
      setAvailable(newAvailable);
      setWallet(wallet + movedItem.cost);

      if (Math.random() > 0.3) {
        addSurpriseExpense();
      }
    }
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    const cleanExpenses = initialExpenses.map(({ id, label, cost }) => ({
      id,
      label,
      cost,
    }));

    const cleanSpent = spent.map(({ id, label, cost }) => ({
      id,
      label,
      cost,
    }));

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${APIKEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `Evaluate the user's budget decisions and return feedback. The user is a school student.

Initial wallet: ₹1000
Initial Planned expenses: ${JSON.stringify(cleanExpenses)}
Final spent: ${JSON.stringify(cleanSpent)}

### FINAL INSTRUCTION ###
Return ONLY raw JSON (no backticks, no markdown, no explanations).
Example format:
{
  spendingScore: 7/10, 
  tip: "Saving is crucial. Consider a higher savings rate in future.",
  categoryToCut: "Books"
}
The three fields should never be empty. If you find exceptionally well-balanced expenses, you may keep the categoryToCut field as "None - you balanced your expenses really well".
For tip, suggest something actionable. 

`,
                },
              ],
            },
          ],
        }
      );

      const aiReply = response.data.candidates[0].content.parts[0].text;
      console.log(aiReply);
      const parsed = parsePossiblyStringifiedJSON(aiReply);
      console.log(parsed);
      setResult(parsed);
    } catch (err) {
      setError("Error fetching AI response");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="bg-blue-200 overflow-y-auto rounded-2xl p-8 font-sans">
      <div className="text-center text-4xl font-bold mb-6 text-blue-800">
        Weekly Budget Builder
      </div>

      <div className="flex justify-center items-center text-2xl mb-6 text-green-700">
        Wallet <FaWallet className="ml-2 mr-1" /> ₹{wallet}
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex justify-center space-x-12">
          {/* Available Expenses */}
          <Droppable droppableId="available">
            {(provided) => (
              <div
                className="bg-white p-4 rounded shadow-md w-72 min-h-[300px]"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-xl font-semibold text-center text-blue-700 mb-2">
                  Available Expenses
                </h2>
                {available.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        className="bg-blue-200 hover:bg-blue-300  p-2 m-2 rounded flex justify-between items-center"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span className="text-lg flex items-center gap-2">
                          {item.icon} {item.label}
                        </span>
                        <span className="text-sm font-bold">₹{item.cost}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* Spent Expenses */}
          <Droppable droppableId="spent">
            {(provided) => (
              <div
                className="bg-white p-4 rounded shadow-md w-72 min-h-[300px]"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-xl font-semibold text-center text-red-700 mb-2">
                  Spent
                </h2>
                {spent.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        className="bg-red-200 p-2 m-2 rounded flex justify-between items-center"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span className="flex items-center gap-2">
                          {item.icon} {item.label}
                        </span>
                        <span className="text-sm font-bold">₹{item.cost}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <div className="mt-10">
        <div className="flex justify-center">
          {loading ? (
            <div className="flex flex-col items-center justify-center my-6">
              <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-600 text-2xl">Loading feedback...</p>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="text-2xl rounded-2xl p-4 text-sky-800 bg-fuchsia-400 hover:bg-fuchsia-700"
            >
              Click for Feedback
            </button>
          )}
        </div>
        {error && <p>{error}</p>}
      </div>
      {result && (
        <div className="mt-10">
          <div className="flex justify-center items-center">
            <h2 className="text-2xl">Feedback</h2>
          </div>
          <div className="w-1/2 p-5 mx-auto mt-2 flex items-center justify-center">
            <div className=" bg-white border-2 p-4 border-purple-400 rounded-lg  whitespace-pre-wrap">
              <div className="text-gray-800 space-y-2">
                <p>
                  <strong>Spending Score:</strong> {result?.spendingScore}
                </p>
                <p>
                  <strong>Tip: </strong>
                  {result?.tip}
                </p>
                <div>
                  <strong>Category to cut: </strong>
                  {result?.categoryToCut}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default BudgetBuilder;
