'use client';

// import React, { useState } from 'react';
// import SignUp from './SignUp';
// import Reset from './Reset';
// import { SignInResponse, signIn } from 'next-auth/react';
// import { toast } from 'react-toastify';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/app/components/ui/Dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// interface SignInProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const SignIn: React.FC<SignInProps> = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(true);
//   const [showReset, setShowReset] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res: SignInResponse | undefined = await signIn('credentials', {
//         email,
//         password,
//         redirect: false,
//       });
//       if (res?.error) {
//         toast.error('Sign-in failed');
//       } else {
//         toast.success('Sign-in successful');
//         onClose();
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error('An error occurred');
//     }
//     setLoading(false);
//   };

//   const handleSignUpClick = () => {
//     setShowSignIn(false);
//     setShowSignUp(true);
//     setShowReset(false);
//   };

//   const handleForgotPasswordClick = () => {
//     setShowSignIn(false);
//     setShowSignUp(false);
//     setShowReset(true);
//   };

//   const handleBackToSignInClick = () => {
//     setShowSignIn(true);
//     setShowSignUp(false);
//     setShowReset(false);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-hidden">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="flex items-center justify-between px-6 py-4 bg-indigo-600">
//           <h3 className="text-2xl font-semibold text-white">
//             {showSignIn ? 'Sign In' : 'Sign Up'}
//           </h3>
//           <button
//             className="text-white hover:text-gray-200 focus:outline-none"
//             onClick={onClose}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="px-6 py-8">
//           {showSignIn && (
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="YourEmail@example.com"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="********"
//                 />
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   {loading ? 'Signing in...' : 'Sign in'}
//                 </button>
//               </div>
//               <div className="mt-4 text-sm text-center">
//                 <p>
//                   Don&apos;t have an account?{' '}
//                   <button
//                     onClick={handleSignUpClick}
//                     className="text-indigo-600 hover:underline focus:outline-none"
//                   >
//                     Sign Up
//                   </button>
//                 </p>
//                 <p>
//                   <button
//                     onClick={handleForgotPasswordClick}
//                     className="text-indigo-600 hover:underline focus:outline-none"
//                   >
//                     Forgot Your Password?
//                   </button>
//                 </p>
//               </div>
//             </form>
//           )}
//           {showSignUp && <SignUp onClose={handleBackToSignInClick} />}
//           {showReset && <Reset onClose={handleBackToSignInClick} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import * as z from 'zod';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';
import SignUp from './SignUp';
import { Button } from './ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/Form';
import { Input } from './ui/Input';

const formSchema = z.object({
  email: z.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
  password: z.string().min(1, 'Vui lòng nhập mật khẩu'),
});

export default function SignIn({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.ok) {
        toast.success('Đăng nhập thành công');
        setOpen(false);
      } else {
        toast.error('Đăng nhập thất bại. Email hoặc mật khẩu không đúng');
      }
    } catch (error) {
      toast.error('Đăng nhập thất bại. Vui lòng thử lại sau');
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="grid grid-cols-1 md:grid-cols-[repeat(13,minmax(0,1fr))] gap-0 max-w-[calc(100vw-2rem)] md:max-w-3xl p-0 border-none overflow-hidden">
        <div className="md:col-span-7 p-5">
          <h2 className="text-2xl text-primary-700 font-bold">Đăng nhập</h2>
          <h3 className="mt-4 mb-6">Đăng nhập để bắt đầu mua sắm sách nhé!</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Nhập email của bạn"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Nhập mật khẩu của bạn"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full !mt-8">
                <span>Đăng nhập</span>
                <ChevronRightIcon className="h-4 ml-3" />
              </Button>
            </form>
          </Form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="mx-2 text-sm text-gray-500">
              Chưa có tài khoản
            </span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <SignUp>
            <Button className="w-full" variant="outline">
              <span>Đăng kí</span>
              <ChevronRightIcon className="h-4 ml-3" />
            </Button>
          </SignUp>
        </div>

        <div className="col-span-6 bg-donkey-brown-400 hidden items-center justify-center flex-col p-5 md:flex">
          <Image
            alt="books"
            src="/books.png"
            width={200}
            height={200}
            className="w-48 h-auto"
          />

          <div className="mt-4 text-white">
            <blockquote className="italic text-center">
              “Như thế nào là một thể xác không có tâm hồn? Đó là một căn phòng
              không có nổi một quyển sách.”
            </blockquote>
            <div className="text-right">– Cicero</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
