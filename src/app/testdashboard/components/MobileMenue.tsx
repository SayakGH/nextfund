import React from 'react';
import { Activity, BarChart2 } from 'lucide-react';
import { DashboardSection } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: DashboardSection;
  setActiveSection: (section: DashboardSection) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  setIsOpen, 
  activeSection, 
  setActiveSection 
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 flex z-40">
      <div 
        className="fixed inset-0 bg-gray-600 bg-opacity-75" 
        onClick={() => setIsOpen(false)}
      ></div>
      
      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            type="button"
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex items-center px-4">
            <h1 className="text-white font-bold text-xl">Dashboard</h1>
          </div>
          <nav className="mt-5 px-2 space-y-1">
            <button 
              onClick={() => {
                setActiveSection('campaigns');
                setIsOpen(false);
              }}
              className={`flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
                activeSection === 'campaigns' 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Activity className="mr-3 h-5 w-5" />
              Campaigns
            </button>
            
            <button 
              onClick={() => {
                setActiveSection('analytics');
                setIsOpen(false);
              }}
              className={`flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
                activeSection === 'analytics' 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <BarChart2 className="mr-3 h-5 w-5" />
              Analytics
            </button>
            
            <button className="flex items-center px-2 py-2 text-base font-medium rounded-md w-full text-gray-300 hover:bg-gray-700 hover:text-white">
              <span className="ml-3">Login</span>
            </button>
          </nav>
        </div>
      </div>
      
      <div className="flex-shrink-0 w-14"></div>
    </div>
  );
};

export default MobileMenu;