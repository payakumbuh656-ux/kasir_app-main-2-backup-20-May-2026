import { ReactNode } from "react";

interface OperatorGateProps {
  open: boolean;
  children: ReactNode;
}

export default function OperatorGate({ open, children }: OperatorGateProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900/20">
      <div className="flex h-screen items-center justify-center px-4">{children}</div>
    </div>
  );
}
