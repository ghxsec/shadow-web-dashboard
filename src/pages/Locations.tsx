
import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';

const Locations = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gradient">Locations</h1>
            <p className="text-muted-foreground mt-1">
              Browse and select VPN server locations
            </p>
          </header>
          
          <div className="glass-card p-8 rounded-xl">
            <div className="text-center py-20">
              <h2 className="text-xl mb-2">Server Locations</h2>
              <p className="text-muted-foreground">
                This page would contain a map and list of all available server locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
