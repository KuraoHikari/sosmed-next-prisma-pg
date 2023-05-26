'use client';

import { useLoginModal, useRegisterModal } from '@/app/hooks';
import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const logOut = useCallback(async () => {
    await signOut();
  }, [router, currentUser]);

  return (
    <nav
      className="
        bg-white
        fixed 
        shadow-sm
        w-full 
        z-10

        dark:bg-slate-800"
    >
      <div
        className="
          container 
          flex 
          items-center 
          justify-center 
          mx-auto
          p-6  
          text-gray-600 
          dark:text-gray-300"
      >
        {/* <div
          className="
        border-b-2 
        border-blue-500 
        mx-1.5
        text-gray-800  
         
        dark:text-gray-200 
        
        sm:mx-6 "
        >
          Home
        </div> */}
        <MenuItem label="Home" onClick={() => router.push('/')} />
        {currentUser && (
          <>
            <MenuItem label="Friend" onClick={() => router.push('/friend')} />

            <MenuItem label="Log-out" onClick={logOut} />
          </>
        )}

        {!currentUser && (
          <>
            <MenuItem label="Register" onClick={registerModal.onOpen} />
            <MenuItem label="Log-in" onClick={loginModal.onOpen} />
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
