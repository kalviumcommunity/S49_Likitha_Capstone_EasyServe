import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    // Delay the tick animation slightly
    const timer = setTimeout(() => setShowCheck(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen text-white relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Animated checkmark */}
      <motion.div
        className="relative flex items-center justify-center mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: showCheck ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-green-400 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: showCheck ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {showCheck && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
              className="w-14 h-14 text-green-400"
            >
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 27l7 7 17-17"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.svg>
          )}
        </motion.div>
      </motion.div>

      {/* Text animation */}
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Thank You!
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Your service has been successfully booked.
      </motion.p>

      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        Back to Home
      </motion.button>
    </div>
  );
};

export default ThankYouPage;
