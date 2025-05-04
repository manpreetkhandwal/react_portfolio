import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Tech",
      year: "2020 - 2024",
      coursework: ["Data Structures", "Algorithms", "Web Development", "Machine Learning"],
      honors: "Dean’s List, Summa Cum Laude",
      extras: "President of CS Club",
    },
    {
      degree: "High School Diploma",
      institution: "Tech High School",
      year: "2016 - 2020",
      coursework: ["AP Computer Science", "Calculus", "Physics"],
      honors: "Valedictorian",
      extras: "Robotics Team Lead",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Education 🎓
        </motion.h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.institution} • {edu.year}</p>
              
              {edu.coursework && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">Relevant Coursework:</h4>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {edu.coursework.map((course, i) => (
                      <li key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-4">
                {edu.honors && (
                  <p className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="mr-2">🏆</span> {edu.honors}
                  </p>
                )}
                {edu.extras && (
                  <p className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="mr-2">🌟</span> {edu.extras}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;