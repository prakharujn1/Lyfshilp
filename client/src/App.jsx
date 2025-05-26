import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PickABank from "./components/Finance Management/Activities/Level 1/Pick A Bank/PickABank";
import OverspendTrap from "./components/Finance Management/Activities/Level 1/OverspendTrap.jsx";
import BudgetActivity from "./components/Finance Management/Activities/Level 1/BudgetActivity.jsx";
import BudgetBuilder from "./components/Finance Management/Activities/Level 1/BudgetBuilder.jsx";
import CreditCardSimulator from "./components/Finance Management/Activities/Level 2/CreditCardSimulator.jsx";
import InvestmentSimulator from "./components/Finance Management/Activities/Level 3/InvestmentSimulator.jsx";
import Adaptive_Learning_Quiz from "./components/assessment_tools/Adaptive_Learning_Quiz.jsx";
import Finance from "./pages/Finance.jsx";
import EmiVsLumpSum from "./components/Finance Management/Activities/Level 2/EmiVsLumpSum.jsx";
import NewsFlash from "./components/Finance Management/Activities/Level 3/NewsFlash.jsx";
import RiskOMeter from "./components/Finance Management/Activities/Level 3/RiskOMeter.jsx";
import Challenge3 from "./components/Finance Management/Activities/Level 2/Challenge3.jsx";
import My_Purchase_Plan from "./components/Finance Management/Activities/Level 2/My_Purchase_Plan.jsx"
import YourPortfolio from "./components/Finance Management/Activities/Level 3/YourPortfolio.jsx"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finance" element={<Finance />} />
            {/* Finance Management Activities */}
            <Route path="/pick-a-bank" element={<PickABank />} />
            <Route path="/budget-activity" element={<BudgetActivity />} />
            <Route path="/budget-builder" element={<BudgetBuilder />} />
            <Route path="/overspend-trap" element={<OverspendTrap />} />
            <Route
              path="/credit-card-simulator"
              element={<CreditCardSimulator />}
            />
            <Route
              path="/investment-simulator"
              element={<InvestmentSimulator />}
            />
            <Route path="/quiz" element={<Adaptive_Learning_Quiz />} />
            <Route path="/emi-vs-lumpsum" element={<EmiVsLumpSum />} />
            <Route path="/newsflash" element={<NewsFlash />} />
            <Route path="/riskometer" element={<RiskOMeter />} />
            <Route path="/challenge3" element={<Challenge3/>} />
            <Route path="/my_purchase_plan" element={<My_Purchase_Plan/>}/>
            <Route path="/your_portfolio" element={<YourPortfolio/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
