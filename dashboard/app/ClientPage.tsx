"use client";
import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { DashboardMain } from "./components/DashboardMain";
import { useState } from "react";
import Login from "./components/Login";

// Move ComingSoon above ClientPage
function ComingSoon({ title }: { title: string }) {
  return (
    <div style={{ color: '#fff', background: '#222', borderRadius: 16, padding: 32, margin: 32, textAlign: 'center', fontSize: 24, fontWeight: 600 }}>
      {title} — Coming Soon!
    </div>
  );
}

export default function ClientPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePanel, setActivePanel] = useState("Dashboard");
  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }
  function renderPanel() {
    if (activePanel === "Dashboard") return <DashboardMain />;
    if (activePanel === "Transaction") return <ComingSoon title="Transaction" />;
    if (activePanel === "Payment") return <ComingSoon title="Payment" />;
    if (activePanel === "My Card") return <ComingSoon title="My Card" />;
    return <DashboardMain />;
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
      </div>
      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'row', height: '100vh', minHeight: 0 }}>
        <Sidebar activePanel={activePanel} onNavigate={setActivePanel} onLogout={() => setLoggedIn(false)} />
        <div style={{ flex: 1, minHeight: 0, margin: 0, padding: 0, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
          <Topbar onLogout={() => setLoggedIn(false)} />
          {renderPanel()}
        </div>
      </div>
    </div>
  );
}