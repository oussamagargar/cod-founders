import { useState } from 'react'
import TableControls from '../components/TableControls'

const catalogProducts = [
  { id: 1, name: 'Lip Plumper Vegan', category: 'Beauty', price: '8.99 USD', stock: 'In Stock', countries: ['🇲🇦', '🇩🇿', '🇹🇳'] },
  { id: 2, name: 'Automatic DIY Hair Braiding Tool', category: 'Beauty', price: '12.50 USD', stock: 'In Stock', countries: ['🇲🇦', '🇸🇳'] },
  { id: 3, name: '2025 Wholesale Smartwatch', category: 'Tech', price: '24.99 USD', stock: 'In Stock', countries: ['🇲🇦', '🇩🇿', '🇪🇬'] },
  { id: 4, name: 'Rounded Polarized Glasses', category: 'Fashion', price: '9.90 USD', stock: 'In Stock', countries: ['🇲🇦', '🇩🇿', '🇹🇳', '🇸🇳'] },
  { id: 5, name: 'Camera Detector', category: 'Tech', price: '19.90 USD', stock: 'In Stock', countries: ['🇲🇦', '🇩🇿'] },
  { id: 6, name: 'Aceite de suero', category: 'Beauty', price: '11.00 USD', stock: 'Low Stock', countries: ['🇲🇦', '🇲🇷'] },
]

const Catalog = () => {
  const [query, setQuery] = useState('')

  const filtered = catalogProducts.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Catalog</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <TableControls onSearch={setQuery} actions={[
          { label: 'Filter', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg> },
        ]}/>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <div key={p.id} className="border border-gray-100 rounded-xl p-4 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer group">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 font-bold text-lg flex-shrink-0">
                  {p.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-brand-600 transition-colors truncate">{p.name}</p>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full mt-1 inline-block">{p.category}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-600 text-sm">{p.price}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.stock === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                  {p.stock}
                </span>
              </div>
              <div className="flex gap-1 mt-3">
                {p.countries.map(c => (
                  <span key={c} className="text-base">{c}</span>
                ))}
              </div>
              <button className="w-full mt-3 btn-brand justify-center text-xs py-2">
                + Add to My Products
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog
