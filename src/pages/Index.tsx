import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CodeShowcase from "@/components/CodeShowcase";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="bg-editor-dark min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <CodeShowcase />
      <CallToAction />
    </main>
  );
};

export default Index;