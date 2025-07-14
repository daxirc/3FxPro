import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        '1 CPU Core',
        '2GB RAM',
        '30GB SSD',
        '1 Trading Platform',
        'Basic Support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      features: [
        '2 CPU Cores',
        '4GB RAM',
        '60GB SSD',
        '2 Trading Platforms',
        'Priority Support',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Advanced',
      price: '$99',
      period: '/month',
      features: [
        '4 CPU Cores',
        '8GB RAM',
        '120GB SSD',
        'Unlimited Platforms',
        '24/7 VIP Support',
      ],
      cta: 'Get Premium',
      popular: false,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: [
        '8 CPU Cores',
        '16GB RAM',
        '240GB SSD',
        'Unlimited Platforms',
        'Dedicated Resources',
        'Custom Configurations',
        '24/7 Dedicated Support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your trading needs. All plans include our
            low-latency network and 24/7 monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'ring-2 ring-primary transform scale-[1.02]' : ''
              }`}
            >
              <div className="p-6 bg-white h-full flex flex-col">
                {plan.popular && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block w-full py-3 px-4 text-center rounded-md font-medium ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : plan.name === 'Enterprise'
                      ? 'bg-gray-800 text-white hover:bg-gray-900'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
