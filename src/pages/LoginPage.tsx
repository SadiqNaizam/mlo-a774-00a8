import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Components
import AuthHeader from '@/components/layout/AuthHeader';
import PasswordField from '@/components/PasswordField';
import SocialLoginOptions from '@/components/SocialLoginOptions';
import AuthFooter from '@/components/layout/AuthFooter';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Icons
import { Mail, KeyRound, AlertTriangle } from 'lucide-react';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === 'test@example.com' && password === 'password') {
      console.log('Login successful for:', email);
      setSuccessMessage('Login successful! Redirecting...');
      // In a real app, you would set auth tokens and redirect.
      // For this example, we'll redirect to '/' (which is LoginPage itself in this app config)
      // or to a non-existent dashboard page that would be handled by NotFound or a future route.
      // Given App.tsx, there's no "dashboard" page. We'll clear form and show success.
      setEmail('');
      setPassword('');
      setRememberMe(false);
      setTimeout(() => {
        // navigate('/'); // Or to a dashboard page if defined
        setSuccessMessage(null); // Clear success message after a bit
      }, 2000);
    } else {
      console.error('Login failed for:', email);
      setError('Invalid email or password. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <AuthHeader />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Login Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {successMessage && (
              <Alert variant="default" className="bg-green-100 border-green-400 text-green-700">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  <Mail className="inline-block h-4 w-4 mr-2 align-text-bottom" />
                  Email or Username
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">
                    <KeyRound className="inline-block h-4 w-4 mr-2 align-text-bottom" />
                    Password
                  </Label>
                </div>
                <PasswordField
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-10" // Ensure consistent height with Input
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(Boolean(checked))}
                    disabled={isLoading}
                  />
                  <Label htmlFor="remember-me" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
                <Link
                  to="/password-recovery" // Path from App.tsx
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full h-10" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
            <SocialLoginOptions />
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center text-sm">
            <p>
              Don&apos;t have an account?{' '}
              <Link
                to="/registration" // Path from App.tsx
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
      <AuthFooter />
    </div>
  );
};

export default LoginPage;