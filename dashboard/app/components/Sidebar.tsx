import React from "react";
import styles from "./sidebar.module.css";

const menuItems = [
  { label: "Dashboard", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg> },
  { label: "Transaction", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 1v6h6"/><path d="M7 23v-6H1"/><path d="M20.49 9.51A9 9 0 1 1 12 3v0"/></svg> },
  { label: "Payment", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M2 11h20"/></svg> },
  { label: "My Card", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg> },
];

const preferenceItems = [
  { label: "Account", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg> },
  { label: "Help & Support", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg> },
  { label: "Log Out", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7"/><path d="M3 21V3a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4"/></svg> },
];

export function Sidebar({ onLogout, onNavigate, activePanel }: { onLogout: () => void, onNavigate: (panel: string) => void, activePanel: string }) {
  return (
    <nav className={styles.sidebar} aria-label="Sidebar">
      <div className={styles["sidebar-logo"]}>
        <div className={styles["sidebar-logo-icon"]}> 
          <span>S</span>
        </div>
        <span className={styles["sidebar-logo-title"]}>Studio Shodwe</span>
      </div>
      <div className={styles["sidebar-balance"]} aria-live="polite">
        <span style={{ fontSize: 14, fontWeight: 400 }}>Balance</span>
        <span>$123,456,789</span>
      </div>
      <div className={styles["sidebar-section"]}>
        <div className={styles["sidebar-section-title"]}>Menu</div>
        <hr className={styles["sidebar-divider"]} />
        <ul className={styles["sidebar-menu"]} role="menu">
          {menuItems.map((item) => (
            <li key={item.label} role="none">
              <button
                className={styles["sidebar-menu-item"] + (activePanel === item.label ? ' ' + styles.active : '')}
                tabIndex={0}
                role="menuitem"
                aria-current={activePanel === item.label ? 'page' : undefined}
                onClick={() => onNavigate(item.label)}
              >
                <span className={styles["sidebar-menu-icon"]}>{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["sidebar-preference"]}>
        <div className={styles["sidebar-section-title"]}>Preference</div>
        <hr className={styles["sidebar-divider"]} />
        <ul className={styles["sidebar-menu"]} role="menu">
          {preferenceItems.map((item) => (
            <li key={item.label} role="none">
              <button
                className={styles["sidebar-menu-item"]}
                tabIndex={0}
                role="menuitem"
                onClick={item.label === "Log Out" ? onLogout : undefined}
              >
                <span className={styles["sidebar-menu-icon"]}>{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
