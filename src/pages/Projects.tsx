import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Loader2 } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
}

// Sample project data since we're making it up for now
const sampleProjects: Repository[] = [
  {
    id: 1,
    name: "AI-Powered-Assistant",
    description: "An intelligent chatbot built with Python and OpenAI's GPT-3 API. Features natural language processing and context-aware responses.",
    html_url: "https://github.com/OctakoPy/AI-Powered-Assistant",
    homepage: "",
    topics: ["artificial-intelligence", "machine-learning", "python", "openai"]
  },
  {
    id: 2,
    name: "Smart-Home-Hub",
    description: "A centralized IoT platform for managing smart home devices. Includes real-time monitoring and automated scheduling features.",
    html_url: "https://github.com/OctakoPy/Smart-Home-Hub",
    homepage: "https://smart-home-hub.demo.com",
    topics: ["iot", "react", "nodejs", "raspberry-pi"]
  },
  {
    id: 3,
    name: "Data-Visualization-Dashboard",
    description: "Interactive dashboard for visualizing complex datasets. Built with React and D3.js, featuring customizable charts and real-time updates.",
    html_url: "https://github.com/OctakoPy/Data-Visualization-Dashboard",
    homepage: "",
    topics: ["data-visualization", "react", "d3js", "typescript"]
  },
  {
    id: 4,
    name: "Blockchain-Wallet",
    description: "A secure cryptocurrency wallet supporting multiple blockchain networks. Implements advanced encryption and transaction signing.",
    html_url: "https://github.com/OctakoPy/Blockchain-Wallet",
    homepage: "https://blockchain-wallet.demo.com",
    topics: ["blockchain", "cryptocurrency", "security", "web3"]
  }
];

const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      // For now, return our sample data instead of fetching
      return sampleProjects;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 animate-glow">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors"
                onClick={() => window.open(project.html_url, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;