import React from "react";

interface ProductImagePanelProps {
  imagePreview: string;
  onSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProductImagePanel({
  imagePreview,
  onSelect,
}: ProductImagePanelProps) {
  return (
    <aside className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-slate-50 p-6">
      <div className="flex flex-1 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-white">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview Produk"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-medium text-slate-400">
            Belum ada gambar
          </span>
        )}
      </div>

      <label className="mt-5 cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onSelect}
        />

        <div className="rounded-2xl bg-indigo-600 py-3 text-center font-bold text-white transition-all hover:bg-indigo-700">
          Pilih Gambar
        </div>
      </label>
    </aside>
  );
}