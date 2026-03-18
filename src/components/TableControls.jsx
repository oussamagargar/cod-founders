// Shared search + action bar used across pages
const TableControls = ({ onSearch, actions = [] }) => (
  <div className="flex flex-wrap items-center gap-3 mb-5">
    {/* Search */}
    <div className="flex items-center gap-2 flex-1 min-w-48">
      <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-brand-300 focus-within:border-brand-400 transition-all">
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          type="text"
          placeholder="Search..."
          onChange={e => onSearch?.(e.target.value)}
          className="flex-1 text-sm outline-none bg-transparent placeholder-gray-400"
        />
        <button className="text-gray-400 hover:text-brand-600 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </button>
      </div>
      <button className="w-9 h-9 border border-gray-200 bg-white rounded-xl flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-300 transition-all">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </button>
    </div>

    {/* Refresh */}
    <button className="w-9 h-9 border border-gray-200 bg-white rounded-xl flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-300 transition-all">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
    </button>

    {/* Extra action buttons */}
    {actions.map(action => (
      <button key={action.label} onClick={action.onClick} className={action.primary ? 'btn-brand' : 'btn-outline'}>
        {action.icon && <span>{action.icon}</span>}
        {action.label}
      </button>
    ))}
  </div>
)

export default TableControls
