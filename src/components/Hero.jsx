const stats = [
  { value: '6+', label: 'African Countries' },
  { value: '50K+', label: 'Orders Delivered' },
  { value: '99%', label: 'Confirmation Rate' },
  { value: '24/7', label: 'Support' },
]

const Hero = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-bg min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-700">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Africa's #1 COD Logistics Platform
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Scale Your
              <span className="block gradient-text">COD Business</span>
              Across Africa
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              From order confirmation to last-mile delivery — COD Founders handles your entire cash-on-delivery operations across 6 African countries, so you can focus on growing.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary text-base px-8 py-4" onClick={() => scrollTo('#contact')}>
                Start Free Trial
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="btn-outline text-base px-8 py-4" onClick={() => scrollTo('#services')}>
                Explore Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
              {stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-primary-500/10 p-6 border border-primary-100">
              {/* Mock dashboard card */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">Today's Overview</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">COD Dashboard</h3>
                </div>
                <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Total Leads', value: '2,847', change: '+24%', color: 'bg-blue-50 text-blue-600' },
                  { label: 'Confirmed', value: '1,923', change: '+18%', color: 'bg-green-50 text-green-600' },
                  { label: 'Delivered', value: '1,654', change: '+31%', color: 'bg-purple-50 text-purple-600' },
                  { label: 'Revenue', value: '$12.4k', change: '+27%', color: 'bg-orange-50 text-orange-600' },
                ].map(metric => (
                  <div key={metric.label} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500">{metric.label}</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">{metric.value}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mt-1 inline-block ${metric.color}`}>
                      {metric.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Country pills */}
              <div className="flex flex-wrap gap-2">
                {['🇲🇦 Morocco', '🇩🇿 Algeria', '🇹🇳 Tunisia', '🇪🇬 Egypt', '🇸🇳 Senegal', '🇲🇷 Mauritania'].map(c => (
                  <span key={c} className="text-xs bg-primary-50 text-primary-700 border border-primary-200 px-3 py-1 rounded-full font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 border border-gray-100">
              <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Order Confirmed</p>
                <p className="text-sm font-bold text-gray-900">ORD-54200</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 border border-gray-100">
              <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Fast Delivery</p>
                <p className="text-sm font-bold text-gray-900">2–5 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
