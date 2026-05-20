export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  content?: string;
  language?: string;
  isOpen?: boolean;
}

export type SidebarTab = 'explorer' | 'search' | 'git' | 'extensions' | 'settings';
