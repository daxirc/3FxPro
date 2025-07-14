import { Mail, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Company Logo & About Section */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4">
            <img 
              src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg" 
              alt="FXRDP Logo" 
              className="h-10 w-auto mr-3"
            />
            <span className="text-xl font-bold">FXRDP</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Premium Forex VPS hosting solutions with ultra-low latency and 99.9% uptime for professional traders.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-1.5">
            <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Our Team</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-1.5">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Submit Ticket</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Knowledge Base</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Live Chat</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-1.5">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Refund Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Acceptable Use</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-400">
              <Mail className="w-5 h-5 mr-2" />
              <span>support@fxrdp.com</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="col-span-full mt-8 pt-8 border-t border-gray-800">
          <h5 className="text-sm font-medium mb-3">Payment Methods</h5>
          <div className="flex flex-wrap gap-3 items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
              alt="Visa" 
              className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity"
              width="64"
              height="40"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity"
              width="64"
              height="40"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
              alt="PayPal" 
              className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity"
              width="64"
              height="40"
            />
            <img 
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=026" 
              alt="Bitcoin" 
              className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity bg-white p-1 rounded"
              width="64"
              height="40"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="col-span-full mt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} FXRDP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
