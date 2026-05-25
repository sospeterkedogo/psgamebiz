import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            {/* Logo Placeholder */}
            <span className="text-indigo-900 font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl">Studio Shodwe</span>
        </div>
        <div className="bg-pink-600 rounded-xl p-4 mb-8">
          <div className="text-sm">Balance</div>
          <div className="text-2xl font-bold">$123,456,789</div>
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-2">Menu</div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400"><span>▦</span>Dashboard</li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400"><span>💸</span>Transaction</li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400"><span>💳</span>Payment</li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400"><span>👜</span>My Card</li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="font-semibold mb-2">Preference</div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400"><span>👤</span>Account</li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400"><span>❓</span>Help & Support</li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400"><span>↩️</span>Log Out</li>
          </ul>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <input type="text" placeholder="Search Here" className="px-4 py-2 rounded-lg border border-gray-300 w-80" />
          <div className="flex items-center gap-4">
            <span className="text-2xl">🔔</span>
            <span className="text-2xl">💬</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Hannah Morales</span>
              <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">👤</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* Market Overview Chart Placeholder */}
          <section className="col-span-2 bg-gray-900 rounded-2xl p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Market Overview</span>
              <span className="text-sm">Month</span>
            </div>
            <div className="h-48 flex items-center justify-center">
              <span className="text-gray-400">[Chart]</span>
            </div>
          </section>
          {/* Transaction List */}
          <section className="bg-gray-900 rounded-2xl p-6 text-white">
            <div className="font-semibold mb-4">Transaction</div>
            <ul className="space-y-4">
              {[1,2,3,4,5,6].map((i) => (
                <li key={i} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                  <div>
                    <div className="font-bold">$123,456,789</div>
                    <div className="text-xs text-gray-400">Name {i}</div>
                  </div>
                  <span className="bg-pink-600 rounded-full p-2">➡️</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* My Portfolio */}
          <section className="col-span-2 bg-gray-900 rounded-2xl p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">My Portfolio</span>
              <span className="text-2xl">⋮</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold">$123,456,789</div>
                    <div className="text-xs text-gray-400">Company {i}</div>
                    <div className="text-xs text-gray-400">4 Product</div>
                  </div>
                  <button className="bg-gray-700 px-4 py-2 rounded-lg text-sm">See Detail</button>
                </div>
              ))}
            </div>
          </section>
          {/* Saved Contact */}
          <section className="bg-gray-900 rounded-2xl p-6 text-white">
            <div className="font-semibold mb-4">Saved Contact</div>
            <div className="flex gap-3">
              {["Drew","Hanah","Silva","Ketut"].map((name, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-1">👤</span>
                  <span className="text-xs">{name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}