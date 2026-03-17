const services = [
  {
    id: 'fulfillment',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Order Fulfillment',
    description: 'End-to-end order processing from pick & pack to last-mile delivery. We manage your entire fulfillment pipeline with speed and accuracy.',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    features: ['Same-day processing', 'Real-time tracking', 'Automated dispatch', 'Return management'],
  },
  {
    id: 'confirmation',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Order Confirmation',
    description: 'Professional call center team that confirms orders before shipment, drastically reducing return rates and maximizing your delivery success.',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    features: ['Native-speaking agents', '99% confirmation rate', 'Multi-language support', 'Fraud prevention'],
  },
  {
    id: 'storage',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Warehousing & Storage',
    description: 'Strategically located warehouses across Africa with climate-controlled facilities, inventory management, and same-day dispatch capability.',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    features: ['6 warehouse locations', 'Climate controlled', 'Live inventory dashboard', 'Flexible storage plans'],
  },
  {
    id: 'sourcing',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Product Sourcing',
    description: 'We connect you with verified suppliers worldwide. Our sourcing team handles product discovery, price negotiation, quality control, and shipping.',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    features: ['Verified suppliers', 'Price negotiation', 'Quality inspection', 'Express shipping'],
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-700 mb-4">
            Our Services
          </div>
          <h2 className="section-title">Everything You Need to<br className="hidden md:block" /> Scale Your COD Business</h2>
          <p className="section-subtitle">
            A complete logistics ecosystem designed specifically for cash-on-delivery businesses operating across Africa.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card p-8 group">
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} ${service.textColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-5">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className={`w-4 h-4 ${service.textColor} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to streamline your operations?</h3>
          <p className="text-primary-100 mb-8 max-w-lg mx-auto">
            Join hundreds of African sellers who trust COD Founders to grow their business.
          </p>
          <button
            className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
