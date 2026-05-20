import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { X, FileCode } from 'lucide-react';
import { FileNode } from '../types';

interface EditorProps {
  activeFile: FileNode | null;
  openFiles: FileNode[];
  onCloseFile: (fileId: string) => void;
  onFileClick: (file: FileNode) => void;
}

export const Editor: React.FC<EditorProps> = ({ activeFile, openFiles, onCloseFile, onFileClick }) => {
  if (!activeFile) {
    return (
      <div className="flex-1 bg-[#1e1e1e] flex items-center justify-center text-[#555] flex-col space-y-4">
        <img 
          src="https://raw.githubusercontent.com/microsoft/vscode/main/resources/linux/code.png" 
          className="w-32 opacity-10 grayscale" 
          alt="VS Code Logo" 
        />
        <div className="text-sm font-light">Select a file to view its content</div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs opacity-50">
          <div className="text-right">Show All Commands</div>
          <div className="font-mono bg-[#333] px-1 rounded">Ctrl+Shift+P</div>
          <div className="text-right">Go to File</div>
          <div className="font-mono bg-[#333] px-1 rounded">Ctrl+P</div>
          <div className="text-right">Find in Files</div>
          <div className="font-mono bg-[#333] px-1 rounded">Ctrl+Shift+F</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 h-full bg-[#1e1e1e] flex flex-col min-w-0">
      {/* Tabs */}
      <div className="h-9 bg-[#252526] flex overflow-x-auto no-scrollbar">
        {openFiles.map((file) => (
          <div
            key={file.id}
            onClick={() => onFileClick(file)}
            className={`flex items-center px-3 h-full border-r border-[#1e1e1e] cursor-pointer min-w-fit transition-colors group ${
              activeFile.id === file.id ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]' : 'bg-[#2d2d2d] text-[#969696] hover:bg-[#2b2b2b]'
            }`}
          >
            <FileCode size={14} className="mr-2 text-[#519aba]" />
            <span className="text-xs truncate max-w-[120px]">{file.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseFile(file.id);
              }}
              className={`ml-2 p-0.5 rounded hover:bg-[#454545] transition-opacity ${
                activeFile.id === file.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>

      {/* Editor Surface */}
      <div className="flex-1 overflow-hidden relative">
        <MonacoEditor
          height="100%"
          language={activeFile.language || 'typescript'}
          theme="vs-dark"
          value={activeFile.content || ''}
          options={{
            fontSize: 14,
            minimap: { enabled: true },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 10 },
            fontFamily: "'JetBrains Mono', monospace",
          }}
        />
      </div>
    </div>
  );
};
