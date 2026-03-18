const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-xl font-bold">COD <span className="text-primary-400">Founders</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Africa's premier cash-on-delivery logistics platform. We help sellers scale across borders with confidence.
            </p>
            <div className="flex gap-3">
              {['f', 'in', '✓', '♪'].map((icon, i) => (
                <div key={i} className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-xs font-bold">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Order Fulfillment', 'Order Confirmation', 'Warehousing & Storage', 'Product Sourcing', 'Returns Management'].map(item => (
                <li key={item}>
                  <button onClick={() => scrollTo('#services')} className="hover:text-primary-400 transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-semibold text-white mb-4">Countries</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { flag: '🇲🇦', name: 'Morocco' },
                { flag: '🇩🇿', name: 'Algeria' },
                { flag: '🇹🇳', name: 'Tunisia' },
                { flag: '🇪🇬', name: 'Egypt' },
                { flag: '🇸🇳', name: 'Senegal' },
                { flag: '🇲🇷', name: 'Mauritania' },
              ].map(c => (
                <li key={c.name} className="flex items-center gap-2">
                  <span>{c.flag}</span>
                  <button onClick={() => scrollTo('#countries')} className="hover:text-primary-400 transition-colors">
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['About Us', 'Careers', 'Blog', 'Press Kit', 'Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}>
                  <button className="hover:text-primary-400 transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} COD Founders. All rights reserved.</p>
          <p>
            Made with ❤️ for African entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
