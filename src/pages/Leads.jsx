import { useState } from 'react'
import { leads } from '../data/mockData'
import TableControls from '../components/TableControls'
import Pagination from '../components/Pagination'

const statusColors = {
  'Confirmed':   'bg-green-100 text-green-700',
  'In Progress': 'bg-blue-100 text-blue-700',
  'Delivered':   'bg-brand-100 text-brand-700',
  'Canceled':    'bg-red-100 text-red-600',
  'Shipped':     'bg-purple-100 text-purple-700',
  'Fulfilled':   'bg-cyan-100 text-cyan-700',
  'Returned':    'bg-orange-100 text-orange-700',
}

const Leads = () => {
  const [query, setQuery] = useState('')

  const filtered = leads.filter(l =>
    l.customer.toLowerCase().includes(query.toLowerCase()) ||
    l.id.toLowerCase().includes(query.toLowerCase()) ||
    l.product.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Leads List</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <TableControls
          onSearch={setQuery}
          actions={[
            {
              label: 'Customize',
              icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>,
            },
            {
              label: 'Filter',
              icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>,
            },
            {
              label: 'Export',
              icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>,
            },
            {
              label: 'Import',
              icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>,
            },
          ]}
        />

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500 text-sm">No leads match your search.</div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full">
              <thead>
                <tr>
                  {['Lead ID', 'Customer', 'Product', 'Country', 'Status', 'Date', 'Amount'].map(col => (
                    <th key={col} className="table-th first:rounded-tl-xl last:rounded-tr-xl">
                      <div className="flex items-center gap-1">
                        {col}
                        {['Lead ID', 'Date', 'Amount'].includes(col) && (
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                          </svg>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(lead => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="table-td">
                      <span className="font-mono text-xs font-semibold text-brand-600">{lead.id}</span>
                    </td>
                    <td className="table-td">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{lead.customer}</p>
                        <p className="text-xs text-gray-400">{lead.phone}</p>
                      </div>
                    </td>
                    <td className="table-td">
                      <span className="text-sm text-gray-700 max-w-[180px] truncate block">{lead.product}</span>
                    </td>
                    <td className="table-td">
                      <span className="text-sm">{lead.country}</span>
                    </td>
                    <td className="table-td">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[lead.status] || 'bg-gray-100 text-gray-600'}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="table-td text-gray-500 text-xs">{lead.date}</td>
                    <td className="table-td font-semibold text-gray-900">{lead.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <Pagination total={filtered.length} />
      </div>
    </div>
  )
}

export default Leads
