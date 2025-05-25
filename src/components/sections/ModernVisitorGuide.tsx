import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What should I expect on my first visit?",
    answer: "You'll be warmly welcomed by our greeting team who can help you find your way around. Our services are casual and contemporary, lasting about 75 minutes. We offer programs for children during the service."
  },
  {
    question: "What should I wear?",
    answer: "Come as you are! Most people dress casually - jeans and a nice shirt are perfectly fine. We believe God cares more about your heart than your outfit."
  },
  {
    question: "Is there childcare available?",
    answer: "Yes! We have a staffed nursery for infants and toddlers, and Kids Church for children through 5th grade begins at 10:20 AM during our main service."
  },
  {
    question: "Where should I park?",
    answer: "We have plenty of free parking available. First-time guests can use any available spot. Our parking team will be happy to assist you."
  },
  {
    question: "What kind of music do you have?",
    answer: "Our worship style is contemporary with a full band. We sing modern worship songs as well as updated arrangements of traditional hymns."
  },
  {
    question: "How can I get connected?",
    answer: "Fill out a connection card during your visit, and we'll help you find the right next steps. We offer various small groups, volunteer opportunities, and classes to help you grow in faith."
  }
];

export default function ModernVisitorGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-gray-900 mb-4">Planning Your First Visit?</h2>
            <p className="text-xl text-gray-600">
              We know visiting a new church can feel uncertain. Here's everything you need to know.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <motion.svg
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your First Sunday</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Arrive a few minutes early</h4>
                      <p className="text-sm text-gray-600 mt-1">This gives you time to park, check in your kids, and find a seat.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Stop by the Welcome Center</h4>
                      <p className="text-sm text-gray-600 mt-1">Get a visitor packet and let us answer any questions.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Enjoy the service</h4>
                      <p className="text-sm text-gray-600 mt-1">Participate as much or as little as you're comfortable with.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      4
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Connect with us</h4>
                      <p className="text-sm text-gray-600 mt-1">Fill out a connection card so we can follow up with you.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <a href="/contact" className="btn-primary w-full text-center block">
                    Get Directions
                  </a>
                  <a href="/contact" className="btn-secondary w-full text-center block">
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}