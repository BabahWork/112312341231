import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Documentation = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-editor-dark pt-20">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 text-white hover:text-editor-purple"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>

        <div className="space-y-8">
          <section className="bg-editor-dark/50 border border-editor-purple/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Creating Custom Themes</h2>
            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl text-editor-purple mb-4">1. Define Your Theme Colors</h3>
              <pre className="bg-editor-dark/80 p-4 rounded-md mb-6">
                {`// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        custom: {
          primary: '#your-color',
          secondary: '#your-color',
          accent: '#your-color',
        }
      }
    }
  }
}`}
              </pre>

              <h3 className="text-xl text-editor-purple mb-4">2. Create Theme Variables</h3>
              <pre className="bg-editor-dark/80 p-4 rounded-md mb-6">
                {`:root {
  --custom-primary: 210 100% 50%;
  --custom-secondary: 220 100% 60%;
  --custom-accent: 230 100% 70%;
}`}
              </pre>

              <h3 className="text-xl text-editor-purple mb-4">3. Apply Your Theme</h3>
              <p className="text-gray-300 mb-4">
                Use your custom theme classes in your components:
              </p>
              <pre className="bg-editor-dark/80 p-4 rounded-md">
                {`<div className="bg-custom-primary text-custom-secondary">
  Your themed content
</div>`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Documentation;