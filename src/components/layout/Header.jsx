import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const breadcrumbMap = {
  '/': ['Dashboard'],
  '/catalog': ['Catalog'],
  '/products': ['Products', 'Products List'],
  '/leads': ['Leads', 'Leads List'],
  '/orders': ['Orders', 'Orders List'],
  '/sourcing': ['Sourcing', 'Sourcing List'],
  '/reports': ['Reports', 'Analytics'],
  '/credits': ['Credits'],
}

const pageIcons = {
  '/': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
  ),
}

const Header = ({ collapsed }) => {
  const location = useLocation()
  const [showNotif, setShowNotif] = useState(false)
  const crumbs = breadcrumbMap[location.pathname] || ['Dashboard']

  return (
    <header className={`fixed top-0 right-0 z-20 bg-white border-b border-gray-100 transition-all duration-300 ${
      collapsed ? 'left-16' : 'left-56'
    }`}>
      <div className="flex items-center justify-between px-6 h-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="flex items-center gap-1.5 hover:text-brand-600 cursor-pointer transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Dashboard
          </span>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
              <span className={i === crumbs.length - 1 ? 'text-gray-900 font-semibold' : ''}>
                {c}
              </span>
            </span>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* User ID */}
          <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5">
            <span className="text-xs text-gray-500 font-medium">ID:</span>
            <span className="text-sm font-bold text-gray-900">57507</span>
            <button
              onClick={() => navigator.clipboard?.writeText('57507')}
              className="text-gray-400 hover:text-brand-600 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </button>
          </div>

          {/* Preview */}
          <button className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-300 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotif(!showNotif)}
              className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-300 transition-all relative"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center">
                1
              </span>
            </button>
            {showNotif && (
              <div className="absolute right-0 top-10 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Notifications</h4>
                <div className="flex items-start gap-3 p-3 bg-brand-50 rounded-xl">
                  <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Welcome to COD Founders!</p>
                    <p className="text-xs text-gray-500 mt-0.5">Your account is ready. Start adding products.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-300 transition-all">
            <div className="w-6 h-6 rounded-lg bg-brand-500 flex items-center justify-center text-white text-xs font-bold">
              O
            </div>
            <div className="leading-none">
              <p className="text-xs font-semibold text-gray-900">oussama</p>
              <p className="text-[10px] text-gray-400">Seller</p>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
