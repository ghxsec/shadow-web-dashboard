
import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { ConnectionStatus } from '@/components/dashboard/ConnectionStatus';
import { ServerSelector } from '@/components/dashboard/ServerSelector';
import { NetworkStats } from '@/components/dashboard/NetworkStats';
import { QuickSettings } from '@/components/dashboard/QuickSettings';

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Monitor and manage your VPN connection
            </p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ConnectionStatus />
            </div>
            <div>
              <ServerSelector />
            </div>
            <div>
              <NetworkStats />
            </div>
            <div>
              <QuickSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
