import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PickABank from "./components/Finance Management/Activities/Level 1/Pick A Bank/PickABank";
import OverspendTrap from "./components/Finance Management/Activities/Level 1/OverspendTrap.jsx";
import BudgetActivity from "./components/Finance Management/Activities/Level 1/BudgetActivity/BudgetActivity.jsx";
import BudgetBuilder from "./components/Finance Management/Activities/Level 1/Budeget Builder/BudgetBuilder.jsx";
import CreditCardSimulator from "./components/Finance Management/Activities/Level 2/CreditCardSimulator.jsx";
import InvestmentSimulator from "./components/Finance Management/Activities/Level 3/InvestmentSimulator.jsx";
import Adaptive_Learning_Quiz from "./components/assessment_tools/Adaptive_Learning_Quiz.jsx";
import Finance from "./pages/Finance.jsx";
import EmiVsLumpSum from "./components/Finance Management/Activities/Level 2/EmiVsLumpSum.jsx";
import NewsFlash from "./components/Finance Management/Activities/Level 3/NewsFlash.jsx";
import RiskOMeter from "./components/Finance Management/Activities/Level 3/RiskOMeter.jsx";
import Challenge3 from "./components/Finance Management/Activities/Level 2/Challenge3.jsx";
import My_Purchase_Plan from "./components/Finance Management/Activities/Level 2/My_Purchase_Plan.jsx";
import FinanceNotes from "./pages/FinanceNotes.jsx";
import FAQ from "./FinanceDesign/FAQ.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Section1 from "./pages/sections/Section1.jsx";
import Section2 from "./pages/sections/Section2.jsx";
import Section3 from "./pages/sections/Section3.jsx";
import Section4 from "./pages/sections/Section4.jsx";
import Section5 from "./pages/sections/Section5.jsx";
import Section6 from "./pages/sections/Section6.jsx";
import { useEffect, useState } from "react";
import DigitalMarketingNotes from "./pages/DigitalMarketingNotes.jsx"; // Importing the Digital Marketing Notes page
import Section1dm from "./pages/DMsections/Section1dm";
import Section2dm from "./pages/DMsections/Section2dm";
import Section3dm from "./pages/DMsections/Section3dm";
import Section4dm from "./pages/DMsections/Section4dm";
import Section5dm from "./pages/DMsections/Section5dm";
import Section6dm from "./pages/DMsections/Section6dm";
import Section7dm from "./pages/DMsections/Section7dm";
import Section8dm from "./pages/DMsections/Section8dm";
import IntroPageAdDetective from "./components/Digital Marketing/Level 1/AdDetective/IntroPageAdDetective";
import MissionCompleteAdDetective from "./components/Digital Marketing/Level 1/AdDetective/MissionCompleteAdDetective";
import AdDetectiveGamePage from "./components/Digital Marketing/Level 1/AdDetective/AdDetectiveGamePage";

import PrivacyPolicy from "./Footer-Routes/PrivacyPolicy";
import RefundPolicy from "./Footer-Routes/RefundPolicy";
import TermsAndConditions from "./Footer-Routes/TermsAndConditions";

