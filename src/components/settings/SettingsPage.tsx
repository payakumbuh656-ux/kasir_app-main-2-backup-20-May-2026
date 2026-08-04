import type { Dispatch, SetStateAction } from "react";

import type { SettingsTab } from "../../types/settings";

import SettingsMenu from "./SettingsMenu";
import StoreSettings from "./StoreSettings";
import PrinterSettings from "./PrinterSettings";
import StaffSettings from "./StaffSettings";
import SoftwareUpdate from "./SoftwareUpdate";
import SecuritySettings from "./SecuritySettings";

interface SettingsPageProps {
  settingsTab: SettingsTab;
  setSettingsTab: Dispatch<SetStateAction<SettingsTab>>;

  setupStoreName: string;
  setSetupStoreName: Dispatch<SetStateAction<string>>;

  user: any;
  role: string;

  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;

  handleSaveStore: () => void;

  showToast: (message: string) => void;
}

export default function SettingsPage({
  settingsTab,
  setSettingsTab,

  setupStoreName,
  setSetupStoreName,

  user,
  role,

  darkMode,
  setDarkMode,

  handleSaveStore,

  showToast,
}: SettingsPageProps) {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-600">Pengaturan</h1>

        <p className="mt-2 text-slate-500">Kelola seluruh konfigurasi IndoTech POS.</p>
      </header>

      <SettingsMenu settingsTab={settingsTab} setSettingsTab={setSettingsTab} />

      {settingsTab === "store" && (
        <StoreSettings
          setupStoreName={setupStoreName}
          setSetupStoreName={setSetupStoreName}
          user={user}
          role={role}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleSaveStore={handleSaveStore}
        />
      )}

      {settingsTab === "printer" && <PrinterSettings darkMode={darkMode} />}

      {settingsTab === "staff" && <StaffSettings showToast={showToast} />}

      {settingsTab === "security" && <SecuritySettings />}

      {settingsTab === "update" && <SoftwareUpdate />}
    </>
  );
}
