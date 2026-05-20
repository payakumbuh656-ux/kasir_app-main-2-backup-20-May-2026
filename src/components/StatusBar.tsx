import React from 'react';
import { GitBranch, Wifi, Bell, CheckCircle2 } from 'lucide-react';

export const StatusBar: React.FC = () => {
  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center px-3 justify-between text-[11px] select-none flex-shrink-0">
      <div className="flex items-center h-full">
        <div className="flex items-center h-full px-2 hover:bg-white/10 cursor-pointer transition-colors space-x-1">
          <GitBranch size={12} />
          <span>main*</span>
        </div>
        <div className="flex items-center h-full px-2 hover:bg-white/10 cursor-pointer transition-colors space-x-1">
          <Wifi size={12} />
          <span>0.0.0.0:3000</span>
        </div>
      </div>

      <div className="flex items-center h-full">
        <div className="flex items-center h-full px-2 hover:bg-white/10 cursor-pointer transition-colors space-x-1">
          <CheckCircle2 size={12} />
          <span>Prettier</span>
        </div>
        <div className="flex items-center h-full px-2 hover:bg-white/10 cursor-pointer transition-colors">
          <span>UTF-8</span>
        </div>
        <div className="flex items-center h-full px-2 hover:bg-white/10 cursor-pointer transition-colors">
          <span>TypeScript JSX</span>
        </div>
        <div className="flex items-center h-full px-2 hover:bg-white/10 cursor-pointer transition-colors">
          <Bell size={12} />
        </div>
      </div>
    </div>
  );
};
