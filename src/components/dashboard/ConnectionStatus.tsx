
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { Lock, Unlock } from 'lucide-react';

export function ConnectionStatus() {
  const [isConnected, setIsConnected] = useState(false);

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className={cn(
      "glass-card p-6 rounded-xl relative overflow-hidden",
      isConnected && "border-vpn/30"
    )}>
      {isConnected && (
        <div className="absolute inset-0 bg-gradient-radial from-vpn/20 to-transparent opacity-30" />
      )}
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Connection Status</h2>
        <Switch 
          checked={isConnected} 
          onCheckedChange={toggleConnection}
          className={cn(
            "data-[state=checked]:bg-vpn",
            isConnected && "glow animate-pulse-glow"
          )} 
        />
      </div>
      
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center",
          isConnected ? "bg-vpn/20" : "bg-secondary"
        )}>
          {isConnected ? (
            <Lock className="h-8 w-8 text-vpn" />
          ) : (
            <Unlock className="h-8 w-8 text-muted-foreground" />
          )}
        </div>
        
        <div>
          <h3 className={cn(
            "text-2xl font-semibold", 
            isConnected ? "text-vpn" : "text-muted-foreground"
          )}>
            {isConnected ? "Connected" : "Disconnected"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {isConnected 
              ? "Your connection is secure" 
              : "Your connection is not protected"
            }
          </p>
        </div>
      </div>
      
      {isConnected && (
        <div className="mt-6 pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Server</div>
              <div>Tokyo, Japan</div>
            </div>
            <div>
              <div className="text-muted-foreground">IP Address</div>
              <div>192.168.1.XXX</div>
            </div>
            <div>
              <div className="text-muted-foreground">Protocol</div>
              <div>WireGuard</div>
            </div>
            <div>
              <div className="text-muted-foreground">Uptime</div>
              <div>00:45:12</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
