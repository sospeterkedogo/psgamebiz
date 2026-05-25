

import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { DashboardMain } from "./components/DashboardMain";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10 h-full w-full" aria-hidden="true">
        <Image
          src="/images/ps5landscapewallpaper.jpg"
          alt="Hero Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Smoke (blurred, semi-transparent) overlay for modern depth */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        {/* Subtle gradient for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 opacity-80" />
      </div>
      <div className="flex min-h-screen" role="presentation">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <DashboardMain />
        </div>
      </div>
    </div>
  );
}