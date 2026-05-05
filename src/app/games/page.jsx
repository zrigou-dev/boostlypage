"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MemoryGame from "@/components/games/MemoryGame";
import TicTacToe from "@/components/games/TicTacToe";
import RockPaperScissors from "@/components/games/RockPaperScissors";
import SnakeGame from "@/components/games/SnakeGame";
import ReactionGame from "@/components/games/ReactionGame";

const GAMES = [
  { id: "memory", name: "Memory Match", component: <MemoryGame /> },
  { id: "tictactoe", name: "Tic Tac Toe (AI)", component: <TicTacToe /> },
  { id: "rpc", name: "RPC Battle", component: <RockPaperScissors /> },
  { id: "snake", name: "Snake", component: <SnakeGame /> },
  { id: "reaction", name: "Reaction Test", component: <ReactionGame /> },
];

export default function GamesPage() {
  const [activeGameIndex, setActiveGameIndex] = useState(0);

  return (
    <div className="relative min-h-screen bg-[#0a192f] flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Have <span className="text-yellow-400">Fun!</span>
          </h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Take a break and try out some of these classic mini-games .
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-[#112240] p-2 rounded-xl border border-gray-800 shadow-xl">
          {GAMES.map((game, index) => (
            <button
              key={game.id}
              onClick={() => setActiveGameIndex(index)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 relative ${activeGameIndex === index
                  ? "text-[#0a192f]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-[#1e2f4a]"
                }`}
            >
              {activeGameIndex === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-yellow-400 rounded-lg shadow-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <span className="relative z-10">{game.name}</span>
            </button>
          ))}
        </div>

        {/* Game Container */}
        <div className="w-full max-w-4xl mx-auto flex justify-center perspective-[1000px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGameIndex}
              initial={{ opacity: 0, rotateX: -20, y: 20 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 20, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full flex justify-center"
            >
              {GAMES[activeGameIndex].component}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
