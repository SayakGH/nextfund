import React from 'react';
import { Activity, BarChart2 } from 'lucide-react';
import { DashboardSection } from '../types';

interface SidebarProps {
  activeSection: DashboardSection;
  setActiveSection: (section: DashboardSection) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900 ">
        <h1 className="text-white font-bold text-xl">Dashboard</h1>
      </div>
      
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 px-2 space-y-1">
          <button 
            onClick={() => setActiveSection('campaigns')}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md w-full ${
              activeSection === 'campaigns' 
                ? 'bg-gray-900 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <Activity className="mr-3 h-5 w-5" />
            Campaigns
          </button>
          
          <button 
            onClick={() => setActiveSection('analytics')}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md w-full ${
              activeSection === 'analytics' 
                ? 'bg-gray-900 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <BarChart2 className="mr-3 h-5 w-5" />
            Analytics
          </button>
        </nav>
      </div>
      
      <div className="flex-shrink-0 flex border-t border-gray-700 p-4">
        <button 
          className="flex-shrink-0 w-full group block"
        >
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Logout</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;