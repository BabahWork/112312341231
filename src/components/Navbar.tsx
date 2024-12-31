import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-editor-dark/80 backdrop-blur-md border-b border-editor-purple/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 className="w-8 h-8 text-editor-purple" />
          <span className="text-xl font-bold text-white">CDE</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link to="/versions" className="text-gray-300 hover:text-white transition-colors">Versions</Link>
          <Link to="/download" className="text-gray-300 hover:text-white transition-colors">Download</Link>
          <Link to="/documentation" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Log in
          </Button>
          <Button className="bg-editor-purple hover:bg-editor-purple/90">
            Try Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;