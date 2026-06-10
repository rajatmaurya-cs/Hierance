"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LoginLeft, LoginRight } from "./Login";
import { SignUpLeft, SignUpRight } from "./Signup";

const AuthFlip: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const animation = {
    rotateY: isFlipped ? 180 : 0,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  };

  return (
    <section className="w-full h-screen bg-slate-100 flex gap-5 p-5 perspective overflow-hidden">
      {/* LEFT */}
      <motion.div
        className="w-2/3 h-full relative"
        animate={animation}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 backface-hidden">
          <LoginLeft />
        </div>
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <SignUpLeft />
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="w-1/3 h-full relative"
        animate={animation}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 backface-hidden">
          <LoginRight onSwitch={() => setIsFlipped(true)} />
        </div>
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <SignUpRight onSwitch={() => setIsFlipped(false)} />
        </div>
      </motion.div>
    </section>
  );
};

export default AuthFlip;