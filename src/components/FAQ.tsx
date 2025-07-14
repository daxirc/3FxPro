import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What makes your Forex VPS different from regular VPS services?",
      answer: "Our Forex VPS is specifically optimized for trading platforms with ultra-low latency connections to major brokers, dedicated CPU cores for strategy execution, and 24/7 monitoring to ensure uninterrupted trading. Unlike generic VPS services, we prioritize trading-specific performance metrics."
    },
    {
      question: "How does the low-latency infrastructure benefit my trading?",
      answer: "Our <1ms execution speeds to major brokers eliminate slippage and ensure your orders are filled at the best possible prices. The strategic placement of our servers in proximity to liquidity providers and exchanges minimizes network latency, giving you a competitive edge in high-frequency trading scenarios."
    },
    {
      question: "What security measures are in place to protect my trading accounts?",
      answer: "We implement military-grade 256-bit encryption, DDoS protection, isolated virtual environments, and regular security audits. All connections are secured with VPN and two-factor authentication. Our infrastructure is SOC 2 Type II compliant, ensuring enterprise-grade security for your trading operations."
    },
    {
      question: "Can I run multiple trading platforms simultaneously?",
      answer: "Yes, our higher-tier plans support running multiple trading platforms (like MetaTrader 4/5, cTrader, NinjaTrader) concurrently with dedicated resources. Each platform runs in its own isolated environment with guaranteed CPU allocation to prevent performance degradation."
    },
    {
      question: "What happens if there's an outage or technical issue?",
      answer: "Our 24/7 technical team immediately addresses any issues, with 99.99% uptime SLA. In the rare event of an outage, we provide automatic failover to backup servers in the same region. All client VPS instances are continuously monitored with instant alerting for any performance anomalies."
    },
    {
      question: "How do I migrate my existing trading setup to your VPS?",
      answer: "We offer free migration assistance where our team helps transfer your platforms, indicators, EAs, and settings seamlessly. The process typically takes under 30 minutes with zero downtime. We also provide pre-configured templates for popular trading platforms to get you started quickly."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our Forex VPS hosting services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-6 border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary" />
                )}
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6 pt-2 bg-gray-50">
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
