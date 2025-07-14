import { Cpu, Zap, Shield, Globe, HardDrive, Clock, BarChart2, Server, Wifi, Lock, Database, Activity } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Cpu,
      title: 'High Performance',
      description: 'Dedicated CPU cores ensure your trading platforms run at peak performance without lag.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Ultra Low Latency',
      description: '<1ms execution speeds to major brokers and exchanges for lightning-fast trades.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Military-grade encryption and DDoS protection keep your accounts secure.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Global Locations',
      description: '12 strategic locations worldwide to minimize latency to your brokers.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: HardDrive,
      title: 'SSD Storage',
      description: 'High-speed NVMe SSDs for rapid platform loading and strategy execution.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring ensures maximum uptime and performance.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Institutional-Grade Trading Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our forex-optimized VPS delivers the performance and reliability professional traders demand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl p-8 border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Icon container with gradient */}
              <div className={`relative z-10 w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-600 relative z-10">
                {feature.description}
              </p>
              
              {/* Static decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100"></div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="mt-24 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-white shadow-xl">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-center">Enterprise-Level Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '99.99%', label: 'Uptime SLA', icon: Activity },
                { value: '<1ms', label: 'Execution Speed', icon: Zap },
                { value: '12', label: 'Global Locations', icon: Globe },
                { value: '24/7', label: 'Expert Support', icon: Clock }
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <metric.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-primary-100 text-lg">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
