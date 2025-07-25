import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  useDroppable,
  useDraggable, // <--- Import useDraggable
} from "@dnd-kit/core";
// Removed useSortable and SortableContext as we are no longer doing internal sorting
// import { useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useNavigate } from "react-router-dom";

// Mocking context providers (assuming these are external to the component)
const useEnvirnoment = () => ({
  completeEnvirnomentChallenge: (a, b) =>
    console.log("completeEnvirnomentChallenge called"),
});
const usePerformance = () => ({
  updateEnvirnomentPerformance: (data) =>
    console.log("updateEnvirnomentPerformance called", data),
});

const puzzles = [
  {
    cause: "Cutting down forests",
    correctOrder: ["Loss of tree cover", "Soil erosion", "Crop failure and desertification"],
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/StNrs7ALes.png",
  },
  {
    cause: "Dumping industrial waste into rivers",
    correctOrder: ["Water pollution", "Death of aquatic life", "Unsafe drinking water and health hazards"],
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/StNrs7ALes.png",
  },
  {
    cause: "Burning fossil fuels in vehicles and factories",
    correctOrder: ["Air pollution", "Greenhouse gas buildup", "Global warming and climate change"],
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/StNrs7ALes.png",
  },
  {
    cause: "Excessive use of plastic",
    correctOrder: ["Waste accumulation in landfills", "Soil and water contamination", "Harm to animals and marine life"],
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/StNrs7ALes.png",
  },
  {
    cause: "Overgrazing by cattle",
    correctOrder: ["Vegetation loss", "Soil degradation", "Reduced land fertility and productivity"],
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/StNrs7ALes.png",
  },
];

// --- Helper Components ---

