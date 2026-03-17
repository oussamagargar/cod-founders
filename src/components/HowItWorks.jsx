const steps = [
  {
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up and connect your store or upload your product catalog. Our onboarding team guides you through the setup.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Receive Leads & Orders',
    description: 'Your leads flow directly into our platform. Our confirmation team calls customers and verifies orders before dispatch.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'We Fulfill & Ship',
    description: 'Our warehouses process, pack, and dispatch your confirmed orders to the customer\'s doorstep with real-time tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Collect Cash & Get Paid',
    description: 'Delivery agents collect cash from customers. We consolidate and transfer your earnings directly to your account.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-700 mb-4">
            How It Works
          </div>
          <h2 className="section-title">Simple, Transparent<br className="hidden md:block" /> Process</h2>
          <p className="section-subtitle">
            From setup to your first delivery in as little as 48 hours. No complicated contracts, no hidden fees.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative text-center group">
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-primary-500 rounded-full text-xs font-bold text-primary-600 flex items-center justify-center">
                    {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🔒', label: 'Secure Payments', sub: 'SSL encrypted' },
            { icon: '⚡', label: '48h Onboarding', sub: 'Ready in 2 days' },
            { icon: '📊', label: 'Live Analytics', sub: 'Real-time data' },
            { icon: '🎯', label: 'Dedicated Support', sub: '24/7 available' },
          ].map(badge => (
            <div key={badge.label} className="card p-5 text-center">
              <div className="text-3xl mb-3">{badge.icon}</div>
              <p className="font-semibold text-gray-900 text-sm">{badge.label}</p>
              <p className="text-xs text-gray-400 mt-1">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
