import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-editor-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-editor-purple/10 via-editor-purple/5 to-transparent animate-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Coding Experience?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join thousands of developers who have already upgraded their workflow with CDE.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-editor-purple hover:bg-editor-purple/90">
              Download Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-editor-purple/20">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;