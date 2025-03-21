
export interface Campaign {
    id: number;
    title: string;
    description: string;
    status: 'active' | 'pending' | 'draft';
    progress: number;
  }
  
  export interface CampaignCardProps {
    title: string;
    description: string;
    status: 'active' | 'pending' | 'draft';
    progress: number;
  }
  
  export type DashboardSection = 'campaigns' | 'analytics';