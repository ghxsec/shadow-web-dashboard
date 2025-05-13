
import React from 'react';
import { Activity, ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

export function NetworkStats() {
  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Network Statistics</h2>
        <Activity className="h-5 w-5 text-vpn" />
      </div>
      
      <div className="space-y-6">
        {/* Download Speed */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <ArrowDown className="h-4 w-4 mr-2 text-green-500" />
              <span className="text-sm">Download</span>
            </div>
            <span className="text-sm font-medium">24.5 MB/s</span>
          </div>
          <Progress value={65} className="h-1.5 bg-secondary">
            <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
          </Progress>
        </div>
        
        {/* Upload Speed */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <ArrowUp className="h-4 w-4 mr-2 text-vpn" />
              <span className="text-sm">Upload</span>
            </div>
            <span className="text-sm font-medium">8.2 MB/s</span>
          </div>
          <Progress value={40} className="h-1.5 bg-secondary">
            <div className="h-full bg-gradient-to-r from-vpn to-vpn-light rounded-full" />
          </Progress>
        </div>
        
        {/* Session Stats */}
        <div className="pt-4 border-t border-border mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground mb-1">Downloaded</div>
              <div className="font-mono font-medium">1.45 GB</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground mb-1">Uploaded</div>
              <div className="font-mono font-medium">258 MB</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground mb-1">Latency</div>
              <div className="font-mono font-medium">32 ms</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground mb-1">Encryption</div>
              <div className="font-mono font-medium">AES-256</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
