import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'
import { revenueData, topProducts } from '../data/mockData'

const tabs = ['Analytics', 'Insights', 'Business']

const analyticsCards = [
  { label: 'Total Leads', icon: '📋', color: 'bg-blue-50 text-blue-600' },
  { label: 'In Progress', icon: '⏳', color: 'bg-orange-50 text-orange-600' },
  { label: 'Confirmed', icon: '✅', color: 'bg-green-50 text-green-600' },
  { label: 'Canceled', icon: '❌', color: 'bg-red-50 text-red-600' },
  { label: 'Fulfilled', icon: '📦', color: 'bg-purple-50 text-purple-600' },
  { label: 'Shipped', icon: '🚚', color: 'bg-cyan-50 text-cyan-600' },
  { label: 'Delivered', icon: '🏠', color: 'bg-brand-50 text-brand-600' },
  { label: 'Returned', icon: '↩️', color: 'bg-pink-50 text-pink-600' },
]

const radarData = [
  { subject: 'Morocco', A: 120 },
  { subject: 'Algeria', A: 98 },
  { subject: 'Tunisia', A: 86 },
  { subject: 'Egypt', A: 72 },
  { subject: 'Senegal', A: 55 },
  { subject: 'Mauritania', A: 40 },
]

const Reports = () => {
  const [tab, setTab] = useState('Analytics')

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-sm text-gray-500 mt-1">All your business insights and performance data in one place</p>
      </div>

      {/* Tabs + Filter */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === t ? 'bg-brand-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t === 'Analytics' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>}
              {t === 'Insights' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>}
              {t === 'Business' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>}
              {t}
            </button>
          ))}
        </div>
        <button className="btn-outline">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
          </svg>
          Filter
        </button>
      </div>

      {tab === 'Analytics' && (
        <div className="space-y-6">
          {/* 8 stat cards */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {analyticsCards.map(card => (
                <div key={card.label} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{card.label}</p>
                    <p className="text-2xl font-black text-gray-800">***</p>
                  </div>
                  <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center text-lg`}>
                    {card.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top 5 products */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-5">Top 5 products</h3>
            <div className="space-y-3">
              {topProducts.map((p, i) => (
                <div key={p.name} className="flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-400 w-5">{i + 1}</span>
                  <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0">
                    {p.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-900 truncate">{p.name}</span>
                      <span className="text-sm font-bold text-brand-600 ml-4">${p.revenue.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className="bg-brand-500 h-1.5 rounded-full"
                        style={{ width: `${(p.sold / topProducts[0].sold) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Overview */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Performance Overview</h3>
                <p className="text-sm text-gray-500 mt-0.5">Track how your leads and orders are doing.</p>
              </div>
              <div className="flex gap-6 text-right">
                <div>
                  <p className="text-xs text-gray-400">Avg Daily Leads</p>
                  <p className="text-lg font-black text-gray-800">***</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Avg Daily Orders</p>
                  <p className="text-lg font-black text-gray-800">***</p>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={revenueData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="rGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8DC000" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#8DC000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false}/>
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false}/>
                <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false}/>
                <Tooltip/>
                <Area type="monotone" dataKey="leads" stroke="#8DC000" strokeWidth={2} fill="url(#rGrad)"/>
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Country radar */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Coverage by Country</h3>
            <p className="text-sm text-gray-500 mb-4">Order distribution across your markets</p>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb"/>
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#6b7280' }}/>
                <Radar name="Orders" dataKey="A" stroke="#8DC000" fill="#8DC000" fillOpacity={0.2} strokeWidth={2}/>
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {tab !== 'Analytics' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No {tab} Available Yet</h3>
            <p className="text-sm text-gray-400 max-w-xs">Once your activity starts generating insights, you'll see them visualized here.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reports
