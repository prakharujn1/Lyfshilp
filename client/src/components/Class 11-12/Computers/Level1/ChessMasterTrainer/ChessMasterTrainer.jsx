import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronRight, Crown, Shield, Sword, Castle, Zap, Brain, Target, Trophy, Play, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { useComputers } from "@/contexts/ComputersContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance
const ChessMasterTrainer = () => {
  // Piece types for simplified 6x6 chess
  const PIECES = {
    KING: 'K', QUEEN: 'Q', ROOK: 'R', KNIGHT: 'N', BISHOP: 'B', PAWN: 'P'
  };

  const PIECE_VALUES = {
    [PIECES.KING]: 1000, [PIECES.QUEEN]: 9, [PIECES.ROOK]: 5,
    [PIECES.KNIGHT]: 3, [PIECES.BISHOP]: 3, [PIECES.PAWN]: 1
  };

  const PIECE_ICONS = {
    [PIECES.KING]: Crown, [PIECES.QUEEN]: Shield, [PIECES.ROOK]: Castle,
    [PIECES.KNIGHT]: Sword, [PIECES.BISHOP]: Zap, [PIECES.PAWN]: Target
  };

  // Initial game scenarios
  const SCENARIOS = [
    {
      name: "Opening Game",
      description: "Develop your pieces - move the pawn forward",
      board: [
        ['r', 'n', 'b', 'q', 'k', 'b'],
        ['p', 'p', 'p', 'p', 'p', 'p'],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        ['P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B']
      ],
      optimalMove: { from: [4, 4], to: [3, 4] }
    },
    {
      name: "Mid-Game Tactics",
      description: "Checkmate in one move! Queen captures King",
      board: [
        [null, null, 'k', null, null, null],
        [null, 'p', null, 'p', null, null],
        ['p', null, null, null, 'p', null],
        [null, null, 'Q', null, null, null],
        ['P', null, null, null, 'P', null],
        [null, null, 'K', null, null, null]
      ],
      optimalMove: { from: [3, 2], to: [0, 2] }
    },
    {
      name: "Endgame Precision",
      description: "Rook checkmate - trap the enemy king",
      board: [
        [null, null, null, null, 'k', null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, 'R', null, null],
        [null, null, null, null, 'K', null]
      ],
      optimalMove: { from: [4, 3], to: [0, 3] }
    }
  ];

  const { completeComputersChallenge } = useComputers();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [board, setBoard] = useState(SCENARIOS[0].board);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [gameState, setGameState] = useState('playing'); // 'playing', 'analyzing', 'complete'
  const [minimaxTree, setMinimaxTree] = useState(null);
  const [showAlphaBeta, setShowAlphaBeta] = useState(false);
  const [playerMove, setPlayerMove] = useState(null);
  const [score, setScore] = useState(0);
  const [completedScenarios, setCompletedScenarios] = useState([]);

  //for performance
  const { updatePerformance } = usePerformance();
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    if (completedScenarios.length === SCENARIOS.length) {
      completeComputersChallenge(0, 3);
    }
  }, [completedScenarios]);

  useEffect(() => {
    if (completedScenarios.length === SCENARIOS.length) {
      const endTime = Date.now();
      const studyTimeMinutes = Math.round((endTime - startTime) / 60000);
      const avgResponseTimeSec = (endTime - startTime) / 1000;

      updatePerformance({
        moduleName: "Computers",
        topicName: "exploringSmartStrategiesInAI",
        score,
        accuracy: (score / 300) * 100,
        avgResponseTimeSec,
        studyTimeMinutes,
        completed: true,

      });
      setStartTime(Date.now());
    }
  }, [completedScenarios]);


  // Minimax tree node structure
  const createTreeNode = (position, depth, isMaximizing, alpha = -Infinity, beta = Infinity, move = null) => {
    return {
      position,
      depth,
      isMaximizing,
      alpha,
      beta,
      move,
      children: [],
      value: null,
      pruned: false,
      expanded: false
    };
  };

  // Evaluate board position
  const evaluatePosition = (board) => {
    let score = 0;
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 6; col++) {
        const piece = board[row][col];
        if (piece) {
          const value = PIECE_VALUES[piece.toUpperCase()];
          score += piece === piece.toUpperCase() ? value : -value;
        }
      }
    }
    return score;
  };

  // Generate possible moves for a piece
  const generateMoves = (board, isWhite) => {
    const moves = [];

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 6; col++) {
        const piece = board[row][col];
        if (!piece) continue;

        const isWhitePiece = piece === piece.toUpperCase();
        if (isWhitePiece !== isWhite) continue;

        // Get all valid moves for this piece
        const validMoves = getValidMoves(board, row, col, piece.toUpperCase());
        moves.push(...validMoves);
      }
    }

    return moves.slice(0, 6); // Limit moves for performance but allow more variety
  };

  // Get valid moves for a piece (more realistic chess rules)
  const getValidMoves = (board, row, col, pieceType) => {
    const moves = [];
    const isWhite = board[row][col] === board[row][col].toUpperCase();

    // Basic movement patterns
    const directions = {
      [PIECES.PAWN]: isWhite ? [[-1, 0]] : [[1, 0]], // Pawns move forward
      [PIECES.ROOK]: [[0, 1], [0, -1], [1, 0], [-1, 0]],
      [PIECES.KNIGHT]: [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]],
      [PIECES.BISHOP]: [[1, 1], [1, -1], [-1, 1], [-1, -1]],
      [PIECES.QUEEN]: [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]],
      [PIECES.KING]: [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
    };

    const dirs = directions[pieceType] || [];

    for (const [dx, dy] of dirs) {
      let newRow = row + dx;
      let newCol = col + dy;

      // For sliding pieces (Queen, Rook, Bishop), continue in direction until blocked
      const isSliding = [PIECES.QUEEN, PIECES.ROOK, PIECES.BISHOP].includes(pieceType);

      do {
        if (newRow < 0 || newRow >= 6 || newCol < 0 || newCol >= 6) break;

        const targetPiece = board[newRow][newCol];

        if (targetPiece) {
          // Can capture if it's opponent's piece
          const targetIsWhite = targetPiece === targetPiece.toUpperCase();
          if (targetIsWhite !== isWhite) {
            moves.push({ from: [row, col], to: [newRow, newCol] });
          }
          break; // Can't continue past any piece
        } else {
          // Empty square - can move here
          moves.push({ from: [row, col], to: [newRow, newCol] });
        }

        if (!isSliding) break; // Non-sliding pieces only move one square

        newRow += dx;
        newCol += dy;
      } while (true);
    }

    return moves;
  };

  // Make a move on the board
  const makeMove = (board, move) => {
    const newBoard = board.map(row => [...row]);
    const [fromRow, fromCol] = move.from;
    const [toRow, toCol] = move.to;

    newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
    newBoard[fromRow][fromCol] = null;

    return newBoard;
  };

  // Minimax algorithm with optional alpha-beta pruning
  const minimax = (board, depth, isMaximizing, alpha = -Infinity, beta = Infinity, useAlphaBeta = false) => {
    if (depth === 0) {
      return { value: evaluatePosition(board), move: null };
    }

    const moves = generateMoves(board, isMaximizing);

    if (moves.length === 0) {
      return { value: evaluatePosition(board), move: null };
    }

    let bestMove = null;

    if (isMaximizing) {
      let maxEval = -Infinity;

      for (const move of moves) {
        const newBoard = makeMove(board, move);
        const eval_result = minimax(newBoard, depth - 1, false, alpha, beta, useAlphaBeta);

        if (eval_result.value > maxEval) {
          maxEval = eval_result.value;
          bestMove = move;
        }

        if (useAlphaBeta) {
          alpha = Math.max(alpha, eval_result.value);
          if (beta <= alpha) break; // Beta cutoff
        }
      }

      return { value: maxEval, move: bestMove };
    } else {
      let minEval = Infinity;

      for (const move of moves) {
        const newBoard = makeMove(board, move);
        const eval_result = minimax(newBoard, depth - 1, true, alpha, beta, useAlphaBeta);

        if (eval_result.value < minEval) {
          minEval = eval_result.value;
          bestMove = move;
        }

        if (useAlphaBeta) {
          beta = Math.min(beta, eval_result.value);
          if (beta <= alpha) break; // Alpha cutoff
        }
      }

      return { value: minEval, move: bestMove };
    }
  };

  // Build minimax tree for visualization
  const buildMinimaxTree = (board, depth, isMaximizing) => {
    const root = createTreeNode(board, depth, isMaximizing);

    if (depth === 0) {
      root.value = evaluatePosition(board);
      return root;
    }

    const moves = generateMoves(board, isMaximizing);

    for (const move of moves.slice(0, 3)) { // Limit for visualization
      const newBoard = makeMove(board, move);
      const childNode = buildMinimaxTree(newBoard, depth - 1, !isMaximizing);
      childNode.move = move;
      root.children.push(childNode);
    }

    // Calculate minimax value
    if (isMaximizing) {
      root.value = Math.max(...root.children.map(child => child.value));
    } else {
      root.value = Math.min(...root.children.map(child => child.value));
    }

    return root;
  };

  // Handle square click
  const handleSquareClick = (row, col) => {
    if (gameState !== 'playing') return;

    if (selectedSquare) {
      const [fromRow, fromCol] = selectedSquare;
      if (row === fromRow && col === fromCol) {
        setSelectedSquare(null);
        return;
      }

      // Check if this is a valid move
      const piece = board[fromRow][fromCol];
      if (!piece) {
        setSelectedSquare(null);
        return;
      }

      const validMoves = getValidMoves(board, fromRow, fromCol, piece.toUpperCase());
      const isValidMove = validMoves.some(move =>
        move.to[0] === row && move.to[1] === col
      );

      if (!isValidMove) {
        setSelectedSquare(null);
        return;
      }

      const move = { from: [fromRow, fromCol], to: [row, col] };
      setPlayerMove(move);
      setSelectedSquare(null);

      // Check if this is the optimal move
      const scenario = SCENARIOS[currentScenario];
      const isOptimal = move.from[0] === scenario.optimalMove.from[0] &&
        move.from[1] === scenario.optimalMove.from[1] &&
        move.to[0] === scenario.optimalMove.to[0] &&
        move.to[1] === scenario.optimalMove.to[1];

      if (isOptimal) {
        setScore(score + 100);
        setCompletedScenarios([...completedScenarios, currentScenario]);

        // Update the board to show the move
        const newBoard = makeMove(board, move);
        setBoard(newBoard);
      }

      setGameState('analyzing');
    } else {
      const piece = board[row][col];
      if (piece && piece === piece.toUpperCase()) {
        setSelectedSquare([row, col]);
      }
    }
  };

  // Analyze position
  const analyzePosition = () => {
    const tree = buildMinimaxTree(board, 3, true);
    setMinimaxTree(tree);
    setGameState('complete');
  };

  // Reset current scenario
  const resetScenario = () => {
    setBoard(SCENARIOS[currentScenario].board);
    setSelectedSquare(null);
    setPlayerMove(null);
    setMinimaxTree(null);
    setGameState('playing');
  };

  // Move to next scenario
  const nextScenario = () => {
    if (currentScenario < SCENARIOS.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setBoard(SCENARIOS[currentScenario + 1].board);
      setSelectedSquare(null);
      setPlayerMove(null);
      setMinimaxTree(null);
      setGameState('playing');
    }
  };

  // Render chess piece
  const renderPiece = (piece) => {
    if (!piece) return null;

    const pieceType = piece.toUpperCase();
    const isWhite = piece === piece.toUpperCase();
    const IconComponent = PIECE_ICONS[pieceType];

    return (
      <IconComponent
        size={20}
        className={`${isWhite ? 'text-blue-600' : 'text-red-600'}`}
      />
    );
  };

  // Render minimax tree node
  const TreeNode = ({ node, depth = 0 }) => {
    const [expanded, setExpanded] = useState(depth < 2);

    if (!node) return null;

    return (
      <div className="ml-4">
        <div className="flex items-center space-x-2 py-1">
          {node.children.length > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-gray-500 hover:text-gray-700"
            >
              {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}

          <div className={`px-2 py-1 rounded text-sm ${node.isMaximizing ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
            }`}>
            {node.isMaximizing ? 'MAX' : 'MIN'}: {node.value}
          </div>

          {node.move && (
            <div className="text-xs text-gray-600">
              {String.fromCharCode(97 + node.move.from[1])}{6 - node.move.from[0]} →
              {String.fromCharCode(97 + node.move.to[1])}{6 - node.move.to[0]}
            </div>
          )}

          {showAlphaBeta && node.pruned && (
            <div className="text-xs text-orange-600 font-semibold">PRUNED</div>
          )}
        </div>

        {expanded && node.children.map((child, index) => (
          <TreeNode key={index} node={child} depth={depth + 1} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (gameState === 'analyzing') {
      setTimeout(analyzePosition, 500);
    }
  }, [gameState]);

  const allScenariosComplete = completedScenarios.length === SCENARIOS.length;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Brain className="text-blue-600" />
          Chess Master AI Trainer
        </h1>
        <p className="text-gray-600 mb-4">Master the Minimax Algorithm with Alpha-Beta Pruning</p>

        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-500" size={20} />
            <span className="font-semibold">Score: {score}</span>
          </div>

          <div className="flex items-center gap-2">
            <Target className="text-green-500" size={20} />
            <span className="font-semibold">
              {completedScenarios.length}/{SCENARIOS.length} Scenarios
            </span>
          </div>
        </div>

        {allScenariosComplete && (
          <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
            <div className="flex items-center">
              <Trophy className="text-green-500 mr-2" />
              <p className="text-green-700 font-semibold">
                Congratulations! You've mastered all scenarios!
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Game Board Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {SCENARIOS[currentScenario].name}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={resetScenario}
                className="flex items-center gap-1 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                <RotateCcw size={16} />
                Reset
              </button>
              {gameState === 'complete' && currentScenario < SCENARIOS.length - 1 && (
                <button
                  onClick={nextScenario}
                  className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          <p className="text-gray-600 mb-4">{SCENARIOS[currentScenario].description}</p>

          {/* Chess Board */}
          <div className="mb-4 w-fit mx-auto">
            {/* Column labels */}
            <div className="grid grid-cols-6  ">
              {['a', 'b', 'c', 'd', 'e', 'f'].map(label => (
                <div key={label} className="text-center text-sm font-semibold ml-4 text-gray-600">
                  {label}
                </div>
              ))}
            </div>

            {/* Board with row labels */}
            <div className="flex">
              <div className="flex flex-col justify-center mr-1 space-y-1">
                {[6, 5, 4, 3, 2, 1].map(num => (
                  <div
                    key={num}
                    className="aspect-square flex items-center justify-center text-sm font-semibold text-gray-600"
                  >
                    {num}
                  </div>
                ))}
              </div>


              <div className="grid grid-cols-6 gap-1">
                {board.map((row, rowIndex) =>
                  row.map((piece, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`
                        aspect-square flex items-center justify-center cursor-pointer
                        ${(rowIndex + colIndex) % 2 === 0 ? 'bg-amber-100' : 'bg-amber-200'}
                        ${selectedSquare && selectedSquare[0] === rowIndex && selectedSquare[1] === colIndex
                          ? 'ring-2 ring-blue-500' : ''}
                        hover:bg-amber-300 transition-colors
                      `}
                      onClick={() => handleSquareClick(rowIndex, colIndex)}
                    >
                      {renderPiece(piece)}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Game Status */}
          <div className="text-center">
            {gameState === 'playing' && (
              <p className="text-gray-600">
                Click a blue piece, then click where you want to move it
              </p>
            )}
            {gameState === 'analyzing' && (
              <p className="text-blue-600 flex items-center justify-center gap-2">
                <Brain className="animate-pulse" size={20} />
                Analyzing position...
              </p>
            )}
            {gameState === 'complete' && (
              <div className="space-y-2">
                {completedScenarios.includes(currentScenario) ? (
                  <p className="text-green-600 font-semibold">✅ Optimal move found!</p>
                ) : (
                  <p className="text-orange-600">Try to find the optimal move</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Minimax Tree Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Minimax Tree</h2>
            <button
              onClick={() => setShowAlphaBeta(!showAlphaBeta)}
              className={`flex items-center gap-1 px-3 py-1 rounded ${showAlphaBeta ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
              {showAlphaBeta ? <EyeOff size={16} /> : <Eye size={16} />}
              Alpha-Beta
            </button>
          </div>

          {minimaxTree ? (
            <div className="space-y-4">
              <div className="text-sm text-gray-600 mb-4">
                <p>🔵 MAX nodes try to maximize the score</p>
                <p>🔴 MIN nodes try to minimize the score</p>
                {showAlphaBeta && (
                  <p className="text-orange-600">🟠 PRUNED branches are eliminated by alpha-beta</p>
                )}
              </div>

              <div className="max-h-96 overflow-y-auto border rounded p-2">
                <TreeNode node={minimaxTree} />
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm font-semibold">Best Move Value: {minimaxTree.value}</p>
                <p className="text-xs text-gray-600">
                  This represents the evaluation after optimal play from both sides
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <Brain size={48} className="mx-auto mb-4 opacity-50" />
              <p>Make a move to see the minimax analysis</p>
            </div>
          )}
        </div>
      </div>

      {/* Algorithm Explanation */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Brain className="text-purple-600" />
          How to Play & Understand the Game
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-green-600 mb-2">🎮 How to Play</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• You control the <span className="text-blue-600 font-semibold">blue pieces</span></li>
              <li>• Your opponent has <span className="text-red-600 font-semibold">red pieces</span></li>
              <li>• Click a blue piece to select it</li>
              <li>• Click an empty square to move there</li>
              <li>• Find the best move in each scenario</li>
              <li>• Complete all 3 scenarios to win!</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-600 mb-2">🏆 Scoring System</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• <span className="font-semibold">100 points</span> for each optimal move</li>
              <li>• <span className="font-semibold">300 points total</span> possible</li>
              <li>• Green checkmark ✅ = correct move</li>
              <li>• Orange text = try again</li>
              <li>• Complete all scenarios to become a Chess Master!</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-purple-600 mb-2">♟️ Chess Pieces</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• <Crown className="inline w-4 h-4 text-blue-600" /> <span className="font-semibold">King</span> - Most important piece</li>
              <li>• <Shield className="inline w-4 h-4 text-blue-600" /> <span className="font-semibold">Queen</span> - Most powerful piece</li>
              <li>• <Castle className="inline w-4 h-4 text-blue-600" /> <span className="font-semibold">Rook</span> - Moves in straight lines</li>
              <li>• <Zap className="inline w-4 h-4 text-blue-600" /> <span className="font-semibold">Bishop</span> - Moves diagonally</li>
              <li>• <Sword className="inline w-4 h-4 text-blue-600" /> <span className="font-semibold">Knight</span> - Moves in L-shape</li>
              <li>• <Target className="inline w-4 h-4 text-blue-600" /> <span className="font-semibold">Pawn</span> - Basic soldier piece</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t pt-6">
          <h4 className="font-semibold text-blue-600 mb-3">🌳 Understanding the Minimax Tree</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-2">What is the Minimax Tree?</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Shows how the AI "thinks" about moves</li>
                <li>• Each branch represents a possible move</li>
                <li>• Numbers show how good each position is</li>
                <li>• Higher numbers = better for blue pieces</li>
                <li>• Lower numbers = better for red pieces</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2">How to Read the Tree</h5>
              <ul className="text-md font-semibold space-y-1 text-gray-700">
                <li>• 🔵 <span className="font-semibold">MAX</span> = Your turn (trying to get higher score)</li>
                <li>• 🔴 <span className="font-semibold">MIN</span> = Opponent's turn (trying to get lower score)</li>
                <li>• Click arrows to expand/collapse branches</li>
                <li>• Move notation: a1→b2 means from square a1 to b2</li>
                <li>• 🟠 <span className="font-semibold">PRUNED</span> = Branches cut off by Alpha-Beta</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-700 mb-2">💡 Pro Tips</h5>
            <ul className="text-sm space-y-1 text-blue-700">
              <li>• Look for moves that give you the highest guaranteed score</li>
              <li>• Remember: your opponent will try to make the best move against you</li>
              <li>• The AI calculates 3 moves ahead for each possibility</li>
              <li>• Alpha-Beta pruning makes the AI much faster by skipping impossible branches</li>
              <li>• Try to understand why certain moves are better than others</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessMasterTrainer;