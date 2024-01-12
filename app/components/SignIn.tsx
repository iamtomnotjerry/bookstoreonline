import React, { useState } from 'react';
import SignUp from './SignUp';
import Reset from './Reset';
import { SignInResponse, signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [showReset, setShowReset] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res: SignInResponse | undefined = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        toast.error('Sign-in failed');
      } else {
        toast.success('Sign-in successful');
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred');
    }
    setLoading(false);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowSignUp(true);
    setShowReset(false);
  };

  const handleForgotPasswordClick = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowReset(true);
  };

  const handleBackToSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
    setShowReset(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-indigo-600">
          <h3 className="text-2xl font-semibold text-white">{showSignIn ? 'Sign In' : 'Sign Up'}</h3>
          <button
            className="text-white hover:text-gray-200 focus:outline-none"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-8">
          {showSignIn && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="YourEmail@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="********"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
              <div className="mt-4 text-sm text-center">
                <p>
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={handleSignUpClick}
                    className="text-indigo-600 hover:underline focus:outline-none"
                  >
                    Sign Up
                  </button>
                </p>
                <p>
                  <button
                    onClick={handleForgotPasswordClick}
                    className="text-indigo-600 hover:underline focus:outline-none"
                  >
                    Forgot Your Password?
                  </button>
                </p>
              </div>
            </form>
          )}
          {showSignUp && <SignUp onClose={handleBackToSignInClick} />}
          {showReset && <Reset onClose={handleBackToSignInClick} />}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
