import React from 'react';
import { Files, Search, GitBranch, Blocks, Settings, User } from 'lucide-react';
import { SidebarTab } from '../types';

interface SidebarProps {
  activeTab: SidebarTab;
  setActiveTab: (tab: SidebarTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'explorer', icon: Files, label: 'Explorer' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'git', icon: GitBranch, label: 'Source Control' },
    { id: 'extensions', icon: Blocks, label: 'Extensions' },
  ] as const;

  return (
    <div className="w-12 h-full bg-[#181818] flex flex-col items-center py-2 flex-shrink-0 border-r border-[#333]">
      <div className="flex-1 w-full space-y-2">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as SidebarTab)}
            className={`w-full h-12 flex items-center justify-center transition-colors relative group ${
              activeTab === id ? 'text-white' : 'text-[#858585] hover:text-white'
            }`}
            title={label}
          >
            {activeTab === id && (
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white" />
            )}
            <Icon size={24} strokeWidth={1.5} />
          </button>
        ))}
      </div>
      
      <div className="w-full space-y-2">
        <button className="w-full h-12 flex items-center justify-center text-[#858585] hover:text-white transition-colors" title="Accounts">
          <User size={24} strokeWidth={1.5} />
        </button>
        <button 
          onClick={() => setActiveTab('settings')}
          className={`w-full h-12 flex items-center justify-center transition-colors relative group ${
            activeTab === 'settings' ? 'text-white' : 'text-[#858585] hover:text-white'
          }`}
          title="Settings"
        >
          {activeTab === 'settings' && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white" />
          )}
          <Settings size={24} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};
