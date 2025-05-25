import { motion } from 'framer-motion';

const services = [
  {
    title: 'Sunday Morning',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    times: [
      { name: 'Bible Study', time: '9:00 AM', description: 'Deep dive into Scripture' },
      { name: 'Worship Service', time: '10:00 AM', description: 'Contemporary worship experience' },
      { name: 'Kids Church', time: '10:20 AM', description: 'Age-appropriate programs' }
    ],
    color: 'blue'
  },
  {
    title: 'Wednesday Evening',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    times: [
      { name: 'Prayer Service', time: '7:00 PM', description: 'Midweek renewal and connection' }
    ],
    color: 'purple'
  }
];

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600'
};

export default function ModernServiceTimes() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-gray-900 mb-4">Join Us This Week</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We gather to worship, learn, and grow together. Everyone is welcome.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-modern p-8"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${colorClasses[service.color]}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>

              <div className="space-y-4">
                {service.times.map((timeSlot) => (
                  <div key={timeSlot.name} className="border-l-4 border-gray-200 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{timeSlot.name}</h4>
                        <p className="text-sm text-gray-600">{timeSlot.description}</p>
                      </div>
                      <span className="text-xl font-bold text-gray-900">{timeSlot.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-6 bg-white rounded-lg shadow-sm">
            <svg className="w-6 h-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-left">
              <p className="font-semibold text-gray-900">6480 S State Road 39</p>
              <p className="text-gray-600">Lebanon, IN 46052</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}