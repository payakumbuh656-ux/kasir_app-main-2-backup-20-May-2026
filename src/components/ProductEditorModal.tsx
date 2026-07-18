import React from "react";

interface ProductEditorModalProps {
  children: React.ReactNode;
  darkMode: boolean;
  imagePanelOpen?: boolean;
}

export default function ProductEditorModal({
  children,
  imagePanelOpen = false,
}: ProductEditorModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div
        className={`flex w-full items-center justify-center gap-6 transition-all duration-300 ${
          imagePanelOpen ? "max-w-7xl" : "max-w-lg"
        }`}
      >
        {children}
      </div>
    </div>
  );
}