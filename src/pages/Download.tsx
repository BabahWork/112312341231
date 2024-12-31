import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Download = () => {
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

        <h1 className="text-4xl font-bold text-white mb-8">Download CDE</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">About CDE</h2>
          <p className="text-gray-300 mb-6">
            CDE (Code Development Environment) is a powerful, lightweight code editor designed for modern development workflows. 
            With built-in support for TypeScript, React, and many other popular frameworks, CDE helps you code faster and smarter.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-editor-dark/30 border border-editor-purple/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Intelligent code completion</li>
                <li>Built-in Git integration</li>
                <li>Live preview and hot reload</li>
                <li>Customizable themes and extensions</li>
                <li>Cross-platform compatibility</li>
              </ul>
            </div>
            
            <div className="bg-editor-dark/30 border border-editor-purple/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">System Requirements</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Windows 10/11 or macOS 10.15+</li>
                <li>4GB RAM minimum (8GB recommended)</li>
                <li>1GB free disk space</li>
                <li>1280x720 minimum resolution</li>
                <li>Internet connection for updates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-editor-dark/50 border border-editor-purple/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Windows</h2>
            <p className="text-gray-300 mb-4">Version 1.2.3 (64-bit)</p>
            <Button className="w-full bg-editor-purple hover:bg-editor-purple/90">
              Download for Windows
            </Button>
          </div>

          <div className="bg-editor-dark/50 border border-editor-purple/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">macOS</h2>
            <p className="text-gray-300 mb-4">Version 1.2.3 (Universal)</p>
            <Button className="w-full bg-editor-purple hover:bg-editor-purple/90">
              Download for macOS
            </Button>
          </div>

          <div className="bg-editor-dark/50 border border-editor-purple/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Linux</h2>
            <p className="text-gray-300 mb-4">Version 1.2.3 (.deb, .rpm)</p>
            <Button className="w-full bg-editor-purple hover:bg-editor-purple/90">
              Download for Linux
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Download;