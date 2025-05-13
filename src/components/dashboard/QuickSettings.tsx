
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { Shield, Zap } from 'lucide-react';

interface SettingItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}

const SettingItem = ({ icon: Icon, title, description, enabled, onToggle }: SettingItemProps) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-start gap-3">
        <div className={cn(
          "mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center",
          enabled ? "bg-vpn/20" : "bg-secondary"
        )}>
          <Icon className={cn(
            "h-4 w-4", 
            enabled ? "text-vpn" : "text-muted-foreground"
          )} />
        </div>
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <Switch 
        checked={enabled} 
        onCheckedChange={onToggle}
        className={cn("data-[state=checked]:bg-vpn")} 
      />
    </div>
  );
};

export function QuickSettings() {
  const [killSwitch, setKillSwitch] = React.useState(true);
  const [autoConnect, setAutoConnect] = React.useState(false);
  
  return (
    <div className="glass-card p-6 rounded-xl">
      <h2 className="text-xl font-medium mb-6">Quick Settings</h2>
      
      <div className="space-y-2 divide-y divide-border">
        <SettingItem
          icon={Shield}
          title="Kill Switch"
          description="Block all traffic if VPN disconnects"
          enabled={killSwitch}
          onToggle={() => setKillSwitch(!killSwitch)}
        />
        
        <SettingItem
          icon={Zap}
          title="Auto-connect"
          description="Connect VPN when system starts"
          enabled={autoConnect}
          onToggle={() => setAutoConnect(!autoConnect)}
        />
      </div>
    </div>
  );
}
