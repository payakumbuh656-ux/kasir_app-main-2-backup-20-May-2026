import { useEffect, useRef } from "react";

export interface BarcodeScannerOptions {
  enabled: boolean;
  minLength?: number;
  scanTimeout?: number;
  onScan: (barcode: string) => void;
}

export default function useBarcodeScanner({
  enabled,
  minLength = 8,
  scanTimeout = 300,
  onScan,
}: BarcodeScannerOptions) {
  const bufferRef = useRef("");
  const timerRef = useRef<number>();

  useEffect(() => {
    if (!enabled) return;

    const resetBuffer = () => {
      bufferRef.current = "";
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.altKey || event.metaKey) return;

      const target = event.target as HTMLElement | null;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key === "Enter") {
        const barcode = bufferRef.current.trim();

        if (barcode.length >= minLength) {
          onScan(barcode);
        }

        resetBuffer();
        return;
      }

      if (event.key.length !== 1) return;

      bufferRef.current += event.key;

      window.clearTimeout(timerRef.current);

      timerRef.current = window.setTimeout(() => {
        resetBuffer();
      }, scanTimeout);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(timerRef.current);
    };
  }, [enabled, minLength, scanTimeout, onScan]);
}