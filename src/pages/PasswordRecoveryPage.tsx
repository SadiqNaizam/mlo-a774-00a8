import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/layout/AuthHeader'; // Custom component
import AuthFooter from '@/components/layout/AuthFooter'; // Custom component
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MailCheck, AlertTriangle, Loader2 } from 'lucide-react';

const PasswordRecoveryPage: React.FC = () => {
  console.log('PasswordRecoveryPage loaded');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === 'test@example.com') { // Simulate successful email submission
      setMessage({ type: 'success', text: 'If an account with this email exists, a password recovery link has been sent.' });
      setEmail(''); // Clear input on success
    } else if (email === '') {
      setMessage({ type: 'error', text: 'Email address cannot be empty.' });
    }
    else { // Simulate email not found or other error
      setMessage({ type: 'error', text: 'Could not process request. Please try again.' });
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <AuthHeader />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Forgot Your Password?</CardTitle>
            <CardDescription>
              No worries! Enter your email address below and we'll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
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

              {message && (
                <Alert variant={message.type === 'error' ? 'destructive' : 'default'} className={message.type === 'success' ? 'bg-green-50 border-green-300 text-green-700' : ''}>
                  {message.type === 'success' ? <MailCheck className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                  <AlertDescription className="ml-2">{message.text}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full h-10" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Recovery Link'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2 pt-4">
            <Link
              to="/" // Navigate to LoginPage as per App.tsx
              className="text-sm text-primary hover:underline"
            >
              Remembered your password? Login
            </Link>
             <Link
              to="/registration" // Navigate to RegistrationPage as per App.tsx
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              Don't have an account? Sign Up
            </Link>
          </CardFooter>
        </Card>
      </main>
      <AuthFooter />
    </div>
  );
};

export default PasswordRecoveryPage;