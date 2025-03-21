
'use client';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';

// Import types
import { Campaign, DashboardSection } from './types';

// Import components
import DashboardHeader from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import MobileMenu from '@/app/testdashboard/components/MobileMenue';
import { useActiveAccount, useReadContract } from 'thirdweb/react';
import { client } from '../client';
import { polygonAmoy } from 'thirdweb/chains';
import { CROWDFUNDINFFACTORY } from '../constants/contracts';
import { getContract } from 'thirdweb';
import { MyCampaignCard } from '@/components/MyCampaignCard';



export default function Dashboard() {
    const account = useActiveAccount();
  const [activeSection, setActiveSection] = useState<DashboardSection>('campaigns');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const contract= getContract({
          client:client,
          chain:polygonAmoy,
          address:CROWDFUNDINFFACTORY
      });
  
      const { data: myCampaigns, isPending : isLoadingMyCampaigns} = useReadContract({
          contract,
          method:
            "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
          params: [],
        });
  
  return (

    <div className="flex h-screen bg-purple-950 text-white">
      {/* Sidebar - desktop */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center p-4">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Top header */}
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">

        </div>
        
        {/* Dashboard header with user profile and connect button */}
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-white mb-4">
                {activeSection === 'campaigns' ? 'Campaigns' : 'Analytics'}
              </h1>
              <div className="grid grid-cols-3 gap-4 text-black">
                              {!isLoadingMyCampaigns && (
                                  myCampaigns && myCampaigns.length > 0 ? (
                                      myCampaigns.map((campaign, index) => (
                                          <MyCampaignCard
                                              key={index}
                                              contractAddress={campaign.campaignAddress}
                                          />
                                      ))
                                  ) : (
                                      <p>No campaigns</p>
                                  )
                              )}
                          </div>
            
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}