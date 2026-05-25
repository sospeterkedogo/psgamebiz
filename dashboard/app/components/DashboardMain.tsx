import React from "react";

export function DashboardMain() {
  return (
    <main style={{ flex: 1, padding: 32, background: 'transparent' }} id="main-content" tabIndex={-1}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 32 }}>
        {/* Market Overview Chart Placeholder */}
        <section style={{ gridColumn: 'span 2', background: '#222', borderRadius: 16, padding: 24, color: '#fff' }} aria-labelledby="market-overview-title">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span id="market-overview-title" style={{ fontWeight: 600 }}>Market Overview</span>
            <span style={{ fontSize: 14 }}>Month</span>
          </div>
          <div style={{ height: 192, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#aaa' }}>[Chart]</span>
          </div>
        </section>
        {/* Transaction List */}
        <section style={{ background: '#222', borderRadius: 16, padding: 24, color: '#fff' }} aria-labelledby="transaction-title">
          <div id="transaction-title" style={{ fontWeight: 600, marginBottom: 16 }}>Transaction</div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[1,2,3,4,5,6].map((i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#333', borderRadius: 10, padding: 12 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>$123,456,789</div>
                  <div style={{ fontSize: 12, color: '#aaa' }}>Name {i}</div>
                </div>
                <span style={{ background: '#e11d48', borderRadius: 999, padding: 8 }} aria-label="View details">➡️</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 32, marginTop: 32 }}>
        {/* My Portfolio */}
        <section style={{ gridColumn: 'span 2', background: '#222', borderRadius: 16, padding: 24, color: '#fff' }} aria-labelledby="portfolio-title">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span id="portfolio-title" style={{ fontWeight: 600 }}>My Portfolio</span>
            <span style={{ fontSize: 24 }} aria-label="More options">⋮</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[1,2,3,4].map((i) => (
              <div key={i} style={{ background: '#333', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>$123,456,789</div>
                  <div style={{ fontSize: 12, color: '#aaa' }}>Company {i}</div>
                  <div style={{ fontSize: 12, color: '#aaa' }}>4 Product</div>
                </div>
                <button style={{ background: '#444', padding: '8px 16px', borderRadius: 8, fontSize: 14, color: '#fff', border: 'none', cursor: 'pointer' }}>See Detail</button>
              </div>
            ))}
          </div>
        </section>
        {/* Saved Contact */}
        <section style={{ background: '#222', borderRadius: 16, padding: 24, color: '#fff' }} aria-labelledby="saved-contact-title">
          <div id="saved-contact-title" style={{ fontWeight: 600, marginBottom: 16 }}>Saved Contact</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {["Drew","Hanah","Silva","Ketut"].map((name, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ width: 40, height: 40, background: '#444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }} aria-label={`Contact avatar for ${name}`}>👤</span>
                <span style={{ fontSize: 12 }}>{name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
