import { useEffect, useMemo, useRef, useState } from "react";

interface CategoryComboboxProps {
  value: string;
  categories: string[];
  onChange: (value: string) => void;
  onAddCategory: (value: string) => void;
}

export default function CategoryCombobox({ value, categories, onChange, onAddCategory }: CategoryComboboxProps) {
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

  const filteredCategories = useMemo(() => {
    if (!keyword.trim()) return categories;

    const text = keyword.toLowerCase();

    return categories.filter((item) => item.toLowerCase().includes(text));
  }, [keyword, categories]);

  return (
    <div className="relative" ref={wrapperRef}>
      <input
        type="text"
        value={keyword}
        placeholder="Pilih atau ketik kategori..."
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
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-slate-100"
                  onClick={() => {
                    setKeyword(category);
                    onChange(category);
                    setIsOpen(false);
                  }}
                >
                  {category}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-slate-400">Tidak ada kategori</div>
            )}
          </div>

          <div className="border-t">
            <button
              type="button"
              className="w-full text-left px-4 py-3 text-indigo-600 hover:bg-indigo-50 font-semibold"
              onClick={() => onAddCategory(keyword)}
            >
              + Tambah Kategori
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
