import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const welcomeSteps = [
  {
    id: 'hello',
    title: "Hey there, friend!",
    content: "We're so excited you're thinking about visiting! Let us show you around...",
    tip: "Fun fact: We have the best coffee in town (just saying!)",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
  },
  {
    id: 'sunday',
    title: "Sunday mornings are special",
    content: "Doors open at 8:45 AM. Grab some coffee, maybe a donut, and chat with friendly faces!",
    tip: "Pro tip: Park in the back for easy access to the kids' area!",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop"
  },
  {
    id: 'dress',
    title: "What should I wear?",
    content: "Whatever makes you comfortable! Jeans? Perfect. Dress up? Great! Just come as you are.",
    tip: "Most folks dress casual - think 'coffee with friends' vibe",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
  },
  {
    id: 'kids',
    title: "Bringing the kiddos?",
    content: "Awesome! We have a nursery for babies, fun programs for kids, and patient volunteers who genuinely love children.",
    tip: "Kids get a welcome bag with activities and treats!",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=600&fit=crop"
  },
  {
    id: 'expect',
    title: "What's service like?",
    content: "We sing together (don't worry, no solos!), share stories, pray, and learn from the Bible. About 75 minutes total.",
    tip: "Feel free to participate as much or as little as you're comfortable with",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=600&fit=crop"
  },
  {
    id: 'connect',
    title: "We saved you a seat!",
    content: "Our greeters will help you find the perfect spot. And yes, you can sit in the back if that's your style!",
    tip: "After service, stick around for conversations and connections",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
  }
];

export default function FriendlyNewVisitor() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (currentStep < welcomeSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsComplete(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-warm-peach/30 to-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-warm-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-coral/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-4">
              First Time Visiting?
            </h2>
            <p className="text-xl text-warm-brown/70">
              No worries! We've got you covered with this friendly guide.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-warm overflow-hidden">
            {!isComplete ? (
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative h-64 md:h-full">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentStep}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={welcomeSteps[currentStep].image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content side */}
                <div className="p-8 md:p-12">
                  {/* Progress dots */}
                  <div className="flex justify-center gap-2 mb-8">
                    {welcomeSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`transition-all duration-300 ${
                          index === currentStep 
                            ? 'w-8 h-2 bg-warm-coral rounded-full' 
                            : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-3xl font-bold text-warm-brown mb-4">
                        {welcomeSteps[currentStep].title}
                      </h3>

                      <p className="text-lg text-warm-brown/80 mb-6 leading-relaxed">
                        {welcomeSteps[currentStep].content}
                      </p>

                      {/* Tip box */}
                      <div className="bg-warm-yellow/20 rounded-2xl p-4 mb-8">
                        <p className="text-sm text-warm-brown/70">
                          <span className="font-bold">Insider tip:</span> {welcomeSteps[currentStep].tip}
                        </p>
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex justify-between items-center">
                        {currentStep > 0 ? (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrev}
                            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                          >
                            ← Back
                          </motion.button>
                        ) : (
                          <div></div>
                        )}
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleNext}
                          className="px-8 py-3 bg-warm-coral text-white rounded-full font-bold shadow-warm hover:shadow-warm-lg transition-all"
                        >
                          {currentStep < welcomeSteps.length - 1 ? 'Next →' : "I'm ready to visit!"}
                        </motion.button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-12 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-warm-coral/20 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-warm-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl font-bold text-warm-brown mb-4">
                  We Can't Wait to See You!
                </h3>
                
                <p className="text-lg text-warm-brown/80 mb-8 max-w-2xl mx-auto">
                  Your next step is simple - just show up! Our friendly greeters will be waiting to welcome you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-warm-coral text-white px-8 py-4 rounded-full font-bold hover:shadow-warm-lg transition-all"
                  >
                    Contact Us
                  </motion.a>
                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-warm-coral text-warm-coral px-8 py-4 rounded-full font-bold hover:bg-warm-coral/10 transition-all"
                  >
                    Go Through Again
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-warm-brown/70 mb-4">
              Still have questions? We'd love to chat!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-warm-blue font-bold hover:text-blue-700"
            >
              Send us a message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}