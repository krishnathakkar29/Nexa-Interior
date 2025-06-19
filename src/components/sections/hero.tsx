"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative px-6 md:px-12 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Floating Images */}
        <motion.div
          style={{ y: y1 }}
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="absolute top-8 left-4 md:left-8 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-2xl z-10"
        >
          <motion.div
            animate={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="w-full h-full bg-gradient-to-br from-[#E8A87C] to-[#D4956B] flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 md:w-16 md:h-16 bg-[#C8956D] rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          initial={{ scale: 0, rotate: 180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
          className="absolute top-32 md:top-40 right-4 md:right-8 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl z-10"
        >
          <motion.div
            animate={{
              x: mousePosition.x * -0.015,
              y: mousePosition.y * -0.015,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="w-full h-full bg-gradient-to-br from-[#8B7355] to-[#7A6B4F] flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-14 h-14 md:w-18 md:h-18 bg-[#6B5B4F] rounded-full shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-20 md:bottom-32 left-8 md:left-16 w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shadow-2xl z-10"
        >
          <motion.div
            animate={{
              x: mousePosition.x * 0.01,
              y: mousePosition.y * 0.01,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="w-full h-full bg-gradient-to-br from-[#A8956C] to-[#98856C] flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-8 h-8 md:w-12 md:h-12 bg-[#88756C] rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-20 text-center pt-8 md:pt-16">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm md:text-base text-[#8B7355] font-medium tracking-wider uppercase mb-8"
          >
            Established for Excellence
          </motion.p>

          {/* Main Headlines */}
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-none tracking-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Spaces
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-none tracking-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Reimagined
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed font-light">
              At Shreen Designs we believe great design is about more than just
              looks — it's about creating spaces that inspire, comfort, and
              reflect who you are.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="bg-white hover:bg-[#F8F5F0] text-[#2C2C2C] px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-medium group transition-all duration-300 shadow-xl hover:shadow-2xl border border-[#E5E2DD]">
                Let's Create Together
                <motion.div
                  whileHover={{ x: 5, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="ml-3"
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform duration-300" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-[#8B7355] opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-[#8B7355] opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
