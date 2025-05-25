import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

const steps = [
  {
    id: 'welcome',
    title: 'Welcome!',
    icon: '👋',
    content: "We're so glad you're interested in visiting NBCC! We can't wait to meet you.",
    action: "Let's Get Started"
  },
  {
    id: 'when',
    title: 'When to Visit',
    icon: '📅',
    content: "Join us any Sunday at 9:00 AM for Sunday School or 10:00 AM for our main service. We also have midweek prayer on Wednesdays at 7:00 PM.",
    action: "What to Expect"
  },
  {
    id: 'expect',
    title: 'What to Expect',
    icon: '⛪',
    content: "Come as you are! Our services are casual and welcoming. You'll experience contemporary worship, biblical teaching, and genuine community.",
    action: "For Your Kids"
  },
  {
    id: 'kids',
    title: 'Kids are Welcome!',
    icon: '👶',
    content: "We have age-appropriate programs for children of all ages. Kids Church starts at 10:20 AM during the main service, and nursery care is available.",
    action: "Get Directions"
  },
  {
    id: 'location',
    title: 'Find Us',
    icon: '📍',
    content: "We're located at 6480 S State Road 39, Lebanon, IN 46052. We have plenty of parking and greeters ready to help you find your way!",
    action: "Connect With Us"
  }
];

export default function ImNewSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsComplete(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              New Here? We'd Love to Meet You!
            </h2>
          </FadeIn>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!isComplete ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</span>
                      <button
                        onClick={handleReset}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Start Over
                      </button>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="text-6xl mb-6"
                    >
                      {steps[currentStep].icon}
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {steps[currentStep].title}
                    </h3>
                    
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                      {steps[currentStep].content}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNext}
                      className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
                    >
                      {steps[currentStep].action}
                      <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Step Indicators */}
                  <div className="flex justify-center mt-8 space-x-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentStep 
                            ? 'w-8 bg-blue-600' 
                            : index < currentStep 
                            ? 'bg-blue-400' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="text-6xl mb-6"
                  >
                    🎉
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    We Can't Wait to See You!
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                    Your next step is simple - just show up! Our friendly greeters will be waiting to welcome you.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors"
                    >
                      Contact Us
                    </motion.a>
                    <motion.button
                      onClick={handleReset}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
                    >
                      Go Through Again
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}