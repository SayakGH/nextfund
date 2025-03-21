import React from 'react';
import Image from 'next/image';
import Connection from '@/components/Connection';
import { SignedIn, UserButton} from '@clerk/nextjs';

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-slate-300 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <SignedIn>
                           <div className="hidden sm:block">
                          <UserButton/>
                          </div>
                           </SignedIn>
        </div>
        
        <Connection/>
      </div>
    </header>
  );
};

export default DashboardHeader;