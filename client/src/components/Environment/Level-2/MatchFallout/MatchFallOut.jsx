import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useNavigate } from "react-router-dom";
import { useEnvirnoment } from "@/contexts/EnvirnomentContext";
import { usePerformance } from "@/contexts/PerformanceContext";

const matchFalloutData = [
  { id: "1", text: "Dumping industrial waste", match: "Aquatic animal death" },
  { id: "2", text: "Plastic usage", match: "Wildlife choking" },
  { id: "3", text: "Over-mining", match: "Soil infertility" },
  { id: "4", text: "Cutting forests", match: "Loss of biodiversity" },
  { id: "5", text: "Excessive pesticide use", match: "Water poisoning and food chain damage" },
];

const DraggableCard = React.memo(({ id, content, isDraggingOverlay }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDraggingOverlay ? undefined : (isDragging ? 'transform 0.25s ease' : undefined),
    width: "[30vw]",
    minWidth: "[30vw]",
    height: "8vh",
    minHeight: "8vh",
    zIndex: isDragging ? 100 : 'auto',
    opacity: isDraggingOverlay ? 1 : (isDragging ? 0 : 1),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        flex justify-center items-center shrink-0 basis-auto text-center
        bg-[#d8bfd8] shadow-[2px_4px_10px_0_rgba(167,142,207,0.6)] font-['Comic_Sans_MS'] text-sm md:text-base font-bold leading-tight text-[rgba(75,0,130,0.6)] cursor-grab
      `}
    >
      <span className="flex w-auto h-auto justify-center items-center p-1 text-wrap break-words">
        {content || id}
      </span>
    </div>
  );
});

const DroppableSequenceSlot = React.memo(({ id, content, text, isDraggingOverlay }) => {
  const { setNodeRef: setDroppableNodeRef } = useDroppable({ id: id });

  const { attributes, listeners, setNodeRef: setDraggableNodeRef, transform, isDragging } =
    useDraggable({ id: id, disabled: !content });

  const combinedRef = useCallback((node) => {
    setDroppableNodeRef(node);
    if (content) {
      setDraggableNodeRef(node);
    }
  }, [setDroppableNodeRef, setDraggableNodeRef, content]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDraggingOverlay ? undefined : (isDragging ? 'transform 0.25s ease' : undefined),
    width: "[30vw]",
    minWidth: "[30vw]",
    height: "8vh",
    minHeight: "8vh",
    zIndex: isDragging ? 100 : 'auto',
    opacity: isDraggingOverlay ? 1 : (isDragging ? 0 : 1),
  };

  const borderClass = content ? '' : 'border-dashed border-[2.5px] border-[rgba(167,142,207,0.6)]';
  const slotBackgroundColorClass = content ? 'bg-[#d8bfd8]' : 'bg-[rgba(216,191,216,0.2)]';

  return (
    <div
      ref={combinedRef}
      style={style}
      {...(content ? attributes : {})}
      {...(content ? listeners : {})}
      className={`
        flex justify-center items-center shrink-0 basis-auto text-center
        ${slotBackgroundColorClass}
        font-['Commissioner'] text-xs sm:text-sm md:text-base font-medium leading-tight text-[#79caef] tracking-[1.82px]
        w-full relative ${borderClass}
        ${content ? 'shadow-[2px_4px_10px_0_rgba(167,142,207,0.6)]' : ''}
        ${content ? 'cursor-grab' : ''}
      `}
    >
      {content ? (
        <span className="flex w-auto h-auto justify-center items-center p-1 text-wrap break-words text-[rgba(75,0,130,0.6)] font-['Comic_Sans_MS'] text-sm md:text-base font-bold">
          {content}
        </span>
      ) : (
        <span className="flex w-auto h-auto justify-center items-center p-1 text-[rgba(121,202,239,0.9)] text-xs sm:text-sm md:text-base">
          {text}
        </span>
      )}
    </div>
  );
});

const EmptyPlaceholderCardLeft = React.memo(({ id }) => {
  const { setNodeRef } = useDroppable({ id: id });
  return (
    <div
      ref={setNodeRef}
      className="flex w-full min-w-[150px] h-[8vh] min-h-[60px] p-1 gap-[10px] justify-center items-center flex-nowrap bg-[rgba(216,191,216,0.2)] border-dashed border-[2.5px] border-[rgba(75,0,130,0.4)] relative"
    />
  );
});

const StaticReviewCard = React.memo(({ content, type }) => {
  const bgColorClass = type === 'user' ? 'bg-[#d8bfd8]' : 'bg-[#e0ffe0]';
  const textColorClass = type === 'user' ? 'text-[rgba(75,0,130,0.6)]' : 'text-[rgba(9,190,67,0.8)]';
  const shadowClass = 'shadow-[2px_4px_10px_0_rgba(167,142,207,0.6)]';

  return (
    <div
      className={`
        flex justify-center items-center shrink-0 basis-auto text-center
        ${bgColorClass} ${shadowClass} font-['Comic_Sans_MS'] text-sm md:text-base font-bold leading-tight
        w-full min-w-[150px] h-[8vh] min-h-[60px] relative
      `}
    >
      <span className={`flex w-auto h-auto justify-center items-center p-1 text-wrap break-words ${textColorClass}`}>
        {content || "Empty Slot"}
      </span>
    </div>
  );
});

const ReviewItemCard = React.memo(({ cause, userAnswer, correctAnswer }) => {
  const isCorrect = userAnswer[0] && userAnswer[0].trim().toLowerCase() ===
    cause.trim().toLowerCase();

  return (
    <div
      className={`main-container flex w-full max-w-[280px] sm:max-w-[256px] h-auto p-2 sm:pt-3 sm:pr-4 sm:pb-3 sm:pl-4 flex-col gap-[6px] justify-center items-start rounded-[15px] relative ${isCorrect ? "bg-[#c8ff9e]" : "bg-[#ffdfe0]"}`}
    >
      <div className="flex w-full justify-between items-start relative">
        <div className="flex flex-col gap-[4px] sm:gap-[6px] items-start flex-1">
          <span className={`font-['Comic_Neue'] text-sm sm:text-base font-bold leading-tight relative text-left break-words z-[2] ${isCorrect ? "text-[#09be43]" : "text-[#ea2b2b]"}`}>Fallout: {correctAnswer}</span>
          <div className="flex flex-col gap-[1px] sm:gap-[2px] items-start w-full">
            <span className={`font-['Commissioner'] text-xs sm:text-sm font-light leading-tight relative text-left break-words z-[4] ${isCorrect ? "text-[#09be43]" : "text-[#ea2b2b]"}`}>Your Action : {userAnswer[0] || "N/A"}</span>
            <span className={`font-['Commissioner'] text-xs sm:text-sm font-light leading-tight relative text-left break-words z-[5] ${isCorrect ? "text-[#09be43]" : "text-[#ea2b2b]"}`}>Correct Action : {cause}</span>
          </div>
        </div>
        <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] shrink-0 bg-contain bg-no-repeat ml-1" style={{ backgroundImage: isCorrect ? "url(/check.png)" : "url(/cancel.png)" }} />
      </div>
    </div>
  );
});

const TOTAL_TIME_LIMIT = 120;
const TOTAL_PUZZLES_SCORE = matchFalloutData.length * 2;

const MatchFallout = () => {
  const { completeEnvirnomentChallenge } = useEnvirnoment();
  const { updatePerformance } = usePerformance();
  const navigate = useNavigate();

  const [showStart, setShowStart] = useState(true);
  const [availableCards, setAvailableCards] = useState([]);
  const [sequenceSlotsContent, setSequenceSlotsContent] = useState(
    matchFalloutData.map((item, index) => ({ id: null, slotId: `slot-${index}`, text: item.match }))
  );

  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_LIMIT);
  const [startTime, setStartTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [userAnswers, setUserAnswers] = useState([]);

  const activeDragItemDataRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleSubmit = useCallback(() => {
    setIsTimerRunning(false);

    let newScore = 0;
    const answersForReview = [];

    sequenceSlotsContent.forEach((item) => {
      const correctMatch = matchFalloutData.find(d => d.match === item.text);
      const isCorrect = correctMatch && correctMatch.text === item.id;
      if (isCorrect) {
        newScore += 2;
      }
      answersForReview.push({
        cause: correctMatch ? correctMatch.text : "N/A",
        userAnswer: [item.id],
        correctAnswer: item.text,
      });
    });

    setScore(newScore);

    const endTime = Date.now();
    const totalTimeSec = Math.floor((endTime - startTime) / 1000);
    const avgResponseTimeSec = totalTimeSec / matchFalloutData.length;

    const scaledScore = Number(((newScore / TOTAL_PUZZLES_SCORE) * 10).toFixed(2));

    updatePerformance({
      moduleName: "Environment",
      topicName: "ecoDecisionMaker",
      score: scaledScore,
      accuracy: (newScore / TOTAL_PUZZLES_SCORE) * 100,
      avgResponseTimeSec,
      studyTimeMinutes: Math.ceil(totalTimeSec / 60),
      completed: true,
    });

    setUserAnswers(answersForReview);
    setShowResult(true);

  }, [sequenceSlotsContent, startTime, updatePerformance]);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showResult && score >= 8) {
      completeEnvirnomentChallenge(1, 1);
    }
  }, [showResult, score]);

  useEffect(() => {
    let timer;
    if (!showStart && !showResult && !showReview && isTimerRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && !showResult && !showReview && isTimerRunning) {
      handleSubmit();
    if (view === "result") {
      const endTime = Date.now();
      const totalTimeSec = Math.floor((endTime - startTime) / 1000);
      const avgResponseTimeSec = totalTimeSec / 5;
      const scaledScore = Number(((score / 10) * 10).toFixed(2));

      updatePerformance({
        moduleName: "Environment",
        topicName: "ecoDecisionMaker",
        score: scaledScore,
        accuracy: (score / 10) * 100,
        avgResponseTimeSec,
        studyTimeMinutes: Math.ceil(totalTimeSec / 60),
        completed: score >= 8, // Mark complete only if good score
       
      });
      setStartTime(Date.now());
    }
    return () => clearTimeout(timer);
  }, [timeLeft, showStart, showResult, showReview, isTimerRunning, handleSubmit]);

  const startGame = () => {
    const shuffledCauses = shuffle(matchFalloutData.map(item => item.text));
    const shuffledMatches = shuffle(matchFalloutData.map(item => item.match));

    setAvailableCards(shuffledCauses);
    setSequenceSlotsContent(shuffledMatches.map((match, index) => ({ id: null, slotId: `slot-${index}`, text: match })));
    setScore(0);
    setTimeLeft(TOTAL_TIME_LIMIT);
    setStartTime(Date.now());
    setShowStart(false);
    setShowResult(false);
    setShowReview(false);
    setUserAnswers([]);
    setIsTimerRunning(true);
  };

  const handleDragStart = (event) => {
    const draggedId = event.active.id;
    setActiveId(draggedId);

    const activeItemContent = availableCards.find(card => card === draggedId);
    if (activeItemContent) {
      activeDragItemDataRef.current = { type: 'card', content: activeItemContent, id: draggedId };
    } else {
      const activeSlot = sequenceSlotsContent.find(slot => slot.slotId === draggedId);
      if (activeSlot && activeSlot.id) {
        activeDragItemDataRef.current = {
          type: 'slot',
          content: activeSlot.id,
          slotText: activeSlot.text,
          id: activeSlot.slotId,
        };
      } else {
        activeDragItemDataRef.current = null;
        setActiveId(null);
      }
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    setActiveId(null);
    activeDragItemDataRef.current = null;

    if (!over) {
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    let newAvailableCards = [...availableCards];
    let newSequenceSlotsContent = [...sequenceSlotsContent];

    const isDraggingFromAvailable = newAvailableCards.includes(activeId);
    const activeSequenceSlot = newSequenceSlotsContent.find(slot => slot.slotId === activeId);
    const isDraggingFromSequence = activeSequenceSlot !== undefined;

    const overSequenceSlotIndex = newSequenceSlotsContent.findIndex(slot => slot.slotId === overId);
    const isOverSequenceSlot = overSequenceSlotIndex !== -1;
    const isOverAvailableCardsArea = overId === 'available-cards-area' || String(overId).startsWith('available-cards-placeholder');

    let draggedContent = null;
    if (isDraggingFromAvailable) {
      draggedContent = activeId;
    } else if (isDraggingFromSequence) {
      draggedContent = activeSequenceSlot.id;
      if (!draggedContent) return;
    } else {
      return;
    }

    if (isOverSequenceSlot) {
      const targetSlot = newSequenceSlotsContent[overSequenceSlotIndex];
      const cardCurrentlyInTargetSlot = targetSlot.id;

      newSequenceSlotsContent[overSequenceSlotIndex] = {
        ...targetSlot,
        id: draggedContent,
      };

      if (isDraggingFromAvailable) {
        newAvailableCards = newAvailableCards.filter(id => id !== draggedContent);
        if (cardCurrentlyInTargetSlot) {
          newAvailableCards.push(cardCurrentlyInTargetSlot);
        }
      } else if (isDraggingFromSequence) {
        const activeSequenceSlotIndex = newSequenceSlotsContent.findIndex(slot => slot.slotId === activeId);
        if (activeSequenceSlotIndex !== -1) {
          newSequenceSlotsContent[activeSequenceSlotIndex] = {
            ...newSequenceSlotsContent[activeSequenceSlotIndex],
            id: cardCurrentlyInTargetSlot,
          };
        }
      }
    } else if (isOverAvailableCardsArea) {
      if (isDraggingFromSequence) {
        const activeSequenceSlotIndex = newSequenceSlotsContent.findIndex(slot => slot.slotId === activeId);
        if (activeSequenceSlotIndex !== -1) {
          newSequenceSlotsContent[activeSequenceSlotIndex] = {
            ...newSequenceSlotsContent[activeSequenceSlotIndex],
            id: null,
          };
        }
        if (!newAvailableCards.includes(draggedContent)) {
          newAvailableCards.push(draggedContent);
        }
      }
    }

    setAvailableCards(newAvailableCards);
    setSequenceSlotsContent(newSequenceSlotsContent);
  };


  const { setNodeRef: setAvailableCardsAreaRef } = useDroppable({ id: 'available-cards-area' });

  const handleBackToLevels = () => navigate(-1);

  const handleReviewGame = () => {
    setShowResult(false);
    setShowReview(true);
  const handlePlayAgain = () => {
    setUnassigned(shuffle(initialActions));
    setFallouts(shuffle(initialActions.map((a) => a.match)));
    setSlots(Array(initialActions.length).fill(null));
    setScore(null);
    setView("intro");
    setStartTime(Date.now());
  };

  const isSubmitEnabled = sequenceSlotsContent.every(item => item && item.id !== null);

  const progress = ((TOTAL_TIME_LIMIT - timeLeft) / TOTAL_TIME_LIMIT) * 100;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  const renderDragOverlayContent = useCallback(() => {
    const currentDragItem = activeDragItemDataRef.current;
    if (currentDragItem && currentDragItem.id) {
      if (currentDragItem.type === 'card') {
        return (
          <DraggableCard
            id={currentDragItem.id}
            content={currentDragItem.content}
            isDraggingOverlay={true}
          />
        );
      } else if (currentDragItem.type === 'slot') {
        return (
          <DroppableSequenceSlot
            id={currentDragItem.id}
            content={currentDragItem.content}
            text={currentDragItem.slotText}
            isDraggingOverlay={true}
          />
        );
      }
    }
    return null;
  }, [activeId]);


  return (
    <div className="min-h-[89vh] flex flex-col justify-evenly items-center bg-white relative overflow-hidden">
      {showStart ? (
        // START SCREEN
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
          <h1 className="text-4xl font-bold mb-2 mt-8 text-center" style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}>
            Match the Fallout
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>
            Match each cause with its correct effect.
          </p>
          <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mb-6">
            <p className="mb-2" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>
              You’ll be given a series of <b>environmental actions</b>. Your job is to match them with their correct <b>fallout</b>:
            </p>
            <ul className="mb-2 text-left list-disc pl-5" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>
              <li>Understand the human action provided.</li>
              <li>Drag and drop the action card into the correct fallout slot.</li>
            </ul>
            <p style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>
              🎯 <b>Scoring</b>: +2 points per correct match
            </p>
            <p className="mb-2" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>
              🕐 <b>Time Limit</b>: 2 minutes
            </p>
          </div>
          <button
            onClick={startGame}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-xl font-semibold shadow-lg"
            style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}
          >
            Start Game
          </button>
        </div>
      ) : showReview ? (
        // REVIEW ANSSCREEN
        <div className="min-h-screen w-screen flex flex-col items-center bg-green-100 py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-6xl bg-white rounded-3xl shadow flex flex-col items-center p-6 sm:p-8 lg:p-10 relative">
            <button onClick={() => { setShowReview(false); setShowResult(true); }} className="flex justify-center items-center absolute top-4 right-4 z-[139] w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-full hover:bg-gray-200 transition">
              <span className="font-['Comfortaa'] text-[36px] sm:text-[40px]   text-[#6f6f6f] rotate-[-45deg] font-semibold select-none">+</span>
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 text-center w-full" style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}>Check your answers</h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-500 text-center w-full" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>Review your matches below.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full justify-items-center">
              {userAnswers.map((item, idx) => (
                <ReviewItemCard
                  key={`review-card-${idx}`}
                  cause={item.cause}
                  userAnswer={item.userAnswer}
                  correctAnswer={item.correctAnswer}
                />
              ))}
            </div>

            <div className="flex w-full justify-center items-center flex-nowrap relative mt-[3vh]">
              <button
                onClick={() => { setShowReview(false); setShowResult(true); }}
                className={`w-[250px] h-[6vh] shrink-0 rounded-[10px] relative z-[1] flex justify-center items-center
                  bg-[#09be43] shadow-[0_2px_10px_0_rgba(9,190,67,0.9)] hover:bg-green-700`}
              >
                <span className="font-['Comic_Sans_MS'] text-[18px] font-bold leading-[20px] text-[#fff] text-center whitespace-nowrap z-[2]">
                  Back to Results
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : !showResult ? (
        // MAIN GAME
        <div className="flex flex-col gap-4 w-full items-center py-4 px-2 sm:px-4 md:px-8">
          <div className="flex flex-col justify-center items-center w-full ">
            <span className="font-['Comic_Neue'] text-3xl font-bold leading-tight text-[rgba(75,75,75,0.8)] text-center">
              Match the Fallout
            </span>
            <span className="font-['Commissioner'] text-base  font-light leading-tight text-[rgba(75,75,75,0.8)] text-center ">
              Drag and Drop the Human Actions to their correct Fallout
            </span>
          </div>

          <div className="flex w-full max-w-screen-md gap-4 md:gap-6 justify-start items-center">
            <div className="flex-1 h-3 md:h-4 flex-col justify-start items-start bg-[#d9d9d9] rounded-[4px]">
              <div
                className="h-full bg-[rgba(9,190,67,0.8)] rounded-[4px]"
                style={{ width: `${Math.max(0, progress)}%` }}
              />
            </div>
            <div className="flex gap-1 md:gap-2 items-center">
              <div
                className="w-5 h-5 md:w-6 md:h-6 bg-cover bg-no-repeat"
                style={{ backgroundImage: 'url("https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/kFwo3bjqx3.png")' }}
              />
              <span className="font-['Comic_Sans_MS'] text-sm md:text-lg font-bold leading-tight text-[rgba(75,75,75,0.8)]">
                {formattedTime}
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[65vw] gap-4 md:gap-20 p-4 md:p-2 justify-center items-start">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {/* Left Column: Available Cards */}
              <div className="flex flex-col gap-4 flex-1 items-stretch">
                <h3 className="font-['Comic_Sans_MS'] text-base md:text-lg font-bold text-center text-[rgba(75,0,130,0.6)] text-wrap">Human Actions</h3>
                <div
                  ref={setAvailableCardsAreaRef}
                  id="available-cards-area"
                  className="flex flex-col gap-4 items-stretch justify-center"
                >
                  {availableCards.map((item) => (
                    <DraggableCard
                      key={item}
                      id={item}
                      content={item}
                      isDraggingOverlay={activeId === item}
                    />
                  ))}
                  {Array.from({ length: 5 - availableCards.length }).map((_, index) => (
                    <EmptyPlaceholderCardLeft key={`empty-left-${index}`} id={`available-cards-placeholder-${index}`} />
                  ))}
                </div>
              </div>

              {/* Right Column: Sequence Slots */}
              <div className="flex flex-col gap-4 flex-1 items-stretch">
                <h3 className="font-['Comic_Sans_MS'] text-base md:text-lg font-bold text-center text-[#79caef] text-wrap">
                  {isSmallScreen ? "Consequences" : "Environmental Consequences"}
                </h3>
                <div className="flex flex-col gap-4 items-stretch justify-center">
                  {sequenceSlotsContent.map((itemInSlot) => (
                    <DroppableSequenceSlot
                      key={itemInSlot.slotId}
                      id={itemInSlot.slotId}
                      content={itemInSlot.id}
                      text={itemInSlot.text}
                      isDraggingOverlay={activeId === itemInSlot.slotId}
                    />
                  ))}
                </div>
              </div>

              <DragOverlay>
                {renderDragOverlayContent()}
              </DragOverlay>
            </DndContext>
          </div>
          {/* Submit Button */}
          <div className="flex w-full justify-center items-center">
            <button
              onClick={handleSubmit}
              disabled={!isSubmitEnabled}
              className={`w-full max-w-[250px] h-[60px] rounded-[10px] flex justify-center items-center text-lg font-bold text-white transition-all
                ${isSubmitEnabled
                  ? "bg-[#09be43] shadow-[0_2px_10px_0_rgba(9,190,67,0.9)] hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
                }`}
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        // RESULT SCREEN
        <div className="flex flex-col items-center justify-center min-h-[90vh]">
          <h1 className="text-4xl font-bold mb-2 mt-16 text-center" style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}>Match the Fallout</h1>
          <p className="text-lg text-gray-600 mb-6 text-center" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>
            Game Over!
          </p>
          <div className="flex flex-1 flex-col items-center justify-center w-full px-7 pb-7">
            <div className="flex flex-col items-center justify-center mb-6">
              <img
                src="/blogDesign/kidsImage.svg"
                alt="Kids celebrating"
                className="w-48 mx-auto mb-4"
              />
              <div className="text-5xl font-bold text-green-600 mb-2 text-center">
                {score}/{TOTAL_PUZZLES_SCORE}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4 w-full">
              <button
                onClick={startGame}
                className="w-60 h-[60px] rounded-[10px] text-lg font-semibold transition-all bg-[#C9FF9F] border-2 border-[rgba(9,190,67,0.65)] shadow-[0px_2px_0px_0px_rgba(9,190,67,0.65)] text-[#4B4B4B] hover:bg-[#b2f47a]"
                style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}
              >
                Play Again
              </button>
              <button
                onClick={handleBackToLevels}
                className="w-60 h-[60px] rounded-[10px] text-lg font-semibold transition-all bg-[#09BE43] text-white shadow-[0px_2px_5px_0px_rgba(9,190,67,0.90)] hover:bg-green-600"
                style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}
              >
                Continue
              </button>
              <button
                onClick={handleReviewGame}
                className="w-60 h-[60px] rounded-[10px] text-lg font-semibold transition-all bg-[#C9FF9F] border-2 border-[rgba(9,190,67,0.65)] shadow-[0px_2px_0px_0px_rgba(9,190,67,0.65)] text-[#4B4B4B] hover:bg-[#b2f47a]"
                style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}
              >
                Review Answers
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default MatchFallout;