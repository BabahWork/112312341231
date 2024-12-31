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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-editor-dark/50 border border-editor-purple/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Windows</h2>
            <Button className="w-full bg-editor-purple hover:bg-editor-purple/90">
              Download for Windows
            </Button>
          </div>

          <div className="bg-editor-dark/50 border border-editor-purple/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">macOS</h2>
            <Button className="w-full bg-editor-purple hover:bg-editor-purple/90">
              Download for macOS
            </Button>
          </div>

          <div className="bg-editor-dark/50 border border-editor-purple/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Linux</h2>
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