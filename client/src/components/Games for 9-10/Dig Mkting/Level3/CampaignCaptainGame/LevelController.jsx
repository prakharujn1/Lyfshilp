import React, { useEffect, useState } from "react";
import AdCreationGame from "./Stage1/AdCreationStage";
import TargetingStage from "./Stage2/TargetingStage";
import DashboardGame from "./Stage3/DashboardStage";
import FinalSummary from "./FinalSummary";
import { useDM } from "@/contexts/DMContext";

const LevelController = () => {
    const { completeDMChallenge } = useDM();
    const [stage, setStage] = useState(1);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (stage === 4) {
            completeDMChallenge(2,0);
        }
    }, [stage]);

    const nextStage = () => setStage((prev) => prev + 1);

    const addScore = (points) => setScore((prev) => prev + points);
    const restartGame = () => {
        setStage(1);
        setScore(0);
    };

    return (
        <div>
            {stage === 1 && (
                <AdCreationGame onNext={nextStage} addScore={addScore} />
            )}
            {stage === 2 && (
                <TargetingStage onNext={nextStage} addScore={addScore} onRestart={restartGame} />
            )}
            {stage === 3 && (
                <DashboardGame onNext={nextStage} addScore={addScore} onRestart={restartGame} />
            )}
            {stage === 4 && <FinalSummary score={score} onRestart={restartGame} />}
        </div>
    );
};

export default LevelController;
