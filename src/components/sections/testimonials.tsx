"use client";

import { useRef, useState } from "react";
import { easeInOut, motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      transition: { duration: 0.8, easeInOut },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  const topDesigners = [
    "Aarav Kapoor Designs",
    "The Urban Nest Studio",
    "Sublime Interiors",
    "CasaCraft Living",
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Transforming our corporate office was a massive undertaking, but the team exceeded every expectation. The balance of functionality and modern aesthetics has truly elevated our work environment.",
      author: "PRIYA MEHTA",
      rating: 5,
      project: "Corporate Office Renovation",
    },
    {
      id: 2,
      quote:
        "Designing our new home was an emotional journey, and these designers made it effortless and inspiring. Every corner now reflects our personality and warmth. We couldn’t be happier.",
      author: "RAHUL AND NEHA DESAI",
      rating: 5,
      project: "Home Design Project",
    },
    {
      id: 3,
      quote:
        "From the first consultation to final execution, the process was seamless and professional. The creative ideas, mood boards, and attention to detail truly stood out.",
      author: "ANJALI VERMA",
      rating: 5,
      project: "Luxury Apartment Makeover",
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
        >
          <Star
            className={`w-5 h-5 ${
              i < rating ? "fill-[#8B7355] text-[#8B7355]" : "text-gray-300"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-white via-[#F8F5F0]/30 to-[#F5F2ED]/50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          viewport={{ once: true }}
          className="absolute top-1/4 left-10 w-80 h-80 rounded-full border border-[#8B7355]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          viewport={{ once: true }}
          className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full border border-[#A8956C]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Loved by Top Designers */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div variants={itemVariants}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2C2C2C] leading-tight mb-8"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Loved by Top
                <br />
                <span className="text-[#8B7355]">Corporates</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {topDesigners.map((designer, index) => (
                <motion.div
                  key={designer}
                  variants={itemVariants}
                  whileHover={{ x: 5, color: "#8B7355" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-[#2C2C2C]/70 font-medium text-lg cursor-pointer hover:text-[#8B7355] transition-colors duration-300"
                >
                  {designer}
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-3 bg-[#8B7355]/5 px-6 py-4 rounded-2xl border border-[#8B7355]/10"
            >
              <div className="flex items-center space-x-1">
                <StarRating rating={5} />
              </div>
              <div className="text-sm text-[#2C2C2C]/70">
                <span className="font-semibold text-[#2C2C2C]">4.9/5</span> from
                180+ reviews
              </div>
            </motion.div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="lg:col-span-8">
            {/* Rating Header */}
            <motion.div
              variants={itemVariants}
              className="flex justify-end mb-8"
            >
              <div className="flex items-center space-x-2">
                <StarRating rating={5} />
              </div>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(139, 115, 85, 0.1)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  onHoverStart={() => setHoveredCard(testimonial.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F2ED] hover:border-[#8B7355]/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0.1 }}
                    animate={{
                      opacity: hoveredCard === testimonial.id ? 0.2 : 0.1,
                      scale: hoveredCard === testimonial.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4"
                  >
                    <Quote className="w-8 h-8 text-[#8B7355]" />
                  </motion.div>

                  {/* Testimonial Content */}
                  <div className="space-y-4">
                    <motion.p
                      className="text-[#2C2C2C]/80 leading-relaxed text-base"
                      initial={{ opacity: 0.8 }}
                      animate={{
                        opacity: hoveredCard === testimonial.id ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>

                    <div className="pt-4 border-t border-[#F5F2ED]">
                      <motion.p
                        className="font-medium text-sm text-[#2C2C2C] tracking-wider"
                        initial={{ y: 0 }}
                        animate={{
                          y: hoveredCard === testimonial.id ? -2 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {testimonial.author}
                      </motion.p>
                      <p className="text-xs text-[#8B7355] mt-1 font-medium">
                        {testimonial.project}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#8B7355] text-[#8B7355]"
                          />
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredCard === testimonial.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-2 h-2 bg-[#8B7355] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredCard === testimonial.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/5 to-transparent rounded-2xl pointer-events-none"
                  />
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            {/* <motion.div variants={itemVariants} className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-flex items-center space-x-3 bg-[#8B7355] hover:bg-[#7A6B4F] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Read More Reviews</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.div>
              </motion.button>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
