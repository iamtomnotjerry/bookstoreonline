// SignIn.js

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/app/components/ui/Dialog';
import SignUp from './SignUp';
import { Button } from './ui/Button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from './ui/Form';
import { Input } from './ui/Input';

const formSchema = z.object({
  email: z.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
  password: z.string().min(1, 'Vui lòng nhập mật khẩu'),
});

export default function SignIn({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false); // Track sign-in loading state

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
    try {
      setIsSigningIn(true); // Set loading state to true during sign-in
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
    } finally {
      setIsSigningIn(false); // Reset loading state after sign-in attempt
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
              <Button type="submit" className="w-full !mt-8" disabled={isSigningIn}>
                <span>{isSigningIn ? 'Đang Đăng Nhập...' : 'Đăng nhập'}</span>
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
