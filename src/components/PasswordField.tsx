import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils'; // Assuming cn utility is available

export interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * ClassName for the root container div of the PasswordField.
   */
  containerClassName?: string;
  /**
   * ClassName for the toggle button.
   */
  buttonClassName?: string;
  /**
   * ClassName for the icon within the toggle button.
   */
  iconClassName?: string;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ containerClassName, className, buttonClassName, iconClassName, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    console.log('PasswordField component loaded');

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className={cn("relative w-full", containerClassName)}>
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            "pr-10", // Add padding-right to make space for the button
            className // Pass through className for the input itself
          )}
          ref={ref}
          {...props} // Spread other input props (value, onChange, placeholder, id, etc.)
        />
        <Button
          type="button" // Important to prevent form submission if part of a form
          variant="ghost"
          size="icon" // Makes the button h-10 w-10 by default, fitting Input's default height
          className={cn(
            "absolute inset-y-0 right-0 flex items-center justify-center text-muted-foreground hover:text-foreground",
            // No explicit w-10/h-10 needed due to size="icon"
            // Using inset-y-0 and flex for vertical centering within the input's height
            buttonClassName
          )}
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
          // tabIndex={-1} // Consider adding if you don't want the button in the tab order
        >
          {showPassword ? (
            <EyeOff className={cn("h-4 w-4", iconClassName)} />
          ) : (
            <Eye className={cn("h-4 w-4", iconClassName)} />
          )}
        </Button>
      </div>
    );
  }
);

PasswordField.displayName = "PasswordField";

export default PasswordField;