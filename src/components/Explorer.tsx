import React, { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, MoreHorizontal, Plus, FolderPlus } from 'lucide-react';
import { FileNode } from '../types';

interface FileTreeProps {
  node: FileNode;
  onFileClick: (node: FileNode) => void;
  depth?: number;
}

const FileTreeItem: React.FC<FileTreeProps> = ({ node, onFileClick, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(node.isOpen ?? false);

  const toggle = (e: React.MouseEvent) => {
    if (node.type === 'folder') {
      e.stopPropagation();
      setIsOpen(!isOpen);
    } else {
      onFileClick(node);
    }
  };

  return (
    <div className="select-none">
      <div
        className={`flex items-center py-0.5 px-2 cursor-pointer hover:bg-[#2a2d2e] group transition-colors ${
          node.type === 'file' ? 'ml-4' : ''
        }`}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        onClick={toggle}
      >
        {node.type === 'folder' && (
          <span className="mr-1 text-[#cccccc]">
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        )}
        <span className="mr-1.5">
          {node.type === 'folder' ? (
            <Folder size={16} className="text-[#3794de]" />
          ) : (
            <File size={16} className="text-[#cccccc]" />
          )}
        </span>
        <span className="text-[#cccccc] text-xs font-medium truncate">{node.name}</span>
      </div>
      
      {node.type === 'folder' && isOpen && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTreeItem key={child.id} node={child} onFileClick={onFileClick} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

interface ExplorerProps {
  files: FileNode[];
  onFileClick: (node: FileNode) => void;
}

export const Explorer: React.FC<ExplorerProps> = ({ files, onFileClick }) => {
  return (
    <div className="w-64 h-full bg-[#252526] flex flex-col border-r border-[#333]">
      <div className="px-4 py-2 flex items-center justify-between text-[11px] text-[#bbbbbb] uppercase font-bold tracking-wider">
        <span>Explorer</span>
        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
           {/* These icons will be shown on hover in real VS Code */}
        </div>
        <MoreHorizontal size={14} className="cursor-pointer hover:text-white" />
      </div>
      
      <div className="flex-1 overflow-y-auto pt-2">
        <div className="px-4 py-1 flex items-center justify-between group cursor-pointer">
          <div className="flex items-center text-[11px] font-bold text-white">
            <ChevronDown size={14} className="mr-1" />
            <span>REACT-EXAMPLE</span>
          </div>
          <div className="flex items-center space-x-2 text-[#cccccc] opacity-0 group-hover:opacity-100 transition-opacity">
            <Plus size={14} title="New File" />
            <FolderPlus size={14} title="New Folder" />
          </div>
        </div>
        
        <div className="mt-1">
          {files.map((file) => (
            <FileTreeItem key={file.id} node={file} onFileClick={onFileClick} />
          ))}
        </div>
      </div>
    </div>
  );
};
