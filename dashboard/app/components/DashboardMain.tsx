import React from "react";

export function DashboardMain() {
  return (
    <main className="flex-1 p-8 bg-transparent" id="main-content" tabIndex={-1}>
      <div className="grid grid-cols-3 gap-8">
        {/* Market Overview Chart Placeholder */}
        <section className="col-span-2 bg-gray-900 rounded-2xl p-6 text-white" aria-labelledby="market-overview-title">
          <div className="flex justify-between items-center mb-4">
            <span id="market-overview-title" className="font-semibold">Market Overview</span>
            <span className="text-sm">Month</span>
          </div>
          <div className="h-48 flex items-center justify-center">
            <span className="text-gray-400">[Chart]</span>
          </div>
        </section>
        {/* Transaction List */}
        <section className="bg-gray-900 rounded-2xl p-6 text-white" aria-labelledby="transaction-title">
          <div id="transaction-title" className="font-semibold mb-4">Transaction</div>
          <ul className="space-y-4">
            {[1,2,3,4,5,6].map((i) => (
              <li key={i} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                <div>
                  <div className="font-bold">$123,456,789</div>
                  <div className="text-xs text-gray-400">Name {i}</div>
                </div>
                <span className="bg-pink-600 rounded-full p-2" aria-label="View details">➡️</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {/* My Portfolio */}
        <section className="col-span-2 bg-gray-900 rounded-2xl p-6 text-white" aria-labelledby="portfolio-title">
          <div className="flex justify-between items-center mb-4">
            <span id="portfolio-title" className="font-semibold">My Portfolio</span>
            <span className="text-2xl" aria-label="More options">⋮</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="font-bold">$123,456,789</div>
                  <div className="text-xs text-gray-400">Company {i}</div>
                  <div className="text-xs text-gray-400">4 Product</div>
                </div>
                <button className="bg-gray-700 px-4 py-2 rounded-lg text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">See Detail</button>
              </div>
            ))}
          </div>
        </section>
        {/* Saved Contact */}
        <section className="bg-gray-900 rounded-2xl p-6 text-white" aria-labelledby="saved-contact-title">
          <div id="saved-contact-title" className="font-semibold mb-4">Saved Contact</div>
          <div className="flex gap-3">
            {["Drew","Hanah","Silva","Ketut"].map((name, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-1" aria-label={`Contact avatar for ${name}`}>👤</span>
                <span className="text-xs">{name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
