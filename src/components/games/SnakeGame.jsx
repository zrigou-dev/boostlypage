"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];
const INITIAL_DIRECTION = { x: 0, y: -1 }; // Moving UP initially
const SPEED = 120; // ms per tick

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  // Use a ref to store the latest direction to prevent quick double-turn self-collisions
  const directionRef = useRef(INITIAL_DIRECTION);

  const generateFood = useCallback((currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // eslint-disable-next-line no-loop-func
      const isOnSnake = currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y);
      if (!isOnSnake) break;
    }
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    setFood(generateFood(INITIAL_SNAKE));
  };

  const checkCollision = (head, currentSnake) => {
    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    // Self collision
    for (let i = 1; i < currentSnake.length; i++) {
        if (head.x === currentSnake[i].x && head.y === currentSnake[i].y) {
            return true;
        }
    }
    return false;
  };

  useEffect(() => {
    if (gameOver || isPaused) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const currentDir = directionRef.current;
        const newHead = { x: head.x + currentDir.x, y: head.y + currentDir.y };

        if (checkCollision(newHead, prevSnake)) {
          setGameOver(true);
          setHighScore((prev) => Math.max(prev, score));
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop(); // Remove tail if no food eaten
        }

        return newSnake;
      });
    };

    const gameLoop = setInterval(moveSnake, SPEED);
    return () => clearInterval(gameLoop);
  }, [food, gameOver, isPaused, score, generateFood]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent default scrolling for arrow keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      const { x, y } = directionRef.current;

      if (e.key === "ArrowUp" && y !== 1) setDirection({ x: 0, y: -1 });
      if (e.key === "ArrowDown" && y !== -1) setDirection({ x: 0, y: 1 });
      if (e.key === "ArrowLeft" && x !== 1) setDirection({ x: -1, y: 0 });
      if (e.key === "ArrowRight" && x !== -1) setDirection({ x: 1, y: 0 });

      if (e.key === " " || e.key === "Enter") {
          if (gameOver) resetGame();
          else setIsPaused((p) => !p);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver]);

  // Update ref when state changes
  useEffect(() => {
      directionRef.current = direction;
  }, [direction]);

  return (
    <div className="bg-[#112240] p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800 flex flex-col items-center w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-gray-100 mb-6 font-mono text-center tracking-wider">
        SNAKE RUN
      </h2>

      <div className="flex justify-between w-full mb-4 px-2">
        <div className="text-gray-400 font-mono text-lg">
          SCORE: <span className="text-green-400 font-bold">{score}</span>
        </div>
        <div className="text-gray-400 font-mono text-lg">
          BEST: <span className="text-yellow-400 font-bold">{highScore}</span>
        </div>
      </div>

      <div className="relative bg-[#0a192f] border-4 border-gray-700 rounded-lg overflow-hidden shadow-inner">
        {/* Game Grid */}
        <div
          className="grid gap-[1px] bg-gray-800/30"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
            width: "min(300px, 80vw)",
            height: "min(300px, 80vw)",
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);

            const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
            const isHead = snake[0].x === x && snake[0].y === y;
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={i}
                className={`w-full h-full ${
                  isHead
                    ? "bg-green-400 rounded-sm"
                    : isSnake
                    ? "bg-green-500/80 rounded-sm"
                    : isFood
                    ? "bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                    : "bg-transparent"
                }`}
              />
            );
          })}
        </div>

        {/* Overlays */}
        {(gameOver || isPaused) && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center">
            {gameOver ? (
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center">
                <h3 className="text-3xl font-bold text-red-500 mb-2">GAME OVER</h3>
                <button
                  onClick={resetGame}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded shadow-lg transition"
                >
                  PLAY AGAIN
                </button>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                <button
                  onClick={resetGame}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-[#0a192f] font-bold rounded shadow-lg transition"
                >
                  START GAME
                </button>
                <p className="mt-4 text-gray-300 text-sm">Use Arrow Keys to move.</p>
              </motion.div>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 text-center text-gray-500 text-xs">
        Press <span className="text-gray-300 font-mono border border-gray-700 px-1 rounded">SPACE</span> to pause/unpause
      </div>
    </div>
  );
}
