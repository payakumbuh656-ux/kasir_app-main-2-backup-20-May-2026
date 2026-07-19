import React from "react";

import type { SettingsTab } from "../../types/settings";
import { SETTINGS_MENUS } from "./settingsMenus";

interface SettingsMenuProps {
  settingsTab: SettingsTab;
  setSettingsTab: React.Dispatch<React.SetStateAction<SettingsTab>>;
}

export default function SettingsMenu({
  settingsTab,
  setSettingsTab,
}: SettingsMenuProps) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      {SETTINGS_MENUS.map((menu) => {
        const Icon = menu.icon;

        return (
          <button
            key={menu.id}
            type="button"
            onClick={() => setSettingsTab(menu.id)}
            className={`rounded-2xl border p-5 text-left shadow-sm transition-all duration-200 ${
              settingsTab === menu.id
                ? "border-indigo-500 bg-indigo-50"
                : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md"
            }`}
          >
            <Icon
              size={32}
              className={
                settingsTab === menu.id ? "text-indigo-600" : "text-slate-500"
              }
            />

            <h3 className="mt-3 font-bold text-slate-800">{menu.title}</h3>

            <p className="mt-1 text-sm text-slate-500">{menu.subtitle}</p>
          </button>
        );
      })}
    </div>
  );
}
