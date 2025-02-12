import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCog, FaStepForward, FaTachometerAlt, FaExchangeAlt, FaDatabase, FaClock, FaBook } from 'react-icons/fa';

const features = [
  { text: 'Real-Time Visualization of Algorithm and Data Structure Operations', icon: <FaChartLine size={37} color="white" /> },
  { text: 'Adjustable Speed Control for Animations', icon: <FaCog size={37} color="white" /> },
  { text: 'Step-by-Step Execution for Learning', icon: <FaStepForward size={37} color="white" /> },
  { text: 'Customizable Animation Speed Adjustment', icon: <FaTachometerAlt size={37} color="white" /> },
  { text: 'Compare Different Sorting & Searching Algorithms Side-by-Side', icon: <FaExchangeAlt size={37} color="white" /> },
  { text: 'Dynamic Data Generation for Unique Scenarios', icon: <FaDatabase size={37} color="white" /> },
  { text: 'Display of Time Complexity for Each Algorithm', icon: <FaClock size={37} color="white" /> },
  { text: 'Educational Tooltips for Algorithm Insights and Explanations', icon: <FaBook size={37} color="white" /> },
];

const Features = () => {
  return (
    <section id="features" className="pb-8 pt-20 bg-dark text-white lg:pb-[70px] lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-[40px]">Features</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-full px-4 md:w-1/2 lg:w-1/4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group mb-12 flex flex-col items-center text-center">
                <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300">
                    {feature.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold">{feature.text}</h4>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
