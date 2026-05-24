
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 36, color: '#1A237E' }}>
            GameBiz Dashboard
          </h1>
          <p style={{ color: '#666', fontFamily: 'Roboto, sans-serif', fontSize: 18 }}>
            Tamper-proof daily record of games played, sessions, and business metrics.
          </p>
        </header>
        {/* Metrics Cards */}
        <section style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e3e3e3', padding: 24, minWidth: 180 }}>
            <h2 style={{ color: '#1A237E', fontSize: 20, margin: 0 }}>Games Played</h2>
            <div style={{ fontSize: 32, fontWeight: 600, color: '#43A047' }}>123</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e3e3e3', padding: 24, minWidth: 180 }}>
            <h2 style={{ color: '#1A237E', fontSize: 20, margin: 0 }}>Sessions</h2>
            <div style={{ fontSize: 32, fontWeight: 600, color: '#00B8D4' }}>45</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e3e3e3', padding: 24, minWidth: 180 }}>
            <h2 style={{ color: '#1A237E', fontSize: 20, margin: 0 }}>Expected Income</h2>
            <div style={{ fontSize: 32, fontWeight: 600, color: '#FBC02D' }}>$1,234</div>
          </div>
        </section>
        {/* Data Table Placeholder */}
        <section style={{ width: '100%', marginBottom: 32 }}>
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 22, color: '#1A237E', marginBottom: 12 }}>
            Daily Game Records
          </h3>
          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px #e3e3e3' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
              <thead>
                <tr style={{ background: '#f5f7fa' }}>
                  <th style={{ padding: 12, textAlign: 'left', color: '#1A237E' }}>Date</th>
                  <th style={{ padding: 12, textAlign: 'left', color: '#1A237E' }}>Games</th>
                  <th style={{ padding: 12, textAlign: 'left', color: '#1A237E' }}>Sessions</th>
                  <th style={{ padding: 12, textAlign: 'left', color: '#1A237E' }}>Income</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 12 }}>2026-05-25</td>
                  <td style={{ padding: 12 }}>123</td>
                  <td style={{ padding: 12 }}>45</td>
                  <td style={{ padding: 12 }}>$1,234</td>
                </tr>
                <tr>
                  <td style={{ padding: 12 }}>2026-05-24</td>
                  <td style={{ padding: 12 }}>110</td>
                  <td style={{ padding: 12 }}>40</td>
                  <td style={{ padding: 12 }}>$1,100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Chart Placeholder */}
        <section style={{ width: '100%' }}>
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 22, color: '#1A237E', marginBottom: 12 }}>
            Trends (Coming Soon)
          </h3>
          <div style={{ height: 200, background: '#f5f7fa', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            [Chart Placeholder]
          </div>
        </section>
      </main>
    </div>
  );
}
