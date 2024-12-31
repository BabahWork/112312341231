import { Button } from "@/components/ui/button";

const CodeShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-editor-dark to-editor-dark/95 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Write Better Code,
              <span className="bg-gradient-to-r from-editor-purple to-editor-light bg-clip-text text-transparent"> Faster</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Experience the next evolution in code editing with our powerful features and intuitive interface. From smart completions to real-time collaboration, we've got everything you need to streamline your development workflow.
            </p>
            <Button className="bg-editor-purple hover:bg-editor-purple/90">
              Try it Free
            </Button>
          </div>
          <div className="flex-1 space-y-6">
            {/* Main Editor Screenshot */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Code Editor Interface"
                className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-[1.02] w-full"
              />
              <div className="absolute inset-0 bg-editor-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Additional Editor Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Code Syntax Highlighting"
                  className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02] w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-editor-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Collaborative Coding"
                  className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02] w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-editor-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example Section */}
        <div className="mt-16">
          <div className="bg-editor-dark/80 backdrop-blur-sm rounded-lg border border-editor-purple/20 p-6">
            <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
              <code>{`// Smart code completion
function calculateComplexity(code: string) {
  const analysis = AI.analyze(code);
  return {
    cyclomaticComplexity: analysis.complexity,
    suggestions: analysis.improvements,
    performance: analysis.metrics
  };
}

// Real-time collaboration
const session = CDE.createSession({
  mode: 'collaborative',
  participants: ['dev1', 'dev2'],
  features: ['live-edit', 'chat']
});`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;