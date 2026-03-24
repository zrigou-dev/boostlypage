"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const CHOICES = [
  { id: "rock", name: "Rock", icon: <FaHandRock className="text-4xl" /> },
  { id: "paper", name: "Paper", icon: <FaHandPaper className="text-4xl" /> },
  { id: "scissors", name: "Scissors", icon: <FaHandScissors className="text-4xl" /> },
];

const WIN_MAP = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [isPlaying, setIsPlaying] = useState(false);

  const playGame = (choiceId) => {
    if (isPlaying) return;

    setIsPlaying(true);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);

    // Simulate thinking delay
    setTimeout(() => {
      const pcChoice = CHOICES.find((c) => c.id === choiceId);
      const cpChoiceIndex = Math.floor(Math.random() * CHOICES.length);
      const cpChoice = CHOICES[cpChoiceIndex];

      setPlayerChoice(pcChoice);
      setComputerChoice(cpChoice);

      if (pcChoice.id === cpChoice.id) {
        setResult("draw");
      } else if (WIN_MAP[pcChoice.id] === cpChoice.id) {
        setResult("win");
        setScore((prev) => ({ ...prev, player: prev.player + 1 }));
      } else {
        setResult("lose");
        setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      }
      setIsPlaying(false);
    }, 800);
  };

  const getResultColor = () => {
    if (result === "win") return "text-green-400";
    if (result === "lose") return "text-red-400";
    return "text-yellow-400";
  };

  return (
    <div className="bg-[#112240] p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800 flex flex-col items-center w-full max-w-sm mx-auto">
      <h2 className="text-3xl font-bold text-gray-100 mb-6 font-mono text-center">
        RPC BATTLE
      </h2>

      {/* Scoreboard */}
      <div className="flex justify-between w-full mb-8 bg-[#0a192f] p-4 rounded-xl border border-gray-800">
        <div className="text-center">
          <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Player</div>
          <div className="text-3xl font-bold text-blue-400">{score.player}</div>
        </div>
        <div className="text-center flex items-center justify-center font-bold text-gray-500 text-xl px-4">
          VS
        </div>
        <div className="text-center">
          <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Computer</div>
          <div className="text-3xl font-bold text-red-400">{score.computer}</div>
        </div>
      </div>

      {/* Arena */}
      <div className="flex justify-between items-center w-full h-32 mb-8 relative">
        {/* Player Side */}
        <div className="w-24 h-24 flex items-center justify-center bg-[#0a192f] rounded-full border-2 border-blue-500/30">
          <AnimatePresence mode="wait">
            {playerChoice ? (
              <motion.div
                key={playerChoice.id}
                initial={{ opacity: 0, x: -50, rotate: -45 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-blue-400"
              >
                {playerChoice.icon}
              </motion.div>
            ) : isPlaying ? (
              <motion.div
                animate={{ rotate: [0, -20, 0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="text-gray-500 opacity-50"
              >
                <FaHandRock className="text-4xl" />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Result Text */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 text-center pointer-events-none">
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`text-2xl font-bold ${getResultColor()} uppercase tracking-widest bg-[#112240] px-2`}
              >
                {result}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Computer Side */}
        <div className="w-24 h-24 flex items-center justify-center bg-[#0a192f] rounded-full border-2 border-red-500/30">
          <AnimatePresence mode="wait">
            {computerChoice ? (
              <motion.div
                key={computerChoice.id}
                initial={{ opacity: 0, x: 50, rotate: 45 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-red-400 -scale-x-100 transform" // Flip horizontal for facing player
                style={{ transform: "scaleX(-1)" }}
              >
                {computerChoice.icon}
              </motion.div>
            ) : isPlaying ? (
              <motion.div
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }}
                className="text-gray-500 opacity-50 -scale-x-100 transform"
                style={{ transform: "scaleX(-1)" }}
              >
                <FaHandRock className="text-4xl" />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full">
        <p className="text-center text-gray-400 text-sm mb-4 font-medium uppercase tracking-wider">
          Choose your weapon
        </p>
        <div className="flex justify-center gap-4">
          {CHOICES.map((choice) => (
            <motion.button
              key={choice.id}
              onClick={() => playGame(choice.id)}
              disabled={isPlaying}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-gray-300 transition-colors shadow-lg ${
                isPlaying ? "bg-gray-800 cursor-not-allowed opacity-50" : "bg-[#1e2f4a] hover:bg-blue-600 hover:text-white"
              }`}
            >
              {choice.icon}
            </motion.button>
          ))}
        </div>
      </div>

      {score.player > 0 || score.computer > 0 ? (
        <button
          onClick={() => setScore({ player: 0, computer: 0 })}
          className="mt-8 text-xs text-gray-500 hover:text-gray-300 underline transition"
        >
          Reset Scores
        </button>
      ) : null}
    </div>
  );
}