// DraggableCard: Represents an actual card that can be dragged from the left column
const DraggableCard = React.memo(({ id, content, isDraggingOverlay }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    // No transition needed for non-sorting, unless you want custom animations
    // Use undefined for DragOverlay to let Dnd-kit handle it
    transition: isDraggingOverlay ? undefined : (isDragging ? 'transform 0.25s ease' : undefined),
    width: "300px",
    height: "8.5vh",
    zIndex: isDragging ? 100 : 'auto',
    opacity: isDraggingOverlay ? 1 : (isDragging ? 0 : 1), // Hide original when dragging
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        flex justify-center items-center shrink-0 basis-auto text-center
        bg-[#d8bfd8] shadow-[2px_4px_10px_0_rgba(167,142,207,0.6)] font-['Comic_Sans_MS'] text-[18px] font-bold leading-[20px] text-[rgba(75,0,130,0.6)] cursor-grab
      `}
    >
      <span className="flex w-auto h-1/4 justify-center items-center p-2 text-wrap break-words">
        {content || id}
      </span>
    </div>
  );
});

// DroppableSequenceSlot: Represents a slot in the sequence that can receive items
// Its *content* can also be dragged (to swap with other slots or move back to available)
const DroppableSequenceSlot = React.memo(({ id, content, text, isDraggingOverlay }) => {
  const { setNodeRef: setDroppableNodeRef } = useDroppable({ id: id });

  // If there's content, the content itself is draggable. The slot serves as its container.
  // The draggable ID is the slot's ID so we know which slot the item came from in handleDragEnd.
  const { attributes, listeners, setNodeRef: setDraggableNodeRef, transform, isDragging } =
    useDraggable({ id: id, disabled: !content }); // Only enable draggable if there's content

  // Combine refs so the div acts as both a droppable target and a draggable source for its content
  const combinedRef = useCallback((node) => {
    setDroppableNodeRef(node); // Always set droppable ref for the slot
    if (content) { // Only set draggable ref if there's content to drag
      setDraggableNodeRef(node);
    }
  }, [setDroppableNodeRef, setDraggableNodeRef, content]); // Dependency on content to re-evaluate ref when content changes

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDraggingOverlay ? undefined : (isDragging ? 'transform 0.25s ease' : undefined), // No transition for non-overlay if not dragging
    width: "300px",
    height: "8.5vh",
    zIndex: isDragging ? 100 : 'auto',
    opacity: isDraggingOverlay ? 1 : (isDragging ? 0 : 1), // Hide original when dragging
  };

  const borderClass = content ? '' : 'border-dashed border-[2.5px] border-[#79caef]';
  const slotBackgroundColorClass = content ? 'bg-[#d8bfd8]' : 'bg-[#e6f7ff]';

  return (
    <div
      ref={combinedRef} // Use the combined ref
      style={style}
      {...(content ? attributes : {})} // Only apply draggable attributes/listeners if content is present
      {...(content ? listeners : {})}
      className={`
        flex justify-center items-center shrink-0 basis-auto text-center
        ${slotBackgroundColorClass}
        font-['Commissioner'] text-[26px] font-medium leading-[20px] text-[#79caef] tracking-[1.82px]
        w-[300px] h-[8.5vh] relative ${borderClass}
        ${content ? 'shadow-[2px_4px_10px_0_rgba(167,142,207,0.6)]' : ''}
        ${content ? 'cursor-grab' : ''} {/* Add grab cursor if content is present */}
      `}
    >
      {content ? (
        <span className="flex w-auto h-1/4 justify-center items-center p-2 text-wrap break-words text-[rgba(75,0,130,0.6)] font-['Comic_Sans_MS'] text-[18px] font-bold">
          {content}
        </span>
      ) : (
        <span className="flex w-auto h-auto justify-center items-center p-4">
          {text}
        </span>
      )}
    </div>
  );
});

// EmptyPlaceholderCardLeft: Visual placeholder for empty slots on the left
const EmptyPlaceholderCardLeft = React.memo(({ id }) => { // Added id prop
  const { setNodeRef } = useDroppable({ id: id }); // Use the provided id
  return (
    <div
      ref={setNodeRef}
      className="flex w-[300px] h-[8.5vh] pt-[18px] pr-[40px] pb-[18px] pl-[40px] gap-[10px] justify-center items-center flex-nowrap bg-[rgba(216,191,216,0.2)] border-dashed border-[2.5px] border-[rgba(75,0,130,0.4)] relative"
    />
  );
});

// StaticReviewCard: A non-draggable card for displaying answers in review mode
const StaticReviewCard = React.memo(({ content, type }) => {
  const bgColorClass = type === 'user' ? 'bg-[#d8bfd8]' : 'bg-[#e0ffe0]'; // User answers vs Correct answers
  const textColorClass = type === 'user' ? 'text-[rgba(75,0,130,0.6)]' : 'text-[rgba(9,190,67,0.8)]';
  const shadowClass = 'shadow-[2px_4px_10px_0_rgba(167,142,207,0.6)]';

  return (
    <div
      className={`
        flex justify-center items-center shrink-0 basis-auto text-center
        ${bgColorClass} ${shadowClass} font-['Comic_Sans_MS'] text-[18px] font-bold leading-[20px]
        w-[300px] h-[8.5vh] relative
      `}
    >
      <span className={`flex w-auto h-1/4 justify-center items-center p-2 text-wrap break-words ${textColorClass}`}>
        {content || "Empty Slot"}
      </span>
    </div>
  );
});

// ReviewItemCard for small/medium screens - ADJUSTED FOR TEXT OVERFLOW
const ReviewItemCard = React.memo(({ puzzle, userAnswer }) => {
  const isCorrect = userAnswer.every(
    (item, index) =>
      item && item.trim().toLowerCase() ===
      puzzle.correctOrder[index].trim().toLowerCase()
  );

  return (
    <div
      className={`main-container flex w-full max-w-[280px] sm:max-w-[256px] h-auto p-3 sm:pt-[15px] sm:pr-[20px] sm:pb-[15px] sm:pl-[20px] flex-col gap-[8px] justify-center items-start rounded-[15px] relative ${isCorrect ? "bg-[#c8ff9e]" : "bg-[#ffdfe0]"}`}
    >
      <div className="flex w-full justify-between items-start relative">
        <div className="flex flex-col gap-[6px] sm:gap-[8px] items-start flex-1">
          <span className={`font-['Comic_Neue'] text-base sm:text-lg font-bold leading-tight relative text-left break-words z-[2] ${isCorrect ? "text-[#09be43]" : "text-[#ea2b2b]"}`}>Cause: {puzzle.cause}</span>
          <div className="flex flex-col gap-[1px] sm:gap-[2px] items-start w-full">
            <span className={`font-['Commissioner'] text-xs sm:text-sm font-light leading-tight relative text-left break-words z-[4] ${isCorrect ? "text-[#09be43]" : "text-[#ea2b2b]"}`}>Your Sequence : {userAnswer.filter(Boolean).join(" -> ")}</span>
            <span className={`font-['Commissioner'] text-xs sm:text-sm font-light leading-tight relative text-left break-words z-[5] ${isCorrect ? "text-[#09be43]" : "text-[#ea2b2b]"}`}>Correct Sequence : {puzzle.correctOrder.join(" -> ")}</span>
          </div>
        </div>
        <div className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] shrink-0 bg-contain bg-no-repeat ml-2" style={{ backgroundImage: isCorrect ? "url(/check.png)" : "url(/cancel.png)" }} />
      </div>
    </div>
  );
});


// --- Main Component ---
const TOTAL_TIME_LIMIT = 120; // 2 minutes in seconds
const TOTAL_PUZZLES_SCORE = puzzles.length * 5; // Total possible score

const ChainReaction = () => {
  const { completeEnvirnomentChallenge } = useEnvirnoment();
  const { updateEnvirnomentPerformance } = usePerformance();
  const navigate = useNavigate();

  const [showStart, setShowStart] = useState(true);
  const [current, setCurrent] = useState(0);

  const [availableCards, setAvailableCards] = useState([]);
  const [sequenceSlotsContent, setSequenceSlotsContent] = useState([
    { id: null, slotId: 'slot-0' },
    { id: null, slotId: 'slot-1' },
    { id: null, slotId: 'slot-2' },
  ]);

  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_LIMIT);
  const [startTime, setStartTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [userAnswers, setUserAnswers] = useState([]);

  // Use useRef to hold the active item data for DragOverlay more stably
  const activeDragItemDataRef = useRef(null);
  // activeId state is still needed for useDraggable's dependency and for conditional rendering of existing items
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleSubmit = useCallback(() => {
    const currentSequence = sequenceSlotsContent.map(item => item ? item.id : null);
    setIsTimerRunning(false);
    setUserAnswers(prevAnswers => [...prevAnswers, currentSequence]);

    const isCorrect = currentSequence.every(
      (item, index) =>
        item && item.trim().toLowerCase() ===
        puzzles[current].correctOrder[index].trim().toLowerCase()
    );
    if (isCorrect) setScore((prev) => prev + 5);

    if (current < puzzles.length - 1) {
      const next = current + 1;
      setAvailableCards(shuffle([...puzzles[next].correctOrder]));
      setSequenceSlotsContent([
        { id: null, slotId: 'slot-0' },
        { id: null, slotId: 'slot-1' },
        { id: null, slotId: 'slot-2' },
      ]);
      setCurrent(next);
      setTimeLeft(TOTAL_TIME_LIMIT);
      setIsTimerRunning(true);
    } else {
      const endTime = Date.now();
      const totalTimeSec = Math.floor((endTime - startTime) / 1000);
      const avgResponseTimeSec = totalTimeSec / puzzles.length;

      const scaledScore = Number(((score / TOTAL_PUZZLES_SCORE) * 10).toFixed(2));

      updateEnvirnomentPerformance({
        score: scaledScore,
        accuracy: (score / TOTAL_PUZZLES_SCORE) * 100,
        avgResponseTimeSec,
        studyTimeMinutes: Math.ceil(totalTimeSec / 60),
        completed: true,
      });

      setShowResult(true);
    }
  }, [current, puzzles, score, sequenceSlotsContent, startTime, updateEnvirnomentPerformance]);

  useEffect(() => {
    if (showResult && score >= 20) {
      completeEnvirnomentChallenge(0, 2);
    }
  }, [showResult, score, completeEnvirnomentChallenge]);

  useEffect(() => {
    let timer;
    if (!showStart && !showResult && !showReview && isTimerRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && !showResult && !showReview && isTimerRunning) {
      handleSubmit();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, showStart, showResult, showReview, isTimerRunning, handleSubmit]);

  const startGame = () => {
    setAvailableCards(shuffle([...puzzles[0].correctOrder]));
    setSequenceSlotsContent([
      { id: null, slotId: 'slot-0' },
      { id: null, slotId: 'slot-1' },
      { id: null, slotId: 'slot-2' },
    ]);
    setCurrent(0);
    setScore(0);
    setTimeLeft(TOTAL_TIME_LIMIT);
    setStartTime(Date.now());
    setShowStart(false);
    setShowResult(false);
    setShowReview(false);
    setReviewIndex(0);
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
          slotText: ['1st', '2nd', '3rd'][sequenceSlotsContent.findIndex(s => s.slotId === activeSlot.slotId)],
          id: draggedId
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
      console.log("Dropped outside valid area.");
      return;
    }

    const activeId = active.id; // The ID of the draggable item
    const overId = over.id;     // The ID of the droppable target

    let newAvailableCards = [...availableCards];
    let newSequenceSlotsContent = [...sequenceSlotsContent];

    const isDraggingFromAvailable = newAvailableCards.includes(activeId);
    const activeSequenceSlotIndex = newSequenceSlotsContent.findIndex(slot => slot.slotId === activeId);
    const isDraggingFromSequence = activeSequenceSlotIndex !== -1;

    const overSequenceSlotIndex = newSequenceSlotsContent.findIndex(slot => slot.slotId === overId);
    const isOverSequenceSlot = overSequenceSlotIndex !== -1;
    const isOverAvailableCardsArea = overId === 'available-cards-area' || String(overId).startsWith('available-cards-placeholder');

    let draggedContent = null;
    if (isDraggingFromAvailable) {
        draggedContent = activeId;
    } else if (isDraggingFromSequence) {
        draggedContent = newSequenceSlotsContent[activeSequenceSlotIndex].id;
        if (!draggedContent) return; // Should not happen if disabled: !content works
    } else {
        return; // Item dragged is neither from available nor a filled sequence slot
    }

    // Attempt to drop into a sequence slot
    if (isOverSequenceSlot) {
        const targetSlot = newSequenceSlotsContent[overSequenceSlotIndex];
        const cardCurrentlyInTargetSlot = targetSlot.id;

        // Update the target slot with the dragged content
        newSequenceSlotsContent[overSequenceSlotIndex] = {
            ...targetSlot,
            id: draggedContent,
        };

        // Handle the source of the drag
        if (isDraggingFromAvailable) {
            // Remove from available cards
            newAvailableCards = newAvailableCards.filter(id => id !== draggedContent);
            // If target slot had content, move it back to available cards
            if (cardCurrentlyInTargetSlot) {
                newAvailableCards.push(cardCurrentlyInTargetSlot);
            }
        } else if (isDraggingFromSequence) {
            // Clear the source slot
            newSequenceSlotsContent[activeSequenceSlotIndex] = {
                ...newSequenceSlotsContent[activeSequenceSlotIndex],
                id: cardCurrentlyInTargetSlot, // Place the content from the target slot here
            };
        }
    }
    // Attempt to drop into the available cards area (left column)
    else if (isOverAvailableCardsArea) {
        if (isDraggingFromSequence) {
            // Remove from sequence slot
            newSequenceSlotsContent[activeSequenceSlotIndex] = {
                ...newSequenceSlotsContent[activeSequenceSlotIndex],
                id: null,
            };
            // Add to available cards (if not already there - should not be for drag from sequence)
            if (!newAvailableCards.includes(draggedContent)) {
                newAvailableCards.push(draggedContent);
            }
        }
        // If dragging from available to available area, no state change is needed
        // as we are not reordering within the available area.
    }

    setAvailableCards(newAvailableCards);
    setSequenceSlotsContent(newSequenceSlotsContent);
  };


  const handleBackToLevels = () => navigate(-1);

  const handleReviewGame = () => {
    setShowResult(false);
    setShowReview(true);
    setReviewIndex(0);
  };

  const handleNextReviewItem = () => {
    if (reviewIndex < puzzles.length - 1) {
      setReviewIndex(prevIndex => prevIndex + 1);
    } else {
      setShowReview(false);
      setShowResult(true);
      setReviewIndex(0);
    }
  };

  const isSubmitEnabled = sequenceSlotsContent.every(item => item && item.id !== null);
  const progress = ((TOTAL_TIME_LIMIT - timeLeft) / TOTAL_TIME_LIMIT) * 100;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  const currentReviewPuzzle = puzzles[reviewIndex];
  const currentUserReviewAnswer = userAnswers[reviewIndex] || [];

  const renderDragOverlayContent = useCallback(() => {
    const currentDragItem = activeDragItemDataRef.current;
    if (!currentDragItem || !currentDragItem.id) {
      return null;
    }

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
          id={currentDragItem.id} // The ID of the slot being dragged
          content={currentDragItem.content} // The content of the slot
          text={currentDragItem.slotText} // The placeholder text
          isDraggingOverlay={true}
        />
      );
    }
    return null;
  }, []);

  const { setNodeRef: setAvailableCardsAreaRef } = useDroppable({ id: 'available-cards-area' });


  return (
    <div className="h-[90vh] flex flex-col justify-evenly items-center bg-white relative overflow-hidden">
      {showStart ? (
        // START SCREEN
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-4xl font-bold mb-2 mt-8" style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}>Chain Reaction</h1>
          <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>Match each cause with its chain of effects in correct order.</p>
          <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mb-6">
            <p className="mb-2" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>You’ll be given a series of **environmental causes**. Your job is to arrange the **effects** in their correct sequence:</p>
            <ul className="mb-2 text-left list-disc list-inside" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>
              <li>Understand the cause provided.</li>
              <li>Drag and drop the effect cards into the correct 1st, 2nd, and 3rd sequence slots.</li>
            </ul>
            <p style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>🎯 **Scoring**: +5 points per correct sequence</p>
            <p className="mb-2" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>🕐 **Time Limit**: 2 minutes per puzzle</p>
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
        // REVIEW ANSWERS SCREEN
        <div className="min-h-[90vh] w-screen flex flex-col items-center justify-center bg-green-100 py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-6xl bg-white rounded-3xl shadow flex flex-col items-center p-6 sm:p-8 lg:p-10 relative">
            {/* Close button for review screen */}
            <button onClick={() => { setShowReview(false); setShowResult(true); }} className="flex justify-center items-center absolute top-4 right-4 z-[139] w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-full hover:bg-gray-200 transition">
              <span className="font-['Comfortaa'] text-[36px] sm:text-[40px] font-light text-[#6f6f6f] rotate-[-45deg] font-semibold select-none">+</span>
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 text-center w-full" style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}>Check your answers</h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-500 text-center w-full" style={{ fontFamily: "'Commissioner', 'Arial', sans-serif'" }}>Match each cause with its chain of effects in correct order.</p>

            {/* Responsive review layout */}
            <div className="hidden lg:flex flex-col md:flex-row gap-8 w-full items-start justify-center">
              {/* Left Column: Your Answer */}
              <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
                <div className="flex flex-col gap-[15px] mb-4 w-full items-center">
                  {currentUserReviewAnswer.map((answer, index) => (
                    <StaticReviewCard
                      key={`user-ans-${reviewIndex}-${index}`}
                      content={answer}
                      type="user"
                    />
                  ))}
                </div>
                <span className="font-['Commissioner'] text-[2.5vh] font-semibold leading-tight text-[rgba(75,75,75,0.91)] relative text-center mt-4">
                  Your Answer
                </span>
              </div>

              {/* Middle Column: Cause Image and Text (similar to game screen) */}
              <div className="flex flex-col items-center w-full md:w-auto lg:w-1/3 my-4 md:my-0">
                <img
                  src={currentReviewPuzzle.image}
                  alt="Cause Image"
                  className="flex w-[20vh] h-[20vh] sm:w-[25vh] sm:h-[25vh] shrink-0 object-contain relative z-[12]"
                />
                <div className="flex flex-col w-[25vw] h-[10vh] shrink-0 relative z-[13] justify-evenly items-center">
                  <span className="flex justify-center items-center font-['Baloo_2'] text-[3.5vh] font-semibold leading-[1.2] text-[rgba(75,75,75,0.6)] relative text-center whitespace-nowrap z-[15] ">
                    CAUSE
                  </span>
                  <span className="flex w-full justify-center self-start font-['Baloo_2'] text-[3vh] font-semibold leading-tight text-[rgba(75,75,75,0.91)] relative text-center break-words ">
                    {currentReviewPuzzle.cause}
                  </span>
                </div>
              </div>

              {/* Right Column: Correct Answer */}
              <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
                <div className="flex flex-col gap-[15px] mb-4 w-full items-center">
                  {currentReviewPuzzle.correctOrder.map((correctAnswer, index) => (
                    <StaticReviewCard
                      key={`correct-ans-${reviewIndex}-${index}`}
                      content={correctAnswer}
                      type="correct"
                    />
                  ))}
                </div>
                <span className="font-['Commissioner'] text-[2.5vh] font-semibold leading-tight text-[rgba(75,75,75,0.91)] relative text-center mt-4">
                  Correct Answer
                </span>
              </div>
            </div>

            {/* Small/Medium screen review layout */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full justify-items-center">
              {puzzles.map((puzzleItem, idx) => (
                <ReviewItemCard
                  key={`review-card-${idx}`}
                  puzzle={puzzleItem}
                  userAnswer={userAnswers[idx] || []}
                />
              ))}
            </div>


            {/* Navigation Button for Review (only for large screens when not in responsive grid) */}
            <div className="hidden lg:flex w-full justify-center items-center flex-nowrap relative mt-[3vh]">
              <button
                onClick={handleNextReviewItem}
                className={`w-[250px] h-[6vh] shrink-0 rounded-[10px] relative z-[1] flex justify-center items-center
                  bg-[#09be43] shadow-[0_2px_10px_0_rgba(9,190,67,0.9)] hover:bg-green-700`}
              >
                <span className="font-['Comic_Sans_MS'] text-[18px] font-bold leading-[20px] text-[#fff] text-center whitespace-nowrap z-[2]">
                  {reviewIndex === puzzles.length - 1 ? "Finish Review" : "Next Answer"}
                </span>
              </button>
            </div>
             {/* Navigation Button for Review (only for small/medium screens to go back) */}
             <div className="lg:hidden flex w-full justify-center items-center flex-nowrap relative mt-[3vh]">
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
        // MAIN GAME SCREEN
        <>
          <div className="flex flex-col gap-[0.5vh] justify-center items-center relative z-[29] mt-[1vh]">
            <span className="font-['Comic_Neue'] text-[4.5vh] font-bold leading-[1.2] text-[rgba(75,75,75,0.8)] text-center whitespace-nowrap">
              Chain Reaction
            </span>
            <span className="font-['Commissioner'] text-[2vh] font-light leading-[1.2] text-[rgba(75,75,75,0.8)] text-center whitespace-nowrap">
              Drag and Drop the effects of the cause in correct sequence
            </span>
          </div>
          <div className="flex w-[70vw] gap-[2vw] justify-start items-center relative z-[23] mt-[-0.5vh]">
            <div className="flex w-[59vw] h-[2.5vh] flex-col justify-start items-start shrink-0 flex-nowrap bg-[#d9d9d9] rounded-[4px] relative z-[24]">
              <div
                className="h-[2.5vh] shrink-0 bg-[rgba(9,190,67,0.8)] rounded-[4px] relative z-[25]"
                style={{ width: `${Math.max(0, progress)}%` }}
              />
            </div>
            <div className="flex gap-[0.5vw] flex-row items-center">
              <div
                className="w-[35px] h-[31px] shrink-0 bg-cover bg-no-repeat relative z-[27]"
                style={{ backgroundImage: 'url("https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/kFwo3bjqx3.png")' }}
              />
              <span className="font-['Comic_Sans_MS'] text-[2.5vh] font-bold leading-[20px] text-[rgba(75,75,75,0.8)] relative text-center whitespace-nowrap z-[28]">
                {formattedTime}
              </span>
            </div>
          </div>
          <div className="flex w-[80vw] justify-evenly items-stretch flex-nowrap relative z-[3] mt-[2vh] ">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {/* Left Column: Available Cards - Now a simple Droppable area */}
              <div className="flex w-[24vw] h-[35vh] ml-[1vw] flex-col gap-[2.5vh] shrink-0 flex-nowrap relative z-[4]">
                <div
                  ref={setAvailableCardsAreaRef} // Make the entire div a droppable target
                  id="available-cards-area"
                  className="flex flex-col w-[23.5vw] h-[35vh] items-stretch justify-between"
                >
                  {availableCards.map((item) => (
                    <DraggableCard
                      key={item}
                      id={item}
                      content={item}
                      isDraggingOverlay={activeId === item}
                    />
                  ))}
                  {/* Render empty placeholders to ensure drop targets always exist */}
                  {Array.from({ length: 3 - availableCards.length }).map((_, index) => (
                    <EmptyPlaceholderCardLeft key={`empty-left-${index}`} id={`available-cards-placeholder-${index}`} />
                  ))}
                </div>
              </div>

              {/* Middle Column: Cause Image and Text */}
              <div className="flex flex-col w-[22vw] h-[35vh] gap-[2vh] justify-center items-center shrink-0 flex-nowrap relative z-[11]">
                <img
                  src={puzzles[current].image}
                  alt="Cause Image"
                  className="flex w-[25vh] h-[25vh] shrink-0 object-contain relative z-[12]"
                />
                <div className="flex flex-col w-[25vw] h-[10vh] shrink-0 relative z-[13] justify-evenly items-center">
                  <span className="flex justify-center items-center font-['Baloo_2'] text-[3.5vh] font-semibold leading-[1.2] text-[rgba(75,75,75,0.6)] relative text-center whitespace-nowrap z-[15] ">
                    CAUSE
                  </span>
                  <span className="flex w-full justify-center self-start font-['Baloo_2'] text-[3vh] font-semibold leading-tight text-[rgba(75,75,75,0.91)] relative text-center break-words ">
                    {puzzles[current].cause}
                  </span>
                </div>
              </div>

              {/* Right Column: Sequence Slots (Now all droppable, content draggable) */}
              <div className="flex justify-between w-[23.5vw] h-[35vh] flex-col gap-[2.5vh] shrink-0 flex-nowrap relative z-[16]">
                {sequenceSlotsContent.map((itemInSlot, index) => (
                  <DroppableSequenceSlot
                    key={itemInSlot.slotId}
                    id={itemInSlot.slotId} // This is the droppable ID for the slot itself
                    content={itemInSlot.id} // This is the actual draggable content (if any)
                    text={['1st', '2nd', '3rd'][index]}
                    isDraggingOverlay={activeId === itemInSlot.slotId}
                  />
                ))}
              </div>

              {/* DragOverlay */}
              <DragOverlay>
                {renderDragOverlayContent()} {/* Call the new function here */}
              </DragOverlay>

            </DndContext>
          </div>
          {/* Submit Button */}
          <div className="flex w-full justify-center items-center flex-nowrap relative mt-[3vh]">
            <button
              onClick={handleSubmit}
              disabled={!isSubmitEnabled}
              className={`w-[250px] h-[8vh] ml-[2vw] shrink-0 rounded-[10px] relative z-[1] flex justify-center items-center
                ${isSubmitEnabled
                  ? "bg-[#09be43] shadow-[0_2px_10px_0_rgba(9,190,67,0.9)] hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              <span className="font-['Comic_Sans_MS'] text-[18px] font-bold leading-[20px] text-[#fff] text-center whitespace-nowrap z-[2]">
                Submit
              </span>
            </button>
          </div>
        </>
      ) : (
        // RESULT SCREEN
        <div className="flex flex-col items-center justify-center min-h-[90vh]">
          <h1 className="text-4xl font-bold mb-2 mt-16 text-center" style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive'" }}>Chain Reaction</h1>
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

export default ChainReaction;