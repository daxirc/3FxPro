import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCcVisa, 
  faCcMastercard, 
  faCcPaypal, 
  faCcAmex,
  faCcDiscover,
  faBitcoin
} from '@fortawesome/free-brands-svg-icons'
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faClock 
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Service Level Agreement', href: '/sla' },
  ]

  const serviceLinks = [
    { name: 'Forex VPS', href: '/forex-vps' },
    { name: 'Dedicated Servers', href: '/dedicated-servers' },
    { name: 'Broker Latency', href: '/broker-latency' },
    { name: 'Enterprise Solutions', href: '/enterprise' },
  ]

  const contactInfo = [
    { icon: faEnvelope, text: 'support@fxrdp.com' },
    { icon: faPhone, text: '+1 (555) 123-4567' },
    { icon: faMapMarkerAlt, text: 'New York, NY' },
    { icon: faClock, text: '24/7 Support' },
  ]

  const paymentMethods = [
    { icon: faCcVisa, name: 'Visa' },
    { icon: faCcMastercard, name: 'Mastercard' },
    { icon: faCcAmex, name: 'American Express' },
    { icon: faCcDiscover, name: 'Discover' },
    { icon: faCcPaypal, name: 'PayPal' },
    { icon: faBitcoin, name: 'Bitcoin' },
  ]

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">FXRDP</h3>
            <p className="text-gray-400 leading-relaxed">
              Enterprise-grade Forex VPS hosting with ultra-low latency, 
              99.99% uptime SLA, and military-grade security.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'youtube'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social}
                >
                  <FontAwesomeIcon 
                    icon={['fab', social]} 
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services Menu */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Menu */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className="h-4 w-4 mt-0.5 mr-3 text-gray-400" 
                  />
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">
            We Accept
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method) => (
              <div 
                key={method.name}
                className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                title={method.name}
              >
                <FontAwesomeIcon 
                  icon={method.icon} 
                  className="h-6 w-6 text-gray-300 hover:text-white" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} FXRDP Technologies. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Compliance
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Security
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
