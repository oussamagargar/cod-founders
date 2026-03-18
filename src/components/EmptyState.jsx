const EmptyState = ({ title, description, action, actionLabel }) => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    {/* Box icon */}
    <div className="relative w-28 h-28 mb-6">
      <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
        <svg className="w-14 h-14 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      </div>
      {/* Decorative dots */}
      <div className="absolute top-2 right-0 w-3 h-3 bg-brand-200 rounded-full"/>
      <div className="absolute bottom-2 left-0 w-2 h-2 bg-brand-100 rounded-full"/>
      <div className="absolute top-1/2 -right-3 w-2.5 h-2.5 bg-gray-200 rounded-full"/>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 max-w-xs leading-relaxed">{description}</p>
    {action && (
      <button
        onClick={action}
        className="mt-6 flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
        </svg>
        {actionLabel || 'Dashboard'}
      </button>
    )}
  </div>
)

export default EmptyState
