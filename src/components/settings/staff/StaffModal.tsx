import { Info, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  createStaff,
  DEFAULT_STAFF_PERMISSIONS,
  hashPin,
} from "../../../modules/staff";

import type { Staff } from "../../../modules/staff";
interface StaffModalProps {
  open: boolean;
  ownerUid: string;
  onClose: () => void;
  onSaved: () => Promise<void>;

  showToast: (message: string) => void;
}

export default function StaffModal({
  open,
  ownerUid,
  onClose,
  onSaved,
  showToast,
}: StaffModalProps) {
  const [name, setName] = useState("");

  const [pin, setPin] = useState("");

  const [confirmPin, setConfirmPin] = useState("");

  const [role, setRole] = useState<"KASIR" | "SUPERVISOR" | "MANAGER">("KASIR");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    if (!name.trim()) {
      showToast("Nama staff wajib diisi.");
      return;
    }

    if (!/^\d{6}$/.test(pin)) {
      showToast("PIN harus terdiri dari 6 digit angka.");
      return;
    }

    if (pin !== confirmPin) {
      showToast("Konfirmasi PIN tidak sama.");
      return;
    }

    if (!ownerUid) {
      showToast("User tidak ditemukan.");
      return;
    }

    try {
      setSaving(true);

      const staff: Staff = {
        id: crypto.randomUUID(),
        name: name.trim(),
        pinHash: await hashPin(pin),
        role,
        active: true,
        permissions: DEFAULT_STAFF_PERMISSIONS,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await createStaff(ownerUid, staff);
      showToast("Staff berhasil ditambahkan.");

      setName("");
      setPin("");
      setConfirmPin("");
      setRole("KASIR");

      await onSaved();

      onClose();
    } catch (error) {
      console.error(error);
      showToast("Gagal menyimpan staff.");
    } finally {
      setSaving(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-sm">
      <div className="flex min-h-full items-center justify-center p-6">
        <div className="my-6 w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.20)]">
          <div className="border-b border-slate-200 px-8 py-7">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50">
                  <UserRound size={30} className="text-slate-700" />
                </div>

                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Tambah Staff
                  </h2>

                  <p className="mt-1 text-base text-slate-500">
                    Tambahkan pegawai baru ke sistem POS.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-slate-400 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mt-6 flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <Info size={22} className="mt-0.5 shrink-0 text-slate-500" />

              <p className="text-sm leading-6 text-slate-600">
                Staff akan memiliki hak akses sesuai role yang dipilih. Pastikan
                nama dan PIN sudah benar sebelum disimpan.
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Nama Staff
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama staff"
                  className="h-14 w-full rounded-2xl border border-slate-300 px-5 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  PIN
                </label>

                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Masukkan PIN"
                  className="h-14 w-full rounded-2xl border border-slate-300 px-5 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Konfirmasi PIN
                </label>

                <input
                  type="password"
                  value={confirmPin}
                  onChange={(e) => setConfirmPin(e.target.value)}
                  placeholder="Masukkan kembali PIN"
                  className="h-14 w-full rounded-2xl border border-slate-300 px-5 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Role
                </label>

                <select
                  value={role}
                  onChange={(e) =>
                    setRole(
                      e.target.value as "KASIR" | "SUPERVISOR" | "MANAGER",
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  <option value="KASIR">Kasir</option>
                  <option value="SUPERVISOR">Supervisor</option>
                  <option value="MANAGER">Manager</option>
                </select>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
              <button
                onClick={onClose}
                className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Batal
              </button>

              <button
                onClick={handleSave}
                disabled={saving}
                className="rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Menyimpan..." : "Simpan Staff"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
