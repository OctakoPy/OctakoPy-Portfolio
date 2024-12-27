import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <div className="relative min-h-[80vh] flex flex-col justify-center items-center text-center">
          <div className="hero-gradient" />
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 animate-glow"
          >
            Hi, I'm OctakoPy
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl"
          >
            A passionate developer crafting digital experiences with Python and modern web technologies
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => navigate('/projects')}
              className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              About Me
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;