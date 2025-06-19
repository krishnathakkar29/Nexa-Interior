"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative px-6 md:px-12 py-8 md:py-16  bg-white"
      id="home"
    >
      <div className="max-w-7xl mx-auto">
        {/* Floating Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth animation
          }}
          className="absolute top-1/4 left-8 lg:left-16 z-10"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0 20px 40px rgba(139, 115, 85, 0.15)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              y: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
            animate={{
              y: [0, -8, 0],
            }}
            className="circular-image w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer group"
          >
            <img
              src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
              alt="Modern Chair Design"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/20 to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute top-1/3 right-8 lg:right-16 z-10"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: -2,
              boxShadow: "0 20px 40px rgba(139, 115, 85, 0.15)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              y: {
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              },
            }}
            animate={{
              y: [0, 10, 0],
            }}
            className="circular-image w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer group"
          >
            <img
              src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
              alt="Elegant Furniture Arrangement"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/20 to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute bottom-28 left-[110px] z-10 hidden lg:block"
        >
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: 3,
              boxShadow: "0 25px 50px rgba(139, 115, 85, 0.2)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              y: {
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              },
            }}
            animate={{
              y: [0, -6, 0],
            }}
            className="circular-image w-20 h-20 rounded-full overflow-hidden bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer group"
          >
            <img
              src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
              alt="Luxury Interior Design"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/20 to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Additional floating image for enhanced composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            delay: 1.6,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute bottom-24 right-28 z-10 hidden md:block"
        >
          <motion.div
            whileHover={{
              scale: 1.12,
              rotate: -1,
              boxShadow: "0 15px 30px rgba(139, 115, 85, 0.12)",
            }}
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              y: {
                type: "keyframes",
                duration: 4.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
            className="circular-image w-14 h-14 lg:w-18 lg:h-18 rounded-full overflow-hidden bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer group"
          >
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
              alt="Modern Living Space"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/20 to-transparent rounded-full"
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
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-[#8B7355] leading-none tracking-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Shreen
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="font-montserrat text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-[#8B7355] leading-none tracking-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Designs
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
