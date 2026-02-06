import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                <img src="/logo.png" alt="Claritiy Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Claritiy
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Empowering businesses with cutting-edge AI automation solutions for the future of work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-orange-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-orange-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-orange-600 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/demos" className="text-gray-600 hover:text-orange-600 text-sm">
                  Demos
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-orange-500" />
                hello@claritiy.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-orange-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-orange-500" />
                San Francisco, CA
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-200 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2026 Claritiy. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