import BrandCreatorGame from "./components/Digital Marketing/Level 1/BrandCreator/BrandCreatorGame";
import BrandBrandExplorerGameSelect from "./components/Digital Marketing/Level 1/BrandExplorer/BrandExplorerSelect";
import IntroPageBrandExplorer from "./components/Digital Marketing/Level 1/BrandExplorer/IntroPageBrandExplorer";
import BrandExplorerGameComplete from "./components/Digital Marketing/Level 1/BrandExplorer/BrandExplorerGameComplete";
import ScrollToTop from "./ScrollToTop";
import AdminLogin from "./pages/AdminLogin";
import DigitalMarketing from "./pages/DigitalMarketing";
import CaptionCraze from "./components/Digital Marketing/Level 2/Caption Craze/CaptionCraze";
import MatchingGame from "./components/Digital Marketing/Level 2/PostMatch/MatchingGame";
import MatchingGameResult from "./components/Digital Marketing/Level 2/PostMatch/MatchingGameResult";
import ReelPlannerGame from "./components/Digital Marketing/Level 2/Reel-Maker/ReelPlannerGame";
import LegalAwarenessNotes from "./pages/LegalAwarenessNotes";
import Module1 from "./pages/LegalAwareness/Module1";
import Module2 from "./pages/LegalAwareness/Module2";
import Module3 from "./pages/LegalAwareness/Module3";
import Module4 from "./pages/LegalAwareness/Module4";
import Module5 from "./pages/LegalAwareness/Module5";
import Module6 from "./pages/LegalAwareness/Module6";
import CommunicationsNotes from "./pages/CommunicationsNotes";
import Mod1 from "./pages/CommunicationNotes/Mod1";
import Mod2 from "./pages/CommunicationNotes/Mod2";
import Mod3 from "./pages/CommunicationNotes/Mod3";
import Mod4 from "./pages/CommunicationNotes/Mod4";
import Mod5 from "./pages/CommunicationNotes/Mod5";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [animationEnded, setAnimationEnded] = useState(false);
  const [startApp, setStartApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setAnimationEnded(true);
    }, 13000);
    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setShowAnimation(false);
    setAnimationEnded(true);
  };

  const handleStartJourney = () => {
    setStartApp(true);
  };

  // Show animation iframe
  if (showAnimation) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
        }}
      >
        <iframe
          src="/animations/edumaniax.html"
          title="Edumaniax Animation"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
        <button
          onClick={handleSkip}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#38bdf8",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            zIndex: 10000,
          }}
        >
          Skip
        </button>
      </div>
    );
  }

  // Show the start screen after animation ends or skip
  if (animationEnded && !startApp) {
    return (
      <div className="bg-gradient-to-b from-[#AEC8A4] to-white h-screen text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold mb-6">Ready to Begin?</h1>
        <button
          onClick={handleStartJourney}
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Start Your Journey with Edumaniax
        </button>
      </div>
    );
  }

  // Full app after "Start Journey"
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/finance/games" element={<Finance />} />
            <Route path="/finance/notes" element={<FinanceNotes />} />
            <Route path="/finance/notes/section-1" element={<Section1 />} />
            <Route path="/finance/notes/section-2" element={<Section2 />} />
            <Route path="/finance/notes/section-3" element={<Section3 />} />
            <Route path="/finance/notes/section-4" element={<Section4 />} />
            <Route path="/finance/notes/section-5" element={<Section5 />} />
            <Route path="/finance/notes/section-6" element={<Section6 />} />
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
            <Route path="/challenge3" element={<Challenge3 />} />
            <Route path="/my_purchase_plan" element={<My_Purchase_Plan />} />

            {/* Digital Marketing Routes */}

            {/* Games of digital marketing */}

            {/* Level 1 games of digital marketing */}
            <Route
              path="/digital-marketing/games"
              element={<DigitalMarketing />}
            />

            <Route
              path="/intro-ad-detective-game"
              element={<IntroPageAdDetective />}
            />
            <Route
              path="/ad-detective-game"
              element={<AdDetectiveGamePage />}
            />
            <Route
              path="/ad-detective-mission-complete"
              element={<MissionCompleteAdDetective />}
            />
            <Route path="/brand-creator-game" element={<BrandCreatorGame />} />

            <Route
              path="/brand-explorer-intro"
              element={<IntroPageBrandExplorer />}
            />
            <Route
              path="/brand-explorer-game"
              element={<BrandBrandExplorerGameSelect />}
            />
            <Route
              path="/brand-explorer-game-complete"
              element={<BrandExplorerGameComplete />}
            />

            {/* Level 2 games of digital marketing */}

            <Route path="/caption-craze" element={<CaptionCraze />} />
            <Route path="/matching-game" element={<MatchingGame />} />
            <Route
              path="/matching-game-result"
              element={<MatchingGameResult />}
            />

            <Route path="/reel-planner-game" element={<ReelPlannerGame />} />

            {/* Level 3 games of digital marketing */}

            {/*End of Games of digital marketing */}

            {/* Notes Page of digital marketing */}
            <Route
              path="/digital-marketing/notes"
              element={<DigitalMarketingNotes />}
            />
            <Route
              path="/digitalmarketing/notes/section-1"
              element={<Section1dm />}
            />
            <Route
              path="/digitalmarketing/notes/section-2"
              element={<Section2dm />}
            />
            <Route
              path="/digitalmarketing/notes/section-3"
              element={<Section3dm />}
            />
            <Route
              path="/digitalmarketing/notes/section-4"
              element={<Section4dm />}
            />
            <Route
              path="/digitalmarketing/notes/section-5"
              element={<Section5dm />}
            />
            <Route
              path="/digitalmarketing/notes/section-6"
              element={<Section6dm />}
            />
            <Route
              path="/digitalmarketing/notes/section-7"
              element={<Section7dm />}
            />
            <Route
              path="/digitalmarketing/notes/section-8"
              element={<Section8dm />}
            />

            {/* Legal Awareness Notes Page */}
            <Route path="/law/notes" element={<LegalAwarenessNotes />} />
            <Route path="/law/notes/module-1" element={<Module1 />} />
            <Route path="/law/notes/module-2" element={<Module2 />} />
            <Route path="/law/notes/module-3" element={<Module3 />} />
            <Route path="/law/notes/module-4" element={<Module4 />} />
            <Route path="/law/notes/module-5" element={<Module5 />} />
            <Route path="/law/notes/module-6" element={<Module6 />} />

            {/*Communication Notes Page */}
            <Route
              path="/communications/notes"
              element={<CommunicationsNotes />}
            />
            <Route
              path="/communications/notes/listen-to-understand"
              element={<Mod1 />}
            />
            <Route
              path="/communications/notes/feelings-explorer"
              element={<Mod2 />}
            />
            <Route
              path="/communications/notes/speak-with-purpose"
              element={<Mod3 />}
            />
            <Route
              path="/communications/notes/conflict-resolution"
              element={<Mod4 />}
            />
            <Route
              path="/communications/notes/online-vs-real"
              element={<Mod5 />}
            />

            {/* Other Routes */}

            <Route path="/faq's" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
