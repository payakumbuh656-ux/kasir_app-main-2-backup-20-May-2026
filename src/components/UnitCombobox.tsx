import { useEffect, useMemo, useRef, useState } from "react";

interface UnitComboboxProps {
  value: string;
  units: string[];
  onChange: (value: string) => void;
  onUseUnit: (value: string) => void;
}

export default function UnitCombobox({ value, units, onChange, onUseUnit }: UnitComboboxProps) {
  const [keyword, setKeyword] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setKeyword(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredUnits = useMemo(() => {
    if (!keyword.trim()) return units;

    const text = keyword.toLowerCase();

    return units.filter((item) => item.toLowerCase().includes(text));
  }, [keyword, units]);

  return (
    <div className="relative" ref={wrapperRef}>
      <input
        type="text"
        value={keyword}
        placeholder="Pilih atau ketik unit..."
        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
        onFocus={() => setIsOpen(true)}
        onChange={(e) => {
          setKeyword(e.target.value);
          onChange(e.target.value);
          setIsOpen(true);
        }}
      />

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-[999]">
          <div className="max-h-56 overflow-y-auto">
            {filteredUnits.length > 0 ? (
              filteredUnits.map((unit) => (
                <button
                  key={unit}
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-slate-100"
                  onClick={() => {
                    setKeyword(unit);
                    onChange(unit);
                    setIsOpen(false);
                  }}
                >
                  {unit}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-slate-400">Tidak ada unit</div>
            )}
          </div>

          <div className="border-t">
            <button
              type="button"
              className="w-full text-left px-4 py-3 text-indigo-600 hover:bg-indigo-50 font-semibold"
              onClick={() => onUseUnit(keyword)}
            >
              Gunakan "{keyword}"
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
