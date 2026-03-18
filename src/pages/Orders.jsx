import { useState } from 'react'
import { orders } from '../data/mockData'
import TableControls from '../components/TableControls'
import Pagination from '../components/Pagination'

const statusColors = {
  'Shipped':    'bg-purple-100 text-purple-700',
  'Processing': 'bg-blue-100 text-blue-700',
  'Delivered':  'bg-green-100 text-green-700',
  'Canceled':   'bg-red-100 text-red-600',
}

const Orders = () => {
  const [query, setQuery] = useState('')

  const filtered = orders.filter(o =>
    o.id.toLowerCase().includes(query.toLowerCase()) ||
    o.customer.toLowerCase().includes(query.toLowerCase()) ||
    o.product.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Orders List</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <TableControls
          onSearch={setQuery}
          actions={[
            { label: 'Customize', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg> },
            { label: 'Filter', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg> },
            { label: 'Export', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> },
          ]}
        />

        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full">
            <thead>
              <tr>
                {['Order ID', 'Product', 'Customer', 'Country', 'Status', 'Total', 'Date'].map(col => (
                  <th key={col} className="table-th">
                    <div className="flex items-center gap-1">{col}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="table-td">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-semibold text-brand-600">{order.id}</span>
                      <svg className="w-3.5 h-3.5 text-brand-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </div>
                  </td>
                  <td className="table-td text-sm text-gray-700 max-w-[200px] truncate">{order.product}</td>
                  <td className="table-td font-medium text-gray-900 text-sm">{order.customer}</td>
                  <td className="table-td text-sm">{order.country}</td>
                  <td className="table-td">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[order.status] || 'bg-gray-100 text-gray-600'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="table-td font-semibold text-gray-900">{order.total}</td>
                  <td className="table-td text-gray-500 text-xs">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination total={filtered.length} />
      </div>
    </div>
  )
}

export default Orders
