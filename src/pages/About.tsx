import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React',
    'Node.js', 'Git', 'HTML/CSS', 'SQL',
    'Docker', 'AWS', 'MongoDB', 'PostgreSQL'
  ];

  const experience = [
    {
      year: '2023',
      role: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      description: 'Led development of cloud-native applications and mentored junior developers.'
    },
    {
      year: '2021-2023',
      role: 'Full Stack Developer',
      company: 'Digital Innovations Inc',
      description: 'Built and maintained multiple web applications using React and Node.js.'
    },
    {
      year: '2019-2021',
      role: 'Python Developer',
      company: 'DataTech Systems',
      description: 'Developed data processing pipelines and automation tools.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <section>
            <h1 className="text-4xl font-bold mb-8 animate-glow">About Me</h1>
            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                I'm a passionate software engineer with over 4 years of experience in full-stack development.
                My journey began with Python automation scripts, which eventually led me to explore web development
                and cloud technologies. I love creating efficient solutions and learning new technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>4+ Years Experience</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <h3 className="text-xl font-medium">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.year}</p>
                  <p className="text-foreground/80">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-muted/50 text-center hover:bg-muted transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:contact@octakopy.dev"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@octakopy.dev
              </a>
              <a
                href="https://github.com/OctakoPy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;