import React from 'react';
import { Button } from "@/components/ui/button";
import { Chrome, Facebook, Github } from 'lucide-react';

interface SocialLoginButtonProps {
  providerName: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ providerName, icon, onClick }) => {
  return (
    <Button variant="outline" className="w-full flex items-center justify-center py-2.5" onClick={onClick}>
      {icon}
      <span className="ml-2">Login with {providerName}</span>
    </Button>
  );
};

const SocialLoginOptions: React.FC = () => {
  console.log('SocialLoginOptions loaded');

  const handleSocialLogin = (provider: string) => {
    console.log(`Attempting social login with ${provider}`);
    // In a real application, this would trigger the OAuth flow for the respective provider.
    // For demonstration, we'll just show an alert.
    alert(`Social login with ${provider} selected (not implemented).`);
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <SocialLoginButton
          providerName="Google"
          icon={<Chrome className="h-5 w-5" />}
          onClick={() => handleSocialLogin('Google')}
        />
        <SocialLoginButton
          providerName="Facebook"
          icon={<Facebook className="h-5 w-5" />}
          onClick={() => handleSocialLogin('Facebook')}
        />
        <SocialLoginButton
          providerName="GitHub"
          icon={<Github className="h-5 w-5" />}
          onClick={() => handleSocialLogin('GitHub')}
        />
      </div>
    </div>
  );
};

export default SocialLoginOptions;