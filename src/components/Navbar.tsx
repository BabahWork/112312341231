import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link href="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/download" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
              Download
            </Link>
            <Link href="/documentation" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}