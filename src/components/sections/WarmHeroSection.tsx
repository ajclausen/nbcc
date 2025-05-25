import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StaggeredText from '../animations/StaggeredText';

const heroContent = [
  { 
    greeting: "Welcome Home", 
    message: "Where every heart finds belonging",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&h=1080&fit=crop"
  },
  { 
    greeting: "Come As You Are", 
    message: "You're loved just the way you are",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop"
  },
  { 
    greeting: "Join Our Family", 
    message: "Growing together in faith and friendship",
    image: "https://images.unsplash.com/photo-1609234656388-0ff363323b63?w=1920&h=1080&fit=crop"
  }
];

export default function WarmHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={heroContent[currentIndex].image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Floating blob shapes - subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-blob blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-blob blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[85vh] items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                <StaggeredText text={heroContent[currentIndex].greeting} />
              </h1>
              
              <p className="text-xl md:text-3xl text-white/90 font-light">
                {heroContent[currentIndex].message}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-warm-brown rounded-full font-bold text-lg shadow-warm hover:shadow-warm-lg transition-all duration-300"
            >
              I'm New Here
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg shadow-warm hover:shadow-warm-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/30"
            >
              Plan Your Visit
            </motion.a>
          </motion.div>

          {/* Service Times - Clean and Simple */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-warm max-w-2xl mx-auto border border-white/20"
          >
            <p className="text-white font-medium text-lg">
              Join us Sundays at <span className="font-bold">9:00 AM</span> for Sunday School 
              or <span className="font-bold">10:00 AM</span> for worship
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 h-2 bg-white rounded-full' 
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}