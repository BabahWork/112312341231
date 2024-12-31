import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";

export default function Download() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-6">
      <Button 
        variant="ghost" 
        onClick={() => router.back()}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Download</h1>
        <div className="space-y-4">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Latest Version</h2>
            <Button onClick={() => router.push('/version')}>
              View Version Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}