const countries = [
  {
    name: 'Morocco',
    nameAr: 'المغرب',
    flag: '🇲🇦',
    capital: 'Rabat',
    deliveryTime: '2–4 days',
    codCurrency: 'MAD',
    coverage: '95%',
    description: 'Our largest market with extensive delivery networks covering all major cities and rural areas.',
    cities: ['Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Agadir'],
    gradient: 'from-red-500 to-green-600',
  },
  {
    name: 'Algeria',
    nameAr: 'الجزائر',
    flag: '🇩🇿',
    capital: 'Algiers',
    deliveryTime: '3–5 days',
    codCurrency: 'DZD',
    coverage: '88%',
    description: 'Nationwide coverage with dedicated Wilaya-level delivery partners for reliable COD services.',
    cities: ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida'],
    gradient: 'from-green-500 to-white',
  },
  {
    name: 'Tunisia',
    nameAr: 'تونس',
    flag: '🇹🇳',
    capital: 'Tunis',
    deliveryTime: '2–3 days',
    codCurrency: 'TND',
    coverage: '92%',
    description: 'Fast delivery network with strong urban and suburban coverage across all governorates.',
    cities: ['Tunis', 'Sfax', 'Sousse', 'Gabes', 'Kairouan'],
    gradient: 'from-red-600 to-white',
  },
  {
    name: 'Egypt',
    nameAr: 'مصر',
    flag: '🇪🇬',
    capital: 'Cairo',
    deliveryTime: '3–6 days',
    codCurrency: 'EGP',
    coverage: '85%',
    description: 'Growing rapidly with coverage across all 27 governorates and partnerships with local couriers.',
    cities: ['Cairo', 'Alexandria', 'Giza', 'Shubra El-Kheima', 'Luxor'],
    gradient: 'from-red-700 to-white',
  },
  {
    name: 'Senegal',
    nameAr: 'السنغال',
    flag: '🇸🇳',
    capital: 'Dakar',
    deliveryTime: '3–5 days',
    codCurrency: 'XOF',
    coverage: '80%',
    description: 'Expanding network with strategic partnerships enabling reliable deliveries across West Africa.',
    cities: ['Dakar', 'Thiès', 'Kaolack', 'Ziguinchor', 'Saint-Louis'],
    gradient: 'from-green-600 to-yellow-400',
  },
  {
    name: 'Mauritania',
    nameAr: 'موريتانيا',
    flag: '🇲🇷',
    capital: 'Nouakchott',
    deliveryTime: '4–7 days',
    codCurrency: 'MRU',
    coverage: '75%',
    description: 'Specialized coverage network designed for challenging geography with reliable cash collection.',
    cities: ['Nouakchott', 'Nouadhibou', 'Rosso', 'Kaédi', 'Kiffa'],
    gradient: 'from-green-700 to-yellow-500',
  },
]

const Countries = () => {
  return (
    <section id="countries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-700 mb-4">
            Coverage Map
          </div>
          <h2 className="section-title">Operating Across<br className="hidden md:block" /> 6 African Countries</h2>
          <p className="section-subtitle">
            Expand your reach without the logistics headache. We handle deliveries, confirmations, and cash collection in your target markets.
          </p>
        </div>

        {/* Country grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map(country => (
            <div key={country.name} className="card p-6 group cursor-default">
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="text-5xl flag-shadow">{country.flag}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                  <p className="text-sm text-gray-400 font-arabic">{country.nameAr}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
                    Active
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-5 leading-relaxed">{country.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400 mb-1">Delivery</p>
                  <p className="text-sm font-bold text-gray-900">{country.deliveryTime}</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400 mb-1">Coverage</p>
                  <p className="text-sm font-bold text-primary-600">{country.coverage}</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400 mb-1">Currency</p>
                  <p className="text-sm font-bold text-gray-900">{country.codCurrency}</p>
                </div>
              </div>

              {/* Cities */}
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Key Cities</p>
                <div className="flex flex-wrap gap-1.5">
                  {country.cities.map(city => (
                    <span key={city} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-lg font-medium">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map callout */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            More countries coming soon.{' '}
            <button
              className="text-primary-600 font-semibold hover:underline"
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Request a new country →
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Countries
