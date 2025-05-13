
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Shield, Settings, Globe, Activity, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, active, href }: SidebarItemProps) => {
  return (
    <Link to={href}>
      <Button
        variant="ghost"
        className={cn(
          "flex h-12 w-full items-center justify-start gap-3 rounded-lg px-4",
          "hover:bg-secondary hover:text-primary transition-colors",
          active && "bg-secondary text-primary font-medium"
        )}
      >
        <Icon size={20} />
        <span>{label}</span>
      </Button>
    </Link>
  );
};

interface DashboardSidebarProps {
  className?: string;
}

export function DashboardSidebar({ className }: DashboardSidebarProps) {
  return (
    <aside className={cn("min-h-screen w-64 border-r border-border p-4 flex flex-col", className)}>
      <div className="mb-8 flex items-center px-4">
        <Shield className="h-8 w-8 mr-2 text-vpn" />
        <h1 className="text-xl font-bold text-gradient-primary">SecureVPN</h1>
      </div>
      
      <nav className="space-y-1.5">
        <SidebarItem icon={Activity} label="Dashboard" active href="/" />
        <SidebarItem icon={Globe} label="Locations" href="/locations" />
        <SidebarItem icon={Server} label="Servers" href="/servers" />
        <SidebarItem icon={Settings} label="Settings" href="/settings" />
      </nav>
      
      <div className="mt-auto mb-4 px-4">
        <div className="rounded-lg bg-secondary p-4 flex flex-col items-center">
          <div className="mb-2 text-xs text-muted-foreground">Pro Plan</div>
          <div className="text-sm font-medium mb-3">30 days remaining</div>
          <Button size="sm" className="w-full bg-vpn hover:bg-vpn-dark">
            Upgrade
          </Button>
        </div>
      </div>
    </aside>
  );
}
