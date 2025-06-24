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
import SocialLearningNotes from "./pages/SocialLearningNotes";
import KnowingMyself from "./pages/SocialLearningNotes/KnowingMyself";
import BuildPositiveRel from "./pages/SocialLearningNotes/BuildPositiveRel";
import HandlingStress from "./pages/SocialLearningNotes/HandlingStress";
import SelfDiscipline from "./pages/SocialLearningNotes/SelfDiscipline";
import DecisionMaking from "./pages/SocialLearningNotes/DecisionMaking";
import ComputerNotes from "./pages/ComputerNotes";
import WhatIsAi from "./pages/CompNotes/WhatIsAi";
import WorkOfAi from "./pages/CompNotes/WorkOfAi";
import TypesAndUseOfAi from "./pages/CompNotes/TypesAndUseOfAi";
import WhatCantAiDo from "./pages/CompNotes/WhatCantAiDo";
import ImpAIWords from "./pages/CompNotes/ImpAIWords";
import BuildAi from "./pages/CompNotes/BuildAi";
import TestUrSkills from "./pages/CompNotes/TestUrSkills";
import ImportanceOfAi from "./pages/CompNotes/ImportanceOfAi";
import ListenUp from "./components/Communication/Level-1/ListenUp/ListenUp";
import SayItLikeUMeanIt from "./components/Communication/Level-1/SayItLikeUMeanIt/SayItLikeUMeanIt";
import PickYourPersuasion from "./components/Communication/Level-1/PickYourPersuasion/PickYourPersuasion";
import AnalyticsDashboard from "./components/Digital Marketing/Level 3/AnalyticsDashboard/AnalyticsDashboard";
import InterruptGame from "./components/Communication/Level 2/Interrupt/InterruptGame";
import FeelItFindItGame from "./components/Communication/Level 2/FeelItFindIt/FeelItFindItGame";
import NVCGame from "./components/Communication/Level 2/NVC/NVCGame";
import ToneFixer from "./components/Communication/Level-3/ToneFixer/ToneFixer";
import ComplimentQuest from "./components/Communication/Level-3/ComplimentQuest/ComplimentQuest";
import SpeakUpGame from "./components/Communication/Level-3/SpeakUp/SpeakUp";
import WindowSeatWar from "./components/Communication/Level-4/WindowSeatWar/WindowSeatWar";
import PitchItLikePro from "./components/Communication/Level-4/PitchItLikePro/PitchItLikePro";
import CoolTheConflict from "./components/Communication/Level-4/CoolTheConflict/CoolTheConflict";
import LegalQuiz from "./components/Legal Awareness/Level1/LegalQuiz/LegalQuiz";
import PuzzleMatch from "./components/Legal Awareness/Level2/Puzzle Match/PuzzleMatch";
import CatchYourRightsGame from "./components/Legal Awareness/Level2/Catch-rights/CatchYourRightsGame";
import CaseHear from "./components/Legal Awareness/Level3/Case Hear/CaseHear";
import MazeOfChoices from "./components/Legal Awareness/Level4/MazeOfChoices/MazeOfChoices";
import AdCampaignerGame from "./components/Digital Marketing/Level 3/AdCampaign/AdCampaignerGame";
import AdCampaignerIntro from "./components/Digital Marketing/Level 3/AdCampaign/AdCampaignerIntro";
import AdCampaignComplete from "./components/Digital Marketing/Level 3/AdCampaign/AdCampaignComplete";
import BudgetBattleGameComplete from "./components/Digital Marketing/Level 3/Budget Battle/BudgetBattleGameComplete";
import IntroBudgetBattle from "./components/Digital Marketing/Level 3/Budget Battle/IntroBudgetBattle";
import SortItOut from "./components/Legal Awareness/Level1/SortItOut/SortItOut";
import AIChallengeGame from "./components/Computers/Level 1/AIChallengeGame/AIChallengeGame";
import MeetAITypeGame from "./components/Computers/Level 1/MeetAITypeGame/MeetAITypeGame";
import BuildABotChallenge from "./components/Computers/Level 1/BuildABotChallenge/BuildABotChallenge";
import TrainTheBrainGame from "./components/Computers/Level 2/TrainTheBrainGame/TrainTheBrainGame";
import SmartOrNotGame from "./components/Computers/Level 2/SmartOrNotGame/SmartOrNotGame";
import AIProblemSolverGame from "./components/Computers/Level 2/AIProblemSolverGame/AIProblemSolverGame";
import AIEthicsDetective from "./components/Computers/Level 3/AIEthicsDetective/AIEthicsDetective";
import FutureAIArchitect from "./components/Computers/Level 3/FutureAIArchitect/FutureAIArchitect";
import AICareerExplorerGame from "./components/Computers/Level 3/AICareerExplorer/AICareerExplorer";
import MoodMirror from "./components/SEL/Level-1/MoodMirror/MoodMirror";
import FriendshipFixer from "./components/SEL/Level-1/FriendshipFixer/FriendshipFixer";
import KindnessClicks from "./components/SEL/Level-1/KindnessClicks/KindnessClicks";
import StressBusterLab from "./components/SEL/Level-2/StressBusterLab/StressBusterLab";
import ConflictQuest from "./components/SEL/Level-2/ConflictQuest/ConflictQuest";
import MindBodyMatchUp from "./components/SEL/Level-2/MindBodyMatchUp/MindBodyMatchUp";
import InfluenceExplorer from "./components/SEL/Level-2/InfluenceExplorer/InfluenceExplorer";
import SmartCityGame from "./components/Games for 9-10/AI/Level1/SmartCityGame/SmartCityGame";
import SpyTheSmartTech from "./components/Games for 9-10/AI/Level1/SpyTheSmartTech/SpyTheSmartTech";
import WhichAIDoesWhat from "./components/Games for 9-10/AI/Level1/WhichAIDoesWhat/WhichAIDoesWhat";
import JusticeForAll from "./components/Games for 9-10/AI/Level3/JusticeForAll/JusticeForAll";
import DesignAbot from "./components/Games for 9-10/AI/Level3/DesignAbot/DesignAbot";
import BrandVoiceResult from "./components/Games for 9-10/Dig Mkting/Level1/BrandVoice/BrandVoiceResult";
import BrandVoiceGame from "./components/Games for 9-10/Dig Mkting/Level1/BrandVoice/BrandVoiceGame";
import CarouselCampaign from "./components/Games for 9-10/Dig Mkting/Level1/CarouselCampaign/CarouselCampaign CarouselCampaign";
import DigitalExplorerResult from "./components/Games for 9-10/Dig Mkting/Level1/Dig Explorer/DigitalExplorerResult DigitalExplorerResult";
import DigitalExplorer from "./components/Games for 9-10/Dig Mkting/Level1/Dig Explorer/DigitalExplorer";

