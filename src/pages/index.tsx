import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Platform</h1>
      <Button 
        size="lg" 
        onClick={() => router.push('/download')}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Download Now
      </Button>
    </main>
  );
}