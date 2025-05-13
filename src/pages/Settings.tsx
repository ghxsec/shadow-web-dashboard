
import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';

const Settings = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gradient">Settings</h1>
            <p className="text-muted-foreground mt-1">
              Configure your VPN preferences
            </p>
          </header>
          
          <div className="glass-card p-8 rounded-xl">
            <div className="text-center py-20">
              <h2 className="text-xl mb-2">Settings Page</h2>
              <p className="text-muted-foreground">
                This page would contain various VPN configuration options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
