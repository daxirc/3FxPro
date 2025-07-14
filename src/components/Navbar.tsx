import { Menu, X, User, Server, HardDrive, BarChart2 } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { 
      name: 'Forex VPS', 
      href: '/forex-vps',
      icon: <HardDrive className="h-5 w-5 mr-2" />
    },
    { 
      name: 'Dedicated Servers', 
      href: '/dedicated-servers',
      icon: <Server className="h-5 w-5 mr-2" />
    },
    { 
      name: 'Broker Latency', 
      href: '/broker-latency',
      icon: <BarChart2 className="h-5 w-5 mr-2" />
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 pl-4 md:pl-6">
            <a href="/" className="text-xl font-bold text-gray-900">
              FXRDP
            </a>
          </div>

          {/* Desktop Navigation (Centered) */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-4 md:space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center"
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Client Area Button (Right-aligned) */}
          <div className="hidden md:block">
            <a
              href="/client-area"
              className="mr-4 md:mr-6 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors duration-200"
            >
              <User className="h-5 w-5 mr-2" />
              Client Area
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-white">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-blue-600 flex items-center"
                aria-current={item.current ? 'page' : undefined}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <a
              href="/client-area"
              className="block w-full mt-2 px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 text-center"
            >
              <span className="flex items-center justify-center">
                <User className="h-5 w-5 mr-2" />
                Client Area
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
