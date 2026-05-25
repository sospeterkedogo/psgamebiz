"use client";
import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { DashboardMain } from "./components/DashboardMain";
import { useState } from "react";
import Login from "./components/Login";

export default function ClientPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden', height: '100vh' }}>
      {/* Hero Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -10, height: '100%', width: '100%' }} aria-hidden="true">
        <Image
          src="/images/ps5landscapewallpaper.jpg"
          alt="Hero Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Simple overlay for depth */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
      </div>
      <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'row', flexWrap: 'wrap' }} role="presentation">
        <Sidebar onLogout={() => setLoggedIn(false)} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <Topbar />
          <DashboardMain />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .sidebar { width: 100vw !important; min-width: 0 !important; }
          .topbar { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 600px) {
          .sidebar { width: 100vw !important; min-width: 0 !important; }
          .topbar { flex-direction: column; align-items: flex-start; }
          main { padding: 8px !important; }
        }
      `}</style>
    </div>
  );
}