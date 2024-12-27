import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React',
    'Node.js', 'Git', 'HTML/CSS', 'SQL',
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 animate-glow">About Me</h1>
          
          <div className="space-y-6 text-lg">
            <p>
              I'm a developer passionate about creating efficient solutions and learning new technologies.
              With a focus on Python development and web technologies, I enjoy building applications
              that make a difference.
            </p>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="project-card text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;