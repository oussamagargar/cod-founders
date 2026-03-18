import { useState } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { revenueData, topProducts } from '../data/mockData'

const statCards = [
  {
    label: 'Total Leads',
    value: '2,847',
    change: '+24%',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    label: 'Confirmed Leads',
    value: '1,923',
    change: '+18%',
    color: 'bg-brand-50',
    iconColor: 'text-brand-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
  },
  {
    label: 'Delivered Leads',
    value: '1,654',
    change: '+31%',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
      </svg>
    ),
  },
  {
    label: 'Total Revenue',
    value: '$12,400',
    change: '+27%',
    color: 'bg-orange-50',
    iconColor: 'text-orange-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-3 text-sm">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        {payload.map(p => (
          <p key={p.name} style={{ color: p.color }} className="font-medium">
            {p.name}: {typeof p.value === 'number' && p.name === 'revenue' ? `$${p.value.toLocaleString()}` : p.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const Dashboard = () => {
  const [chartTab, setChartTab] = useState('revenue')

  const chartKey = chartTab
  const chartColor = chartTab === 'revenue' ? '#8DC000' : chartTab === 'leads' ? '#3B82F6' : '#F59E0B'

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome banner */}
      <div className="bg-white rounded-2xl border border-brand-100 px-5 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-xl">👋</span>
          <p className="text-sm font-medium text-gray-700">
            Hey <span className="font-bold text-gray-900">oussama agargar</span> — Let's grow your business today!
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <span className="font-semibold text-gray-700">Today</span>
        </div>
      </div>

      {/* New platform notice */}
      <div className="bg-brand-50 border border-brand-200 rounded-xl px-4 py-3 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span className="text-brand-800">Try the new platform. If you encounter any issues, you can switch back to the previous version at any time.</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600 ml-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(card => (
          <div key={card.label} className="stat-card">
            <div>
              <p className="text-xs text-gray-500 mb-1">{card.label}</p>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
                {card.change}
              </span>
            </div>
            <div className={`w-12 h-12 ${card.color} ${card.iconColor} rounded-2xl flex items-center justify-center`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Charts + Top products */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Revenue chart */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-gray-900">Revenues</h3>
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
              {['revenue', 'leads', 'orders'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setChartTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all capitalize ${
                    chartTab === tab ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'revenue' ? '$ Revenues' : tab === 'leads' ? '👤 Leads' : '📋 Orders'}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="colorGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColor} stopOpacity={0.18}/>
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false}/>
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false}/>
              <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false}/>
              <Tooltip content={<CustomTooltip />}/>
              <Area
                type="monotone"
                dataKey={chartKey}
                stroke={chartColor}
                strokeWidth={2.5}
                fill="url(#colorGrad)"
                dot={{ r: 4, fill: chartColor, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: chartColor }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top 5 products */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-5">Top 5 products</h3>
          <div className="space-y-3">
            {topProducts.map((p, i) => (
              <div key={p.name} className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-400 w-4">{i + 1}</span>
                <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold text-gray-500">
                  {p.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-900 truncate">{p.name}</p>
                  <p className="text-[10px] text-gray-400">{p.sold} sold</p>
                </div>
                <span className="text-xs font-bold text-brand-600">${p.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Account manager */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-1">Your Account Manager is Ready to Help</h3>
          <p className="text-sm text-gray-500 mb-5">
            Your manager is here to provide personalized guidance — whether boosting sales, streamlining operations, or growing your business. Reach out anytime for expert advice.
          </p>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-700 font-black text-xl">
              MO
            </div>
            <div>
              <p className="font-bold text-gray-900">Mouad El</p>
              <p className="text-xs text-gray-400">Your account manager</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"/>
                Available
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="btn-outline flex-1 justify-center">
              <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.236l-8 4.882-8-4.882V6h16v2.236z"/>
              </svg>
              Mail
            </button>
            <button className="btn-outline flex-1 justify-center">
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.555 4.116 1.524 5.845L.055 23.454a.5.5 0 00.491.546h.054l5.81-1.525A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              Whatsapp
            </button>
          </div>
        </div>

        {/* Mobile app */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white relative overflow-hidden">
          <h3 className="font-bold text-lg mb-2">Stay Connected, Stay in Control</h3>
          <p className="text-gray-300 text-sm mb-5 max-w-xs">
            Download our mobile app to manage your business on the go. Track orders, monitor sales, and follow leads right from your phone.
          </p>
          <div className="flex gap-3">
            <button className="bg-white text-gray-900 font-semibold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.24.45 0 .9-.14 1.29-.41l12.24-7.06-2.91-2.91-11.61 10.14zM.29 1.15C.11 1.49 0 1.88 0 2.31v19.38c0 .43.11.82.29 1.16l.08.08 10.86-10.86v-.26L.37 1.07.29 1.15zM20.73 10.3l-2.77-1.6-3.12 3.12 3.12 3.12 2.8-1.62c.8-.46.8-1.22-.03-1.62v.6zM4.17.41L16.41 7.47l-2.91 2.91L.47.24C.86-.03 1.59-.08 2.18.24l1.99 1.17z"/>
              </svg>
              Google Play
            </button>
            <button className="bg-white text-gray-900 font-semibold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </button>
          </div>
          {/* Decorative phone mockup */}
          <div className="absolute right-4 top-4 w-24 h-36 bg-gray-700 rounded-2xl border-2 border-gray-600 flex flex-col overflow-hidden opacity-60">
            <div className="h-4 bg-gray-600 flex items-center justify-center">
              <div className="w-8 h-1 bg-gray-500 rounded"/>
            </div>
            <div className="flex-1 p-1.5 space-y-1">
              <div className="h-2 bg-brand-500 rounded w-3/4"/>
              <div className="h-1.5 bg-gray-500 rounded w-full"/>
              <div className="h-1.5 bg-gray-500 rounded w-2/3"/>
              <div className="h-6 bg-gray-600 rounded mt-1"/>
              <div className="grid grid-cols-2 gap-1 mt-1">
                <div className="h-4 bg-gray-600 rounded"/>
                <div className="h-4 bg-gray-600 rounded"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
