import { Server, Zap, Shield, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary to-primary-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ultra-Low Latency Forex VPS Hosting
          </h1>
          <p className="text-xl text-primary-100 mb-10">
            Experience trading execution speeds under 1ms with our optimized VPS
            solutions located in major financial hubs worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/plans"
              className="px-6 py-3 bg-white text-primary rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              View Plans
            </a>
            <a
              href="/features"
              className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Value Icons */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Server, title: '99.9% Uptime', desc: 'Guaranteed reliability' },
            { icon: Zap, title: '<1ms Latency', desc: 'Lightning fast execution' },
            { icon: Shield, title: 'Secure', desc: 'Bank-grade encryption' },
            { icon: Globe, title: 'Global', desc: '12 locations worldwide' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/10 mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-primary-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
