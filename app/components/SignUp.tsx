// SignUp.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
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
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import * as z from 'zod';
import { IUser } from '../models/user';

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
  const [isSigningUp, setIsSigningUp] = useState(false); // Track sign-up loading state

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
      setIsSigningUp(true); // Set loading state to true during sign-up
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
    } finally {
      setIsSigningUp(false); // Reset loading state after sign-up attempt
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
              <Button type="submit" className="w-full !mt-8" disabled={isSigningUp}>
                <span>{isSigningUp ? 'Đang Đăng Ký...' : 'Đăng ký'}</span>
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
              “Như thế nào là một thể xác không có tâm hồn? Đó là một căn phòng không có nổi một quyển sách.”
            </blockquote>
            <div className="text-right">– Cicero</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
