'use client'
import { signOut } from 'next-auth/react';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';

import React, { useState } from 'react';
import SignIn from '@/app/components/SignIn'; // Import your Modal component here
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

export default function ButtonSignOut() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    signOut();
  };

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
<>
      {userEmail ? (
        <button
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-pink-400 md:flex-none md:justify-start md:px-3"
          onClick={handleLogout}
        >
          {/* Heroicon for an arrow left on a rectangle */}
          <ArrowLeftOnRectangleIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      ) : (
        <button
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-pink-400 md:flex-none md:justify-start md:px-3"
          onClick={handleLogin}
        >
          {/* Heroicon for an arrow left on a rectangle */}
          <ArrowRightEndOnRectangleIcon className="w-6" />
          <div className="hidden md:block">Sign In</div>
        </button>
      )}
      <SignIn isOpen={isModalOpen} onClose={handleCloseModal} />
      </>
  );
}

