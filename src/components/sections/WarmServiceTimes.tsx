import { motion } from 'framer-motion';
import AnimatedCard from '../animations/AnimatedCard';

export default function WarmServiceTimes() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Warm background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50/30"></div>
      
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full h-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-current text-warm-peach">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-4">
              When Can You Visit?
            </h2>
            <p className="text-xl text-warm-brown/70">
              We'd love to see you any time! Here's our weekly rhythm:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sunday Services */}
            <AnimatedCard client:visible delay={0.1} className="group">
              <div className="bg-white rounded-3xl p-8 text-center h-full shadow-warm hover:shadow-warm-lg transition-all duration-300 border-2 border-warm-peach/30 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-warm-blue/10 rounded-blob"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-warm-blue/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-warm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-warm-brown mb-6">Sunday Gathering</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-warm-blue-light rounded-2xl py-3 px-4 transform hover:scale-105 transition-transform">
                      <p className="text-sm text-warm-brown/70">Bible Study</p>
                      <p className="text-2xl font-bold text-warm-blue">9:00 AM</p>
                      <p className="text-xs text-warm-brown/60 mt-1">Coffee and fellowship included</p>
                    </div>
                    
                    <div className="bg-warm-peach rounded-2xl py-3 px-4 transform hover:scale-105 transition-transform">
                      <p className="text-sm text-warm-brown/70">Worship Service</p>
                      <p className="text-2xl font-bold text-warm-brown">10:00 AM</p>
                      <p className="text-xs text-warm-brown/60 mt-1">Casual dress, come as you are</p>
                    </div>
                    
                    <div className="bg-warm-coral/30 rounded-2xl py-3 px-4 transform hover:scale-105 transition-transform">
                      <p className="text-sm text-warm-brown/70">Kids Church</p>
                      <p className="text-2xl font-bold text-orange-700">10:20 AM</p>
                      <p className="text-xs text-warm-brown/60 mt-1">Fun activities for all ages</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Wednesday Prayer */}
            <AnimatedCard client:visible delay={0.2} className="group">
              <div className="bg-white rounded-3xl p-8 text-center h-full shadow-warm hover:shadow-warm-lg transition-all duration-300 border-2 border-warm-green/30 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-warm-green/10 rounded-blob"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-warm-green/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-warm-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-warm-brown mb-6">Midweek Refresh</h3>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl py-6 px-4 transform hover:scale-105 transition-transform">
                    <p className="text-sm text-warm-brown/70 mb-2">Wednesday Night</p>
                    <p className="text-3xl font-bold text-warm-green mb-3">7:00 PM</p>
                    <div className="space-y-2 text-sm text-warm-brown/60">
                      <p>Prayer & encouragement</p>
                      <p>Acoustic worship</p>
                      <p>Fellowship time</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-warm-brown/60 mt-4 italic">
                    "Come recharge in the middle of your week"
                  </p>
                </div>
              </div>
            </AnimatedCard>

            {/* Location */}
            <AnimatedCard client:visible delay={0.3} className="group">
              <div className="bg-white rounded-3xl p-8 text-center h-full shadow-warm hover:shadow-warm-lg transition-all duration-300 border-2 border-warm-purple/30 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-warm-purple/10 rounded-blob"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-warm-purple/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-warm-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-warm-brown mb-6">Find Us Here</h3>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl py-6 px-4">
                    <p className="text-lg font-semibold text-warm-brown mb-1">6480 S State Road 39</p>
                    <p className="text-lg text-warm-brown/80 mb-4">Lebanon, IN 46052</p>
                    
                    <div className="space-y-2 text-sm text-warm-brown/60">
                      <p>Easy parking</p>
                      <p>Fully accessible</p>
                      <p>Greeters to help you</p>
                    </div>
                  </div>
                  
                  <motion.a
                    href="https://maps.google.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block mt-4 text-warm-purple font-semibold hover:text-purple-700 transition-colors"
                  >
                    Get directions →
                  </motion.a>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}