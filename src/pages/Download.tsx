import { Button } from "@/components/ui/button";
import { DownloadCloud, Monitor, Apple, Terminal } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DownloadPage = () => {
  const { toast } = useToast();

  const handleDownload = (platform: string) => {
    toast({
      title: "Download Started",
      description: `Your download for ${platform} will begin shortly.`,
    });
  };

  return (
    <main className="bg-editor-dark min-h-screen pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Download
            <span className="bg-gradient-to-r from-editor-purple to-editor-light bg-clip-text text-transparent">
              {" "}
              CDE
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Get started with the most powerful code editor. Available for all major platforms.
          </p>
        </div>

        {/* Download Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {/* Windows */}
          <div className="bg-editor-dark/50 backdrop-blur-sm border border-editor-purple/20 rounded-lg p-6 text-center hover:border-editor-purple/40 transition-colors">
            <Monitor className="w-12 h-12 text-editor-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Windows</h3>
            <p className="text-gray-400 mb-4">Windows 10, 11 (64-bit)</p>
            <Button
              onClick={() => handleDownload("Windows")}
              className="w-full bg-editor-purple hover:bg-editor-purple/90"
            >
              <DownloadCloud className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>

          {/* macOS */}
          <div className="bg-editor-dark/50 backdrop-blur-sm border border-editor-purple/20 rounded-lg p-6 text-center hover:border-editor-purple/40 transition-colors">
            <Apple className="w-12 h-12 text-editor-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">macOS</h3>
            <p className="text-gray-400 mb-4">macOS 11 or later</p>
            <Button
              onClick={() => handleDownload("macOS")}
              className="w-full bg-editor-purple hover:bg-editor-purple/90"
            >
              <DownloadCloud className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>

          {/* Linux */}
          <div className="bg-editor-dark/50 backdrop-blur-sm border border-editor-purple/20 rounded-lg p-6 text-center hover:border-editor-purple/40 transition-colors">
            <Terminal className="w-12 h-12 text-editor-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Linux</h3>
            <p className="text-gray-400 mb-4">.deb, .rpm, or .AppImage</p>
            <Button
              onClick={() => handleDownload("Linux")}
              className="w-full bg-editor-purple hover:bg-editor-purple/90"
            >
              <DownloadCloud className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>
        </div>

        {/* System Requirements */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-editor-dark/50 backdrop-blur-sm border border-editor-purple/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Minimum Requirements</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• 2 GB RAM</li>
                <li>• 1.6 GHz Processor</li>
                <li>• 1 GB free disk space</li>
                <li>• DirectX 9 compatible GPU</li>
              </ul>
            </div>
            <div className="bg-editor-dark/50 backdrop-blur-sm border border-editor-purple/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Recommended</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• 8 GB RAM</li>
                <li>• 2.4 GHz Quad Core Processor</li>
                <li>• 4 GB free disk space</li>
                <li>• DirectX 11 compatible GPU</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DownloadPage;