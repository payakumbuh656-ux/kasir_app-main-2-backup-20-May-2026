import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

export default function HistoryDialog({
  children,
  labelId,
  darkMode,
  onClose,
  busy = false,
}: {
  children: ReactNode;
  labelId: string;
  darkMode: boolean;
  onClose: () => void;
  busy?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);
  return createPortal(
    <dialog
      ref={ref}
      aria-labelledby={labelId}
      aria-busy={busy}
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget && !busy) onClose();
      }}
      className={`m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-3xl border p-0 shadow-2xl backdrop:bg-slate-950/50 ${darkMode ? "border-slate-700 bg-slate-900 text-slate-100" : "border-slate-200 bg-white text-slate-900"}`}
    >
      <div className="p-5 sm:p-6">{children}</div>
    </dialog>,
    document.body
  );
}
