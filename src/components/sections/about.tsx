"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  easeInOut,
  easeOut,
} from "framer-motion";
import { ArrowRight, Award, Users, Home, Palette } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      // Animate counters with smooth easing
      const targets = { years: 18, projects: 250, clients: 180, awards: 25 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.entries(targets).forEach(([key, target]) => {
        let current = 0;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }, stepDuration);
      });
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const stats = [
    {
      key: "years",
      value: counters.years,
      label: "Years of Experience",
      icon: Award,
      color: "#8B7355",
    },
    {
      key: "projects",
      value: counters.projects,
      label: "Completed Projects",
      icon: Home,
      color: "#A8956C",
    },
    {
      key: "clients",
      value: counters.clients,
      label: "Happy Clients",
      icon: Users,
      color: "#E8A87C",
    },
    {
      key: "awards",
      value: counters.awards,
      label: "Design Awards",
      icon: Palette,
      color: "#D4C4B0",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-br from-[#F5F2ED] via-[#F8F5F0] to-[#F2EFE8] relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          viewport={{ once: true }}
          className="absolute top-1/4 right-10 w-96 h-96 rounded-full border border-[#8B7355]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          viewport={{ once: true }}
          className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full border border-[#A8956C]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Company Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-[#8B7355]/10 text-[#8B7355] px-4 py-2 rounded-full text-sm font-medium"
            >
              <div className="w-2 h-2 bg-[#8B7355] rounded-full animate-pulse"></div>
              <span className="tracking-wider uppercase">
                Established for 18 Years
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2C2C] leading-tight mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Delivering unmatched{" "}
                <span className="text-[#8B7355]">quality</span>,{" "}
                <span className="italic font-normal">effortlessly</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#2C2C2C]/80 text-lg leading-relaxed max-w-xl"
            >
              We are dedicated to providing outstanding architectural and design
              services that meet the functional and aesthetic needs of our
              clients. Our team combines creativity with technical expertise to
              transform spaces into inspiring environments.
            </motion.p>

            {/* Learn More Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="group inline-flex items-center space-x-3 text-[#2C2C2C] font-medium text-lg border-b-2 border-[#8B7355] pb-1 hover:border-[#2C2C2C] transition-all duration-300"
              >
                <span>Learn More</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center lg:text-left group cursor-pointer"
                >
                  <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2">
                    <motion.div
                      className="p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                      style={{ backgroundColor: `${stat.color}15` }}
                      whileHover={{ rotate: 5 }}
                    >
                      <stat.icon size={20} style={{ color: stat.color }} />
                    </motion.div>
                    <span
                      className="text-3xl md:text-4xl font-light text-[#2C2C2C]"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {stat.value}+
                    </span>
                  </div>
                  <p className="text-sm text-[#2C2C2C]/70 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Images */}
          <motion.div variants={containerVariants} className="relative">
            {/* Large Image */}
            <motion.div
              variants={imageVariants}
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#D4C4B0]">
                <img
                  src="https://images.pexels.com/photos/6492395/pexels-photo-6492395.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                  alt="Modern Interior Design by Shreen Designs"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 to-transparent"
                />
              </div>
            </motion.div>

          

            

            {/* Background Accent */}
            <motion.div
              initial={{ opacity: 0, rotate: -3, scale: 1.05 }}
              whileInView={{ opacity: 0.1, rotate: -3, scale: 1.05 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/5 to-[#D4C4B0]/10 rounded-3xl -z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
