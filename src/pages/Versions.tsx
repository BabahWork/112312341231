import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Versions = () => {
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

        <h1 className="text-4xl font-bold text-white mb-8">Version History</h1>
        
        <div className="space-y-6">
          <div className="bg-editor-dark/50 border border-editor-purple/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Version 2.0.0</h2>
            <p className="text-gray-400 mb-4">Released March 2024</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Complete UI redesign</li>
              <li>New dark theme</li>
              <li>Improved code completion</li>
              <li>Real-time collaboration features</li>
            </ul>
          </div>

          <div className="bg-editor-dark/50 border border-editor-purple/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Version 1.5.0</h2>
            <p className="text-gray-400 mb-4">Released January 2024</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Added Git integration</li>
              <li>Enhanced debugging tools</li>
              <li>Performance improvements</li>
              <li>New extension marketplace</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Versions;