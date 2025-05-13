
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, ChevronDown, Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Server {
  id: string;
  city: string;
  country: string;
  latency: number;
}

const servers: Server[] = [
  { id: "jp-1", city: "Tokyo", country: "Japan", latency: 32 },
  { id: "sg-1", city: "Singapore", country: "Singapore", latency: 48 },
  { id: "us-1", city: "New York", country: "United States", latency: 95 },
  { id: "us-2", city: "Los Angeles", country: "United States", latency: 87 },
  { id: "uk-1", city: "London", country: "United Kingdom", latency: 110 },
  { id: "de-1", city: "Frankfurt", country: "Germany", latency: 75 },
  { id: "au-1", city: "Sydney", country: "Australia", latency: 125 },
];

export function ServerSelector() {
  const [selectedServer, setSelectedServer] = useState<string>("jp-1");

  return (
    <div className="glass-card p-6 rounded-xl">
      <h2 className="text-xl font-medium mb-6">Server Location</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="h-5 w-5 text-vpn" />
          <span>Select a server location</span>
        </div>
        
        <Select value={selectedServer} onValueChange={setSelectedServer}>
          <SelectTrigger className="bg-secondary border-none w-full h-12">
            <SelectValue placeholder="Select a server" />
          </SelectTrigger>
          <SelectContent className="bg-background border-border">
            <SelectGroup>
              <SelectLabel className="text-muted-foreground">Recommended</SelectLabel>
              {servers.slice(0, 2).map((server) => (
                <SelectItem key={server.id} value={server.id} className="py-2.5">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="mr-2">{server.city}, {server.country}</span>
                    </div>
                    <span className={cn(
                      "text-xs px-1.5 py-0.5 rounded",
                      server.latency < 50 ? "bg-green-500/20 text-green-500" :
                      server.latency < 100 ? "bg-yellow-500/20 text-yellow-500" :
                      "bg-red-500/20 text-red-500"
                    )}>
                      {server.latency} ms
                    </span>
                  </div>
                </SelectItem>
              ))}
              <SelectLabel className="text-muted-foreground mt-2">All Locations</SelectLabel>
              {servers.slice(2).map((server) => (
                <SelectItem key={server.id} value={server.id} className="py-2.5">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="mr-2">{server.city}, {server.country}</span>
                    </div>
                    <span className={cn(
                      "text-xs px-1.5 py-0.5 rounded",
                      server.latency < 50 ? "bg-green-500/20 text-green-500" :
                      server.latency < 100 ? "bg-yellow-500/20 text-yellow-500" :
                      "bg-red-500/20 text-red-500"
                    )}>
                      {server.latency} ms
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        
        {selectedServer && (
          <div className="mt-4 p-4 border border-border rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Current server</div>
                <div className="font-medium">
                  {servers.find(s => s.id === selectedServer)?.city}, 
                  {servers.find(s => s.id === selectedServer)?.country}
                </div>
              </div>
              <div className={cn(
                "text-xs px-2 py-1 rounded-full",
                "bg-vpn/20 text-vpn font-medium"
              )}>
                Optimal
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
