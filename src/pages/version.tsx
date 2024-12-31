import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";

export default function Version() {
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
        <h1 className="text-3xl font-bold mb-6">Version Details</h1>
        <div className="space-y-4">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Version 1.0.0</h2>
            <p>Release details and changelog go here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}