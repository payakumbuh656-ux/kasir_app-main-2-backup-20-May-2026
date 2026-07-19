import type { LucideIcon } from "lucide-react";
import {
  Printer,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

import type { SettingsTab } from "../../types/settings";

export interface SettingsMenuItem {
  id: SettingsTab;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export const SETTINGS_MENUS: SettingsMenuItem[] = [
  {
    id: "store",
    title: "Toko",
    subtitle: "Profil & Identitas",
    icon: Store,
  },
  {
    id: "printer",
    title: "Printer",
    subtitle: "Thermal Printer",
    icon: Printer,
  },
  {
    id: "staff",
    title: "Staff",
    subtitle: "Kelola Pegawai",
    icon: Users,
  },
  {
    id: "security",
    title: "Security",
    subtitle: "PIN & Hak Akses",
    icon: ShieldCheck,
  },
];