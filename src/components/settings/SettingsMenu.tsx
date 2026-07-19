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
    <div className="mb-8 w-full overflow-x-auto">
      <div className="flex w-max gap-4 pb-2">
        {SETTINGS_MENUS.map((menu) => {
          const Icon = menu.icon;

          return (
            <button
              key={menu.id}
              type="button"
              onClick={() => setSettingsTab(menu.id)}
              className={`w-80 shrink-0 rounded-2xl border p-5 transition-all duration-200 ${
                settingsTab === menu.id
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md"
              }`}
            >
              <Icon
                size={30}
                strokeWidth={2.3}
                className={`mb-3 transition-colors ${
                  settingsTab === menu.id ? "text-indigo-600" : "text-slate-500"
                }`}
              />

              <h3 className="mt-3 font-bold text-slate-800">{menu.title}</h3>

              <p className="mt-1 text-sm text-slate-500">{menu.subtitle}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
