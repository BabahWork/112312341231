import { Code2, Zap, Lock, Puzzle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-editor-purple" />,
      title: "Intelligent Code Completion",
      description: "Advanced AI-powered code suggestions that understand your coding style and project context."
    },
    {
      icon: <Zap className="w-8 h-8 text-editor-purple" />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with instant startup and smooth editing experience, even for large files."
    },
    {
      icon: <Lock className="w-8 h-8 text-editor-purple" />,
      title: "Secure by Design",
      description: "Built-in security features to protect your code and sensitive information."
    },
    {
      icon: <Puzzle className="w-8 h-8 text-editor-purple" />,
      title: "Extensible Architecture",
      description: "Customize your experience with a rich ecosystem of extensions and plugins."
    }
  ];

  return (
    <section className="py-20 bg-editor-dark relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Powerful Features for Modern Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-editor-dark/50 border border-editor-purple/20 backdrop-blur-sm hover:border-editor-purple/40 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;