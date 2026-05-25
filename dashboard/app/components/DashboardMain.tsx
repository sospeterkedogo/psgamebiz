
import { useState } from "react";

const transactions = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: [
    "Lars Peeters",
    "Kim Chun Hei",
    "Matt Zhang",
    "Borcelle Finance",
    "Salford & Co.",
    "Fradel and Spies",
    "Alicia Gomez",
    "Nina Patel",
    "Jamal Carter",
    "Sophie Müller",
    "Lucas Rossi",
    "Yuki Tanaka",
    "Omar Farouk",
    "Priya Singh",
    "Elena Petrova",
    "Marta Nowak",
    "John Doe",
    "Jane Smith",
    "Carlos Silva",
    "Anna Lee"
  ][i % 20],
  amount: `$${(Math.random() * 1000000 + 10000).toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
  date: `2026-05-${(i % 28) + 1}`,
  status: ["Completed", "Pending", "Failed"][i % 3],
}));

const portfolios = [
  { id: 1, name: "Larana, Inc.", company: "Larana, Inc.", amount: "$123,456,789", products: 4, icon: "🟨" },
  { id: 2, name: "Salford & Co.", company: "Salford & Co.", amount: "$123,456,789", products: 4, icon: "🟦" },
  { id: 3, name: "Liceria & Co.", company: "Liceria & Co.", amount: "$123,456,789", products: 4, icon: "🟪" },
  { id: 4, name: "Borcelle Finance", company: "Borcelle Finance", amount: "$123,456,789", products: 4, icon: "⬛" },
];

const contacts = [
  { name: "Drew", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Hanah", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Silva", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Ketut", img: "https://randomuser.me/api/portraits/men/76.jpg" },
];

export function DashboardMain() {
  const [modal, setModal] = useState<null | { name: string; amount: string; company?: string }>(null);
  return (
    <main style={{ flex: 1, padding: 8, background: 'transparent', margin: 0 }} id="main-content" tabIndex={-1}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 16, margin: 0 }}>
        {/* Market Overview Chart Placeholder */}
        <section style={{ gridColumn: 'span 2', background: '#222', borderRadius: 16, padding: 16, color: '#fff', minHeight: 320, margin: 0 }} aria-labelledby="market-overview-title">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span id="market-overview-title" style={{ fontWeight: 600, fontSize: 18, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Market Overview</span>
            <span style={{ fontSize: 14 }}>Month</span>
          </div>
          <div style={{ height: 192, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
            <span style={{ color: '#aaa', fontSize: 24, textAlign: 'center', maxWidth: '100%' }}>[Chart Placeholder]</span>
          </div>
        </section>
        {/* Transaction List */}
        <section style={{ background: '#222', borderRadius: 16, padding: 16, color: '#fff', minHeight: 320, margin: 0, maxHeight: 400, overflow: 'auto' }} aria-labelledby="transaction-title">
          <div id="transaction-title" style={{ fontWeight: 600, marginBottom: 12, fontSize: 18 }}>Transaction</div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0 }}>
            {transactions.map((t) => (
              <li key={t.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#333', borderRadius: 10, padding: 8, margin: 0, minWidth: 0 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>{t.amount}</div>
                  <div style={{ fontSize: 12, color: '#aaa', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: '#bbb' }}>{t.date} <span style={{ color: t.status === 'Completed' ? '#4ade80' : t.status === 'Pending' ? '#facc15' : '#f87171' }}>{t.status}</span></div>
                </div>
                <button
                  style={{ background: '#e11d48', borderRadius: 999, padding: 8, color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                  aria-label={`View details for ${t.name}`}
                  onClick={() => setModal({ name: t.name, amount: t.amount })}
                >
                  ➡️
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 16, marginTop: 16, marginBottom: 0 }}>
        {/* My Portfolio */}
        <section style={{ gridColumn: 'span 2', background: '#222', borderRadius: 16, padding: 16, color: '#fff', minHeight: 320, margin: 0, maxHeight: 400, overflow: 'auto' }} aria-labelledby="portfolio-title">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span id="portfolio-title" style={{ fontWeight: 600, fontSize: 18 }}>My Portfolio</span>
            <span style={{ fontSize: 24 }} aria-label="More options">⋮</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {portfolios.map((p) => (
              <div key={p.id} style={{ background: '#333', borderRadius: 12, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: 0 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>{p.amount}</div>
                  <div style={{ fontSize: 12, color: '#aaa', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>{p.company}</div>
                  <div style={{ fontSize: 12, color: '#aaa' }}>{p.products} Product</div>
                </div>
                <button
                  style={{ background: '#444', padding: '8px 16px', borderRadius: 8, fontSize: 14, color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                  onClick={() => setModal({ name: p.company, amount: p.amount, company: p.company })}
                >See Detail</button>
              </div>
            ))}
          </div>
        </section>
        {/* Saved Contact */}
        <section style={{ background: '#222', borderRadius: 16, padding: 16, color: '#fff', minHeight: 320, margin: 0, maxHeight: 400, overflow: 'auto' }} aria-labelledby="saved-contact-title">
          <div id="saved-contact-title" style={{ fontWeight: 600, marginBottom: 12, fontSize: 18 }}>Saved Contact</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {contacts.map((c, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
                <img src={c.img} alt={c.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', marginBottom: 4 }} />
                <span style={{ fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 48 }}>{c.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      {modal && (
        <div
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setModal(null)}
        >
          <div
            style={{ background: '#fff', color: '#222', borderRadius: 12, padding: 32, minWidth: 280, maxWidth: '90vw', maxHeight: '80vh', overflow: 'auto', boxShadow: '0 2px 24px rgba(0,0,0,0.18)' }}
            onClick={e => e.stopPropagation()}
          >
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{modal.company || modal.name}</h3>
            <div style={{ fontSize: 18, marginBottom: 8 }}>Amount: <b>{modal.amount}</b></div>
            <button
              style={{ background: '#D12D8A', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 20px', fontWeight: 600, fontSize: 16, cursor: 'pointer', marginTop: 12 }}
              onClick={() => setModal(null)}
              autoFocus
            >Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
