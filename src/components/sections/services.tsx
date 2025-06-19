"use client";

import { motion } from "framer-motion";
function Services() {
  return (
    <>
      {/* Services Section */}
      <section className="relative py-16 md:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm md:text-base text-[#8B7355] font-medium tracking-wider uppercase mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2C2C] leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Crafting Exceptional
              <br />
              <span className="text-[#8B7355]">Interior Experiences</span>
            </motion.h2>
          </motion.div>

          {/* Service 1 - Residential Design */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-32"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F5F2ED] to-[#E8E5E0] flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#8B7355] to-[#7A6B4F] rounded-2xl shadow-xl flex items-center justify-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#6B5B4F] rounded-lg"></div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 to-transparent"
                />
              </motion.div>

              {/* Service Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#8B7355] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-medium text-lg">01</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#8B7355] font-medium tracking-wider uppercase mb-2"
                >
                  01/03
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Residential Design
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#6B6B6B] leading-relaxed mb-6"
                >
                  Transform your home into a sanctuary that reflects your
                  personality and lifestyle. Our residential design services
                  encompass everything from concept development to final
                  styling, creating spaces that are both beautiful and
                  functional.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-[#8B7355] font-medium hover:text-[#7A6B4F] transition-colors duration-300 flex items-center group"
                  >
                    Explore Residential Projects
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Service 2 - Commercial Design */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-32"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 lg:order-2"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#8B7355] font-medium tracking-wider uppercase mb-2"
                >
                  02/03
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Commercial Spaces
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#6B6B6B] leading-relaxed mb-6"
                >
                  Elevate your business environment with sophisticated
                  commercial design solutions. From corporate offices to retail
                  spaces, we create environments that enhance productivity,
                  reflect brand identity, and leave lasting impressions on
                  clients and employees.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-[#8B7355] font-medium hover:text-[#7A6B4F] transition-colors duration-300 flex items-center group"
                  >
                    View Commercial Portfolio
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            <div className="relative group lg:order-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#E8E5E0] to-[#DDD9D4] flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#A8956C] to-[#98856C] rounded-2xl shadow-xl flex items-center justify-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#88756C] rounded-lg"></div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 to-transparent"
                />
              </motion.div>

              {/* Service Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-[#A8956C] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-medium text-lg">02</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Service 3 - Design Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#DDD9D4] to-[#D4C4B0] flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#E8A87C] to-[#D4956B] rounded-2xl shadow-xl flex items-center justify-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C8956D] rounded-lg"></div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 to-transparent"
                />
              </motion.div>

              {/* Service Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#E8A87C] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-medium text-lg">03</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#8B7355] font-medium tracking-wider uppercase mb-2"
                >
                  03/03
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Design Consultation
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#6B6B6B] leading-relaxed mb-6"
                >
                  Get expert guidance for your design journey with our
                  comprehensive consultation services. Whether you need a fresh
                  perspective, design direction, or professional advice, our
                  consultations provide valuable insights to bring your vision
                  to life.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-[#8B7355] font-medium hover:text-[#7A6B4F] transition-colors duration-300 flex items-center group"
                  >
                    Schedule Consultation
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;
