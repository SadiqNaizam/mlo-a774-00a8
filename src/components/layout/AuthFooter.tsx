import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooter: React.FC = () => {
  console.log('AuthFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t bg-muted/50 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">
          &copy; {currentYear} AuthApp. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link 
            to="/terms" 
            className="hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link 
            to="/privacy" 
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default AuthFooter;