import React from 'react';
import EmailVerifier from './components/EmailVerifier';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <Mail className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Email Verify Pro</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-12">
        <EmailVerifier />
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Email Verify Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;