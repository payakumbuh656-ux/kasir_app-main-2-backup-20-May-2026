import React from "react";
import { ImagePlus } from "lucide-react";

interface ProductImagePickerProps {
  imagePreview: string;
  onSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProductImagePicker({
  imagePreview,
  onSelect,
}: ProductImagePickerProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Foto Produk</h3>

          <p className="text-xs text-slate-500 mt-1">
            Opsional. Membantu kasir mengenali produk lebih cepat.
          </p>
        </div>

        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onSelect}
          />

          <span className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-indigo-700">
            <ImagePlus size={16} />
            Pilih Gambar
          </span>
        </label>
      </div>

      {!imagePreview && (
        <div className="mt-4 flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-sm font-medium text-slate-400">
          Belum ada gambar dipilih
        </div>
      )}

      {imagePreview && (
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
          <img
            src={imagePreview}
            alt="Preview Produk"
            className="h-24 w-full rounded-xl object-cover"
          />
        </div>
      )}
    </div>
  );
}
