const Credits = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Credits</h1>

    {/* Balance card */}
    <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8 text-white mb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"/>
      <div className="relative">
        <p className="text-brand-100 text-sm font-medium mb-2">Current Balance</p>
        <p className="text-5xl font-black mb-1">0.00</p>
        <p className="text-brand-200 text-sm">COD Credits</p>
        <div className="mt-6 flex gap-3">
          <button className="bg-white text-brand-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-brand-50 transition-colors">
            + Add Credits
          </button>
          <button className="bg-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-white/30 transition-colors">
            History
          </button>
        </div>
      </div>
    </div>

    {/* Credit packages */}
    <div className="grid sm:grid-cols-3 gap-4 mb-6">
      {[
        { amount: '10', credits: '100', bonus: '' },
        { amount: '25', credits: '275', bonus: '+10% Bonus' },
        { amount: '50', credits: '600', bonus: '+20% Bonus', popular: true },
      ].map(pkg => (
        <div key={pkg.amount} className={`bg-white rounded-2xl border p-5 text-center relative ${pkg.popular ? 'border-brand-400 shadow-lg shadow-brand-100' : 'border-gray-100 shadow-sm'}`}>
          {pkg.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              Best Value
            </span>
          )}
          <p className="text-3xl font-black text-gray-900">${pkg.amount}</p>
          <p className="text-brand-600 font-bold text-lg mt-1">{pkg.credits} Credits</p>
          {pkg.bonus && <p className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full inline-block mt-1">{pkg.bonus}</p>}
          <button className={`w-full mt-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${pkg.popular ? 'btn-brand justify-center' : 'btn-outline justify-center'}`}>
            Purchase
          </button>
        </div>
      ))}
    </div>

    {/* Transaction history */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h3 className="font-bold text-gray-900 mb-4">Transaction History</h3>
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
        </div>
        <p className="text-sm font-semibold text-gray-700">No transactions yet</p>
        <p className="text-xs text-gray-400 mt-1">Your credit history will appear here.</p>
      </div>
    </div>
  </div>
)

export default Credits
