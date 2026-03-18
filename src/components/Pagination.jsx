import { useState } from 'react'

const Pagination = ({ total, perPage = 10, onPageChange }) => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(perPage)
  const totalPages = Math.ceil(total / rowsPerPage)

  const go = (p) => {
    if (p < 1 || p > totalPages) return
    setPage(p)
    onPageChange?.(p, rowsPerPage)
  }

  const start = (page - 1) * rowsPerPage + 1
  const end = Math.min(page * rowsPerPage, total)

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
      <p className="text-sm text-gray-500">
        Showing <span className="font-semibold text-gray-700">{start}</span> to{' '}
        <span className="font-semibold text-gray-700">{end}</span> of{' '}
        <span className="font-semibold text-gray-700">{total}</span> entries
      </p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Rows per page</span>
          <select
            value={rowsPerPage}
            onChange={e => { setRowsPerPage(Number(e.target.value)); setPage(1) }}
            className="border border-gray-200 rounded-xl px-2 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-300"
          >
            {[10, 20, 50].map(n => <option key={n}>{n}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 1}
            className="px-3 py-1.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            Previous
          </button>
          <button
            onClick={() => go(page + 1)}
            disabled={page >= totalPages}
            className="px-3 py-1.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            Next
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
