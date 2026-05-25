import React from "react";
import { AccessibleButton } from "./AccessibleButton";

export function Topbar() {
  return (
    <header className="flex justify-between items-center mb-8" role="banner">
      <form role="search" className="w-80">
        <label htmlFor="dashboard-search" className="sr-only">Search Here</label>
        <input
          id="dashboard-search"
          type="text"
          placeholder="Search Here"
          className="px-4 py-2 rounded-lg border border-gray-300 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        />
      </form>
      <div className="flex items-center gap-4">
        <AccessibleButton label="Notifications" icon={<span className="text-2xl">🔔</span>} />
        <AccessibleButton label="Messages" icon={<span className="text-2xl">💬</span>} />
        <div className="flex items-center gap-2">
          <span className="font-semibold">Hannah Morales</span>
          <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center" aria-label="User avatar">👤</span>
        </div>
      </div>
    </header>
  );
}
