"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Game States: 
// 0: Idle (Click to start)
// 1: Waiting for green (Red screen)
// 2: Click! (Green screen)
// 3: Result (Shows time)
// 4: Too Early (Failed)

export default function ReactionGame() {
  const [gameState, setGameState] = useState(0); 
  const [reactionTime, setReactionTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  const startWaiting = () => {
    setGameState(1); // Red
    const randomDelay = Math.floor(Math.random() * 3000) + 1500; // 1.5s to 4.5s
    
    timerRef.current = setTimeout(() => {
      setGameState(2); // Green
      startTimeRef.current = Date.now();
    }, randomDelay);
  };

  const handleInteraction = () => {
    if (gameState === 0 || gameState === 3 || gameState === 4) {
      // Start game
      setReactionTime(null);
      startWaiting();
    } else if (gameState === 1) {
      // Clicked too early
      clearTimeout(timerRef.current);
      setGameState(4);
    } else if (gameState === 2) {
      // Valid reaction click!
      const endTime = Date.now();
      const timeTaken = endTime - startTimeRef.current;
      setReactionTime(timeTaken);
      
      if (!bestTime || timeTaken < bestTime) {
        setBestTime(timeTaken);
      }
      setGameState(3);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const getBackgroundColor = () => {
    switch(gameState) {
      case 1: return "bg-red-500 hover:bg-red-600";
      case 2: return "bg-green-500 hover:bg-green-600 cursor-pointer";
      case 3: return "bg-blue-600 hover:bg-blue-700 cursor-pointer";
      case 4: return "bg-orange-600 hover:bg-orange-700 cursor-pointer";
      default: return "bg-[#0a192f] hover:bg-[#112240] cursor-pointer border border-blue-500";
    }
  };

  const getContent = () => {
    switch(gameState) {
      case 1:
        return (
          <div className="flex flex-col items-center">
            <span className="text-6xl mb-4">🔴</span>
            <span className="text-2xl font-bold tracking-widest text-white">WAIT FOR GREEN...</span>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center">
             <span className="text-6xl mb-4">🟢</span>
             <span className="text-4xl font-extrabold tracking-widest text-white">CLICK NOW!</span>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center">
             <div className="text-white text-lg font-medium mb-2">Reaction Time:</div>
             <div className="text-5xl font-mono font-bold text-yellow-300 mb-6">{reactionTime} ms</div>
             <div className="text-white/80 text-sm tracking-widest uppercase font-semibold">Click to try again</div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center text-white">
             <span className="text-6xl mb-4">⚠️</span>
             <h3 className="text-2xl font-bold mb-2">Too Early!</h3>
             <p className="text-white/80">You clicked before it turned green.</p>
             <div className="mt-6 text-sm tracking-widest uppercase font-semibold">Click to try again</div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center text-center px-4">
             <span className="text-6xl mb-6">⏱️</span>
             <h3 className="text-3xl font-bold text-gray-100 mb-4 font-mono">REACTION TEST</h3>
             <p className="text-gray-400 mb-8 max-w-xs">When the red box turns green, click as quickly as you can!</p>
             <div className="px-8 py-3 bg-yellow-400 text-[#0a192f] font-bold rounded shadow-lg">START TEST</div>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#112240] p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800 flex flex-col items-center w-full max-w-lg mx-auto">
      
      {/* Best Score Header */}
      <div className="flex justify-between items-center w-full mb-6">
        <h2 className="text-xl font-bold text-gray-300 font-mono tracking-widest">
           SPEED TEST
        </h2>
        <div className="text-sm font-sans font-medium text-gray-400 bg-[#0a192f] px-3 py-1.5 rounded-full border border-gray-700">
           BEST: <span className="text-yellow-400 font-bold ml-1">{bestTime ? `${bestTime} ms` : "---"}</span>
        </div>
      </div>

      {/* Interactive Arena */}
      <motion.div
        whileTap={gameState === 2 ? { scale: 0.95 } : {}}
        onMouseDown={handleInteraction}
        className={`w-full h-80 sm:h-96 rounded-2xl flex items-center justify-center transition-colors duration-200 select-none shadow-inner ${getBackgroundColor()}`}
      >
        <AnimatePresence mode="wait">
           <motion.div
             key={gameState}
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 1.1 }}
             transition={{ duration: 0.15 }}
           >
             {getContent()}
           </motion.div>
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
