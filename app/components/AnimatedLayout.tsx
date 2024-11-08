// app/components/AnimatedLayout.tsx
"use client"; // only needed for client-side components

import { motion } from "framer-motion";
import React from "react";

const AnimatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
