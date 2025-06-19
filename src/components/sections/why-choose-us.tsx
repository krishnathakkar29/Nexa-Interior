"use client";

import { useRef, useState } from "react";
import { easeIn, easeInOut, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  Palette,
  Clock,
  Shield,
  Heart,
  CheckCircle,
} from "lucide-react";

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: easeInOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeIn },
    },
  };

  const features = [
    {
      id: 1,
      icon: Award,
      title: "Premium Craftsmanship",
      description:
        "Exceptional attention to detail with the finest materials and expert execution.",
      color: "#8B7355",
    },
    {
      id: 2,
      icon: Palette,
      title: "Personalized Design Solutions",
      description:
        "Tailored designs that perfectly reflect your unique style and lifestyle needs.",
      color: "#A8956C",
    },
    {
      id: 3,
      icon: Clock,
      title: "Timely Project Delivery",
      description:
        "Efficient project management ensuring on-time completion without compromising quality.",
      color: "#E8A87C",
    },
    {
      id: 4,
      icon: Shield,
      title: "Comprehensive Warranty",
      description:
        "Complete peace of mind with our comprehensive warranty and ongoing support.",
      color: "#D4C4B0",
    },
    {
      id: 5,
      icon: Heart,
      title: "Client Satisfaction Guarantee",
      description:
        "Your happiness is our priority with unlimited revisions until you're completely satisfied.",
      color: "#8B7355",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-[#F8F5F0] via-white to-[#F5F2ED] relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          viewport={{ once: true }}
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full border border-[#8B7355]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          viewport={{ once: true }}
          className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full border border-[#A8956C]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Why Choose Us Badge */}
              <div className="flex items-center space-x-3 text-[#8B7355]">
                <span className="text-sm font-medium tracking-wider uppercase">
                  Why Choose Us?
                </span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Main Headline */}
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2C2C] leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Premium Craftsmanship,
                <br />
                <span className="text-[#8B7355]">Unmatched Comfort</span>
              </h2>

              {/* Subheading */}
              <p className="text-lg text-[#2C2C2C]/70 leading-relaxed max-w-xl">
                We believe your home deserves the best. Here's why thousands
                trust us to transform their spaces into extraordinary
                environments.
              </p>
            </motion.div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  onHoverStart={() => setHoveredFeature(feature.id)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg">
                    {/* Icon */}
                    <motion.div
                      className="flex-shrink-0 p-3 rounded-xl shadow-lg"
                      style={{
                        backgroundColor: `${feature.color}15`,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: `0 10px 25px ${feature.color}25`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <feature.icon
                        size={24}
                        style={{ color: feature.color }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <motion.h3
                        className="text-xl font-medium text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300"
                        animate={{
                          y: hoveredFeature === feature.id ? -2 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.title}
                      </motion.h3>
                      <motion.p
                        className="text-[#2C2C2C]/70 leading-relaxed"
                        animate={{
                          opacity: hoveredFeature === feature.id ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>

                      {/* Animated underline */}
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-[#8B7355] to-transparent"
                        initial={{ width: 0 }}
                        animate={{
                          width: hoveredFeature === feature.id ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Check Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredFeature === feature.id ? 1 : 0,
                        scale: hoveredFeature === feature.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle className="w-6 h-6 text-[#8B7355]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="pt-8">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-flex items-center space-x-3 bg-[#8B7355] hover:bg-[#7A6B4F] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Start Your Project</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div variants={imageVariants} className="relative">
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-[#D4C4B0] to-[#C4B49D]">
                <img
                  src="https://images.pexels.com/photos/6492395/pexels-photo-6492395.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                  alt="Premium Interior Design by Shreen Designs"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/10 to-transparent"
                />
              </div>
            </motion.div>

            {/* Background Accent */}
            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 1.1 }}
              whileInView={{ opacity: 0.05, rotate: -5, scale: 1.1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/10 to-[#A8956C]/5 rounded-3xl -z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
