"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Round1 = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="round-1" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Assignment</span>
              <span className="text-yellow-400"> Submission</span>
            </h2>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Submit your solutions to the problem statements for Round 1. Ensure you follow the guidelines and deadlines.
            </p>
          </motion.div>

          {/* Round 1 Problem Statement */}
          <motion.div variants={fadeInUp}>
            <div className="max-w-2xl mx-auto">
              <motion.div
                variants={fadeInUp}
                whileHover={{ 
                  y: -4, 
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 border border-yellow-400/30 rounded-lg p-8 backdrop-blur-sm"
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-3 leading-tight">
                    Round 1 : Assignment
                  </h4>

                  <p className="text-gray-400 text-sm mb-4">Online Qualification Challenge</p>
                  
                  <p className="text-yellow-400 text-sm mb-6 font-medium">
                    Will be revealed on 1st September 2025
                  </p>
                  
                  {/* Disabled Round 1 Submission Button */}
                  <motion.button
                    disabled
                    className="bg-gray-600 text-gray-400 font-semibold px-6 py-3 rounded-lg cursor-not-allowed opacity-50"
                  >
                    Round 1 Submission (Coming Soon)
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Round1;
