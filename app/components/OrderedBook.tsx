'use client';
import Image from 'next/image';
import { Badge } from './ui/Badge';
import React, { useState, useEffect } from 'react';
import { IBook } from '../models/book';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function OrderedBook({
  id,
  count,
}: {
  id: string;
  count: number;
}) {
  const { data } = useQuery({
    queryKey: ['books/', id],
    queryFn: () => axios.get<{ book: IBook }>(`/api/books/${id}`),
  });

  const book = data?.data.book;

  return (
    book && (
      <div className="flex space-x-1 items-center">
        <div className="flex items-start flex-1">
          <div className="w-28">
            <div className="w-full aspect-w-3 aspect-h-3">
              <Image
                alt={book.title}
                src={book.coverImage || book.imageUrl}
                width={100}
                height={100}
                className="object-contain"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-semibold line-clamp-2">{book.title}</h4>
            <div className="text-gray-500 text-sm mt-1">
              {new Date().toLocaleDateString('vi-VN')}
            </div>
            <Badge variant="outline" className="mt-4">
              x{count}
            </Badge>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-gray-300 line-through font-medium">
            {(book.price || 100000).toLocaleString()}đ
          </span>

          <span className="text-primary-700 text-lg font-bold">
            {((book.price || 100000) - (book.discount || 1000)).toLocaleString(
              'vi-VN',
            )}
            đ
          </span>
        </div>
      </div>
    )
  );
}
