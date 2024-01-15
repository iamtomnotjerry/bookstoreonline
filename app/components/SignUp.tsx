// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// interface SignUpProps {
//   onClose: () => void;
// }

// const SignUp: React.FC<SignUpProps> = ({ onClose }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }
//     if (!name) {
//       toast.error('Name is required');
//       return;
//     }
//     try {
//       setIsSubmitting(true);
//       const resUserExists = await fetch('/api/auth/check-exist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email })
//       });
//       const { user } = await resUserExists.json();
//       if (user) {
//         toast.error('User already exists.', {
//           autoClose: 1000,
//           position: toast.POSITION.TOP_RIGHT
//         });
//         return;
//       }
//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password
//         })
//       });
//       if (res.ok) {
//         const form = e.target as HTMLFormElement;
//         form.reset();
//         toast.success('Registration successful!', {
//           autoClose: 1000,
//           position: toast.POSITION.TOP_RIGHT
//         });
//         setName('');
//         setEmail('');
//         setPassword('');
//         onClose(); // Close the modal on successful registration
//       } else {
//         toast.error('Registration failed. Please try again.', {
//           autoClose: 1000,
//           position: toast.POSITION.TOP_RIGHT
//         });
//       }
//     } catch (error) {
//       console.error('Error during registration: ', error);
//       toast.error('Error during registration. Please try again.', {
//         autoClose: 1000,
//         position: toast.POSITION.TOP_RIGHT
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-hidden">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-400 to-indigo-500">
//           <h3 className="text-2xl font-semibold text-white">Sign Up</h3>
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
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="px-6 py-8">
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Your Name"
//               />
//             </div>
//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="YourEmail@example.com"
//               />
//             </div>
//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="********"
//               />
//             </div>
//             {/* Confirm Password Field */}
//             <div>
//               <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <input
//                 id="confirm-password"
//                 name="confirm-password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="********"
//               />
//             </div>
//             {/* Sign Up Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

//               >
//                 {isSubmitting ? 'Signing Up...' : 'Sign Up'}
//               </button>
//             </div>
//           </form>
//           {/* Sign In Link */}
//           <div className="mt-4 text-sm text-center">
//             <p>
//               Already have an account?{' '}
//               <button
//                 onClick={onClose}
//                 className="text-purple-500 hover:underline focus:outline-none"
//               >
//                 Sign in
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/Button';
import { Dialog, DialogContent, DialogTrigger } from './ui/Dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/Form';
import { Input } from './ui/Input';
import axios from 'axios';
import { IUser } from '../models/user';
import { useToast } from '../lib/hooks/use-toast';
import { useState } from 'react';
import { toast } from 'react-toastify';

const formSchema = z.object({
  name: z.string().min(1, 'Vui lòng nhập tên'),
  email: z.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
  password: z
    .string()
    .min(1, 'Vui lòng nhập mật khẩu')
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Mật khẩu chưa đủ mạnh'),
});

export default function SignUp({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit({
    email,
    name,
    password,
  }: z.infer<typeof formSchema>) {
    try {
      const userExist = await axios.post<{ user: IUser | null }>(
        '/api/auth/check-exist',
        {
          email,
        },
      );
      if (userExist.data.user) {
        form.setError('email', { message: 'Email đã tồn tại' });
        form.setFocus('email');
        toast.error('Email đã tồn tại');
      } else {
        await axios.post('/api/auth/signup', {
          name,
          email,
          password,
        });
        toast.success('Đăng ký thành công');
        setOpen(false);
      }
    } catch {
      toast.error('Đăng ký thất bại. Vui lòng thử lại sau');
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="grid grid-cols-1 md:grid-cols-[repeat(13,minmax(0,1fr))] gap-0 max-w-[calc(100vw-2rem)] md:max-w-3xl p-0 border-none overflow-hidden">
        <div className="md:col-span-7 p-5">
          <h2 className="text-2xl text-primary-700 font-bold">Đăng ký</h2>
          <h3 className="mt-4 mb-6">Đăng ký để bắt đầu mua sắm sách nhé!</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên</FormLabel>

                    <FormControl>
                      <Input placeholder="Nhập tên của bạn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
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
                <span>Đăng kí</span>
                <ChevronRightIcon className="h-4 ml-3" />
              </Button>
            </form>
          </Form>
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