import FutureMeInAI from "./components/Games for 9-10/AI/Level3/FutureMeInAI/FutureMeInAI";
import ThinkBeforeYouTechGame from "./components/Games for 9-10/AI/Level3/ThinkBeforeYouTechGame/ThinkBeforeYouTechGame";

import Courses from "./pages/Courses";
import MissionGoalTracker from "./components/SEL/Level-3/MissionGoalTracker/MissionGoalTracker";
import HelpHub from "./components/SEL/Level-3/HelpHub/HelpHub";
import MyCircleMission from "./components/SEL/Level-3/MyCircleMission/MyCircleMission";
import EnvironmentalNotes from "./pages/EnvironmentalNotes";
import ClassifyIt from "./components/Environment/Level-1/ClassifyIt/ClassifyIt";
import PickZone from "./components/Environment/Level-1/PickZone/PickZone";
import ChainReaction from "./components/Environment/Level-1/ChainReaction/ChainReaction";
import GreenBudget from "./components/Environment/Level-2/GreenBudget/GreenBudget";
import MatchFallOut from "./components/Environment/Level-2/MatchFallout/MatchFallOut";
import ClimatePledge from "./components/Environment/Level-2/ClimatePledge/ClimatePledge";
import ReelArchitectGame from "./components/Games for 9-10/Dig Mkting/Level2/ReelArchitectGame/ReelArchitectGame";
import StoryboardSprintGame from "./components/Games for 9-10/Dig Mkting/Level2/StoryboardSprintGame/StoryboardSprintGame";
import BrandVoiceChallenge from "./components/Games for 9-10/Dig Mkting/Level2/BrandVoiceChallenge/BrandVoiceChallenge";
import CampaignCaptainGame from "./components/Games for 9-10/Dig Mkting/Level3/CampaignCaptainGame/CampaignCaptainGame";
import CauseScanner from "./components/Environment/Level-3/CauseScanner/CauseScanner";
import MeltDownTracker from "./components/Environment/Level-3/MeltDownTracker/MeltDownTracker";
import DilemmaCards from "./components/Environment/Level-3/DilemmaCards/DilemmaCards";
import EntrepreneurshipNotes from "./pages/EntrepreneurshipNotes";
import InnovationExplorer from "./components/Entrepreneurship/Level-1/InnovationExplorer/InnovationExplorer";
import AIStartupBuilder from "./components/Entrepreneurship/Level-1/AIStartupBuilder.jsx/AIStartupBuilder";
import EthicsAndImpact from "./components/Entrepreneurship/Level-2/EthicsAndImpact/EthicsAndImpact";
import PitchChampion from "./components/Entrepreneurship/Level-2/PitchChampion/PitchChampion";
import UserPersonaDetective from "./components/Entrepreneurship/Level-3/UserPersonaDetective/UserPersonaDetective";
import MVPTest from "./components/Entrepreneurship/Level-3/MVPTest/MVPTest";
import SustainabilityGames1 from "./components/Games for 9-10/Environment/Level3/InfrastructureShowdown/SustainabilityGames1";
import SustainabilityGames2 from "./components/Games for 9-10/Environment/Level3/Techno-Solutionism/SustainabilityGames2";
import MeasureCompareQuiz from "./components/Games for 9-10/Environment/Level2/Measure and Compare/MeasureCompareQuiz";
import FeedbackLoopGame from "./components/Games for 9-10/Environment/Level1/Feedback Loop/FeedbackLoopGame";
import CauseEffectGame from "./components/Games for 9-10/Environment/Level1/System Sync/CauseEffectGame";
import LeadershipNotes from "./pages/LeadershipNotes";
import ExternalityDetectiveGame from "./components/Games for 9-10/Environment/Level2/Externality Detective/ExternalityDetectiveGame";
import TortLawGame1 from "./components/Class 11-12/Legal Awareness/Level1/Game1/TortLawGame1";
import TortLawGame2 from "./components/Class 11-12/Legal Awareness/Level1/Game2/TortLawGame2";
import TortLawGame3 from "./components/Class 11-12/Legal Awareness/Level1/Game3/TortLawGame3";
import CrimeCivilGame from "./components/Class 11-12/Legal Awareness/Level2/CrimeCivilGame/CrimeCivilGame";
import LegalConceptsGame from "./components/Class 11-12/Legal Awareness/Level3/LegalConcepts/LegalConceptsGame";
import LegalConceptsResult from "./components/Class 11-12/Legal Awareness/Level3/LegalConcepts/LegalConceptsResult";
import LandmarkCasesGame from "./components/Class 11-12/Legal Awareness/Level3/LandmarkCases/LandmarkCasesGame";
import LandmarkCasesResult from "./components/Class 11-12/Legal Awareness/Level3/LandmarkCases/LandmarkCasesResult";
import CarbonCycleVault from "./components/Class 11-12/Environment/Level-1/CarbonCycleVault/CarbonCycleVault";
import NitrogenReactor from "./components/Class 11-12/Environment/Level-1/NitrogenReactor/NitrogenReactor";
import PhosphorusLockdown from "./components/Class 11-12/Environment/Level-1/PhosphorusLockdown/PhosphorusLockdown";
import WaterGridCrisis from "./components/Class 11-12/Environment/Level-1/WaterGridCrisis/WaterGridCrisis";
import UrbanFloodFlashpoint from "./components/Class 11-12/Environment/Level-2/UrbanFloodFlashpoint/UrbanFloodFlashpoint";
import DayZero from "./components/Class 11-12/Environment/Level-2/DayZero/DayZero";
import UreaAddiction from "./components/Class 11-12/Environment/Level-3/UreaAddiction/UreaAddiction";
import PeakPhosphorusPanic from "./components/Class 11-12/Environment/Level-3/PeakPhosphorusPanic/PeakPhosphorusPanic";
import LegalQuizQuestLevel3 from "./components/Games for 9-10/Legal Awareness/Level3/Quiz/LegalQuizQuestLevel3";
import JusticeThroneGame from "./components/Games for 9-10/Legal Awareness/Level2/Justice Throne/JusticeThroneGame";
import MatchTermsGameResult from "./components/Games for 9-10/Legal Awareness/Level1/Result";
import MatchTermsGame from "./components/Games for 9-10/Legal Awareness/Level1/Game";
import EthicsFirewallGame from "./components/Class 11-12/Entrepreneurship/Game3/Game3";
import StartupSimulationGame from "./components/Class 11-12/Entrepreneurship/Game2/Game2";
import ProblemSolutionGame from "./components/Class 11-12/Entrepreneurship/Game1/Game1";
import Computer from "./pages/Computers";
import Law from "./pages/Law";
import Communication from "./pages/Communication";
import Entrepreneurship from "./pages/Entrepreneurship";
import LeaderTypeMatch from "./components/Leadership/Level-1/LeaderType/LeaderTypeMatch";
import VisionBuilderGame from "./components/Leadership/Level-1/VisionBuilder/VisionBuilder";
import CommunicationLab from "./components/Leadership/Level-2/CommunicationLab/CommunicationLab";
import EmpathyRadarGame from "./components/Leadership/Level-2/EmpathyRadarGame/EmpathyRadarGame";
import DecisionRoom from "./components/Leadership/Level-3/DecisionRoom/DecisionRoom";
import TeamArchitect from "./components/Leadership/Level-3/TeamArchitect/TeamArchitect";
import InnovationSprint from "./components/Leadership/Level-4/InnovationSprint/InnovationSprint";
import Leadership from "./pages/Leadership";
import IntegrityQuest from "./components/Leadership/Level-4/IntegrityQuest/IntegrityQuest";
import Environment from "./pages/Environment";
import SocialLearning from "./pages/SocialLearning";
import AboutUs from "./pages/AboutUs";

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
            <Route path="/about" element={<AboutUs />} />
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

            <Route
              path="/intro-budget-battle"
              element={<IntroBudgetBattle />}
            />
            <Route
              path="/budget-battle-game-complete"
              element={<BudgetBattleGameComplete />}
            />
            <Route
              path="/ad-campaigner-game-complete"
              element={<AdCampaignComplete />}
            />
            <Route
              path="/ad-campaigner-intro"
              element={<AdCampaignerIntro />}
            />
            <Route path="/ad-campaigner-game" element={<AdCampaignerGame />} />

            <Route
              path="/analytics-adventure"
              element={<AnalyticsDashboard />}
            />

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

            {/* Legal Awareness  */}
            <Route path="/law/games" element={<Law />} />

            {/* Legal Awareness Games */}

            {/* Level 4 */}
            <Route path="/maze-of-choices" element={<MazeOfChoices />} />
            {/* Level 3 */}
            <Route path="/case-hear" element={<CaseHear />} />

            {/* Level 2 */}
            <Route
              path="/catch-your-rights"
              element={<CatchYourRightsGame />}
            />
            <Route path="/puzzle-match" element={<PuzzleMatch />} />

            {/* Level 1 */}
            <Route path="/sort-it-out" element={<SortItOut />} />
            <Route path="/legal-quiz" element={<LegalQuiz />} />

            {/* Legal Awareness Games Finish */}

            {/* Legal Awareness Notes Page */}
            <Route path="/law/notes" element={<LegalAwarenessNotes />} />
            <Route path="/law/notes/module-1" element={<Module1 />} />
            <Route path="/law/notes/module-2" element={<Module2 />} />
            <Route path="/law/notes/module-3" element={<Module3 />} />
            <Route path="/law/notes/module-4" element={<Module4 />} />
            <Route path="/law/notes/module-5" element={<Module5 />} />
            <Route path="/law/notes/module-6" element={<Module6 />} />
            {/* Legal Awareness Notes Finish */}

            {/* Communication Games */}
            <Route path="/communications/games" element={<Communication />} />
            {/* Level -1*/}
            <Route path="/listen-up" element={<ListenUp />} />
            <Route
              path="/say-it-like-you-mean-it"
              element={<SayItLikeUMeanIt />}
            />
            <Route
              path="/pick-your-persuasion"
              element={<PickYourPersuasion />}
            />

            {/* Level 2 */}
            <Route path="/interrupt-game" element={<InterruptGame />} />
            <Route
              path="/feel-it-find-it-game"
              element={<FeelItFindItGame />}
            />
            <Route path="/nvc-game" element={<NVCGame />} />

            {/* Level - 3*/}
            <Route path="/tone-fixer" element={<ToneFixer />} />
            <Route
              path="/speak-up-without-blowing-up"
              element={<SpeakUpGame />}
            />
            <Route path="/compliment-quest" element={<ComplimentQuest />} />

            {/*Level 4*/}
            <Route path="/window-seat-war" element={<WindowSeatWar />} />
            <Route path="/pitch-it-like-a-pro" element={<PitchItLikePro />} />
            <Route path="/cool-the-conflict" element={<CoolTheConflict />} />

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

            {/* Social Learning Games for 6th-8th */}
            <Route path="/social-learning/games" element={<SocialLearning />} />
            {/* Level 1 */}
            <Route path="/mood-mirror" element={<MoodMirror />} />
            <Route path="/friendship-fixer" element={<FriendshipFixer />} />
            <Route path="/kindness-clicks" element={<KindnessClicks />} />
            {/* Level 2 */}
            <Route path="/stress-buster-lab" element={<StressBusterLab />} />
            <Route path="/conflict-quest" element={<ConflictQuest />} />
            <Route path="/mind-body-match-up" element={<MindBodyMatchUp />} />
            <Route path="/influence-explorer" element={<InfluenceExplorer />} />

            {/* Social Learning Notes */}
            <Route
              path="/social-learning/notes"
              element={<SocialLearningNotes />}
            />
            <Route
              path="/social-learning/module-1"
              element={<KnowingMyself />}
            />
            <Route
              path="/social-learning/module-2"
              element={<BuildPositiveRel />}
            />
            <Route
              path="/social-learning/module-3"
              element={<HandlingStress />}
            />
            <Route
              path="/social-learning/module-4"
              element={<SelfDiscipline />}
            />
            <Route
              path="/social-learning/module-5"
              element={<DecisionMaking />}
            />

            {/*  Leadership Notes*/}
            <Route path="/leadership/notes" element={<LeadershipNotes />} />
            {/*  Leadership Games 6-8*/}
            <Route path="/leadership/games" element={<Leadership />} />
            {/*  level 1*/}
            <Route path="/leader-type" element={<LeaderTypeMatch />} />
            <Route path="/vision-builder" element={<VisionBuilderGame />} />

            {/*  level 2*/}
            <Route path="/communication-lab" element={<CommunicationLab />} />
            <Route path="/empathy-radar" element={<EmpathyRadarGame />} />

            {/*  level 3*/}
            <Route path="/decision-room" element={<DecisionRoom />} />
            <Route path="/team-architect" element={<TeamArchitect />} />

            {/*  level 4*/}
            <Route path="/innovation-sprint" element={<InnovationSprint />} />
            <Route path="/integrity-quest" element={<IntegrityQuest />} />

            {/* Finish  Leadership Games 6-8*/}

            {/*  Entrepreneurship Notes*/}
            <Route
              path="/entreprenerurship/notes"
              element={<EntrepreneurshipNotes />}
            />
            {/* Entrepreneurship Games for 6th-8th */}
            <Route
              path="/entreprenerurship/games"
              element={<Entrepreneurship />}
            />
            {/* Level 1 */}
            <Route
              path="/innovation-explorer"
              element={<InnovationExplorer />}
            />
            <Route path="/ai-startup-builder" element={<AIStartupBuilder />} />
            {/*Level 2 */}
            <Route path="/ethics-and-impact" element={<EthicsAndImpact />} />
            <Route path="/pitch-champion" element={<PitchChampion />} />
            {/*Level 3 */}
            <Route
              path="/user-persona-detective"
              element={<UserPersonaDetective />}
            />
            <Route path="/mvp-test" element={<MVPTest />} />

            {/*  Environmental Notes*/}
            <Route
              path="/environmental/notes"
              element={<EnvironmentalNotes />}
            />
            {/* Environmental Games for 6th-8th */}
            <Route path="/environmental/games" element={<Environment />} />
            {/* Level 1 */}
            <Route path="/classify-it" element={<ClassifyIt />} />
            <Route path="/pick-zone" element={<PickZone />} />
            <Route path="/chain-reaction" element={<ChainReaction />} />
            {/* Level 2 */}
            <Route path="/green-budget" element={<GreenBudget />} />
            <Route path="/match-fallout" element={<MatchFallOut />} />
            <Route path="/climate-pledge" element={<ClimatePledge />} />
            {/* Level 3 */}
            <Route path="/cause-scanner" element={<CauseScanner />} />
            <Route path="/melt-down-tracker" element={<MeltDownTracker />} />
            <Route path="/dilemma-cards" element={<DilemmaCards />} />

            {/* Computer Notes*/}
            <Route path="/computer/notes" element={<ComputerNotes />} />
            <Route path="/computer/notes/module-1" element={<WhatIsAi />} />
            <Route path="/computer/notes/module-2" element={<WorkOfAi />} />
            <Route
              path="/computer/notes/module-3"
              element={<TypesAndUseOfAi />}
            />
            <Route path="/computer/notes/module-4" element={<WhatCantAiDo />} />
            <Route path="/computer/notes/module-5" element={<ImpAIWords />} />
            <Route path="/computer/notes/module-6" element={<BuildAi />} />
            <Route path="/computer/notes/module-7" element={<TestUrSkills />} />
            <Route
              path="/computer/notes/module-8"
              element={<ImportanceOfAi />}
            />

            {/* Games of Computers */}
            <Route path="/computer/games" element={<Computer />} />
            {/* Level 1 games of Computers */}
            <Route path="/AI-challenge" element={<AIChallengeGame />} />
            <Route path="/meet-ai-types" element={<MeetAITypeGame />} />
            <Route path="/build-a-bot" element={<BuildABotChallenge />} />
            {/* Level 2 games of Computers */}
            <Route path="/train-the-brain" element={<TrainTheBrainGame />} />
            <Route path="/smart-or-not" element={<SmartOrNotGame />} />
            <Route
              path="/ai-problem-solver"
              element={<AIProblemSolverGame />}
            />

            {/* Level 3 games of Computers */}
            <Route
              path="/ai-ethics-detective"
              element={<AIEthicsDetective />}
            />
            <Route
              path="/future-ai-architect"
              element={<FutureAIArchitect />}
            />
            <Route
              path="/ai-career-explorer"
              element={<AICareerExplorerGame />}
            />

            {/* Games of AI Class 9-10 */}
            {/* Level 1 */}

            <Route path="/smart-city-game" element={<SmartCityGame />} />
            <Route path="/spy-the-smart-tech" element={<SpyTheSmartTech />} />
            <Route path="/which-ai-does-what" element={<WhichAIDoesWhat />} />

            {/* Level 2 */}

            {/* Level 3 */}
            <Route path="/design-a-bot" element={<DesignAbot />} />
            <Route path="/justice-for-all" element={<JusticeForAll />} />

            {/* Finish Games of AI Class 9-10 */}

            {/* Games of Dig Mkting Class 9-10 */}
            {/* Level 1 */}

            <Route path="/brand-voice-result" element={<BrandVoiceResult />} />
            <Route path="/brand-voice" element={<BrandVoiceGame />} />
            <Route path="/carousel-campaign" element={<CarouselCampaign />} />
            <Route
              path="/digital-explorer-result"
              element={<DigitalExplorerResult />}
            />
            <Route path="/digital-explorer" element={<DigitalExplorer />} />

            {/* Level 2 */}

            {/* Level 3 */}
            {/* Finish Games of Dig Mkting Class 9-10 */}

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
