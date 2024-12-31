import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Documentation() {
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
        <h1 className="text-3xl font-bold mb-6">Documentation</h1>
        
        <div className="space-y-8">
          <section className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Creating Your Own Theme</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Step 1: Setup</h3>
              <p>First, create a new theme file in your project:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`// themes/custom-theme.ts
export const customTheme = {
  colors: {
    primary: '#your-color',
    secondary: '#your-color',
    // Add more colors
  },
  // Add more theme properties
}`}
              </pre>
              
              <h3 className="text-xl font-medium">Step 2: Configuration</h3>
              <p>Configure your theme by extending the base theme:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`import { baseTheme } from '@/themes/base';
import { customTheme } from '@/themes/custom-theme';

export const theme = {
  ...baseTheme,
  ...customTheme,
}`}
              </pre>
              
              <h3 className="text-xl font-medium">Step 3: Implementation</h3>
              <p>Apply your theme to your components:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`// In your component
import { theme } from '@/themes';

const MyComponent = () => {
  return (
    <div style={{ color: theme.colors.primary }}>
      Themed content
    </div>
  );
};`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}