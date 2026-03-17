const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'Forever',
    description: 'Perfect for new sellers getting started with COD.',
    features: [
      'Up to 100 orders/month',
      '1 country',
      'Order confirmation calls',
      'Basic dashboard',
      'Email support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$49',
    period: 'per month',
    description: 'For growing businesses ready to scale across borders.',
    features: [
      'Up to 1,000 orders/month',
      'Up to 3 countries',
      'Priority confirmation team',
      'Warehousing (50 sqm)',
      'Advanced analytics',
      'WhatsApp support',
      'Sourcing access',
    ],
    cta: 'Get Started',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For established brands with high-volume operations.',
    features: [
      'Unlimited orders',
      'All 6 countries',
      'Dedicated account manager',
      'Custom warehousing',
      'White-label reports',
      'API integration',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const Pricing = () => {
  const scrollToContact = () => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-700 mb-4">
            Pricing
          </div>
          <h2 className="section-title">Transparent Pricing,<br className="hidden md:block" /> No Surprises</h2>
          <p className="section-subtitle">
            Start free and upgrade as you grow. All plans include our core COD infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 relative ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-primary-600 to-primary-800 text-white shadow-2xl shadow-primary-500/30 scale-105'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary-600 text-xs font-bold px-4 py-1 rounded-full border border-primary-100 shadow-md">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-5 ${plan.highlighted ? 'text-primary-200' : 'text-gray-500'}`}>{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlighted ? 'text-primary-200' : 'text-gray-400'}`}>/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? 'text-primary-200' : 'text-primary-600'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-primary-100' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
