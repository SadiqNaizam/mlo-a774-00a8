import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Generic icon for the app

const AuthHeader: React.FC = () => {
  console.log('AuthHeader loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-background">
      <div className="container mx-auto flex items-center justify-start">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-colors"
          aria-label="Go to homepage"
        >
          <ShieldCheck className="h-7 w-7 text-primary" />
          <span>AuthApp</span>
        </Link>
        {/* Minimalist header: No additional navigation links as per requirement */}
      </div>
    </header>
  );
};

export default AuthHeader;