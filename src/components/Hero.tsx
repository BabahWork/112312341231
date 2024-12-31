import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-editor-dark">
      <div className="absolute inset-0 bg-gradient-to-r from-editor-dark via-editor-purple/20 to-editor-dark animate-gradient"></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-editor-purple/10 border border-editor-purple/20 mb-8">
            <Terminal className="w-4 h-4 text-editor-purple mr-2" />
            <span className="text-sm text-editor-purple">The next generation code editor</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Code with
            <span className="bg-gradient-to-r from-editor-purple to-editor-light bg-clip-text text-transparent"> confidence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the future of coding with our intelligent editor. 
            Built for developers who demand performance and elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-editor-purple hover:bg-editor-purple/90"
              onClick={() => navigate('/download')}
            >
              Download Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-editor-purple/20"
              onClick={() => navigate('/documentation')}
            >
              View Documentation
            </Button>
          </div>
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto animate-float">
          <div className="bg-editor-dark/80 backdrop-blur-sm rounded-lg border border-editor-purple/20 p-4">
            <pre className="text-sm text-gray-300 font-mono">
              <code>{`// Welcome to CDE
const editor = new CDE({
  theme: 'aurora',
  plugins: ['intellisense', 'git'],
  performance: 'blazing-fast'
});

editor.launch(); // Let's begin!`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;