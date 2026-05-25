import React from "react";
import { AccessibleButton } from "./AccessibleButton";

const menuItems = [
  { label: "Dashboard", icon: "▦" },
  { label: "Transaction", icon: "💸" },
  { label: "Payment", icon: "💳" },
  { label: "My Card", icon: "👜" },
];

const preferenceItems = [
  { label: "Account", icon: "👤" },
  { label: "Help & Support", icon: "❓" },
  { label: "Log Out", icon: "↩️" },
];

export function Sidebar() {
  return (
    <nav aria-label="Sidebar" className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col p-6 bg-opacity-90 backdrop-blur-md">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-indigo-900 font-bold text-xl">S</span>
        </div>
        <span className="font-bold text-xl">Studio Shodwe</span>
      </div>
      <div className="bg-pink-600 rounded-xl p-4 mb-8" aria-live="polite">
        <div className="text-sm">Balance</div>
        <div className="text-2xl font-bold">$123,456,789</div>
      </div>
      <div className="mb-4">
        <div className="font-semibold mb-2">Menu</div>
        <ul className="space-y-2" role="menu">
          {menuItems.map((item) => (
            <li key={item.label} role="none">
              <AccessibleButton
                label={item.label}
                icon={<span>{item.icon}</span>}
                className="w-full flex items-center gap-2 cursor-pointer hover:text-cyan-400 px-2 py-2 rounded-lg text-left"
                tabIndex={0}
                role="menuitem"
              >
                {item.label}
              </AccessibleButton>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <div className="font-semibold mb-2">Preference</div>
        <ul className="space-y-2" role="menu">
          {preferenceItems.map((item) => (
            <li key={item.label} role="none">
              <AccessibleButton
                label={item.label}
                icon={<span>{item.icon}</span>}
                className="w-full flex items-center gap-2 cursor-pointer hover:text-cyan-400 px-2 py-2 rounded-lg text-left"
                tabIndex={0}
                role="menuitem"
              >
                {item.label}
              </AccessibleButton>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
