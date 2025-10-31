import { MapPin, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 md:mb-12">
          {/* Business Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Wixbox Agency</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Wixbox Agency</p>
                  <p className="text-slate-300 text-xs">Your all-in-one web solution</p>
                  <p className="text-slate-300 text-xs">Nationwide Service</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:wixo.official@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  wixo.official@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Results
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-semibold mb-6">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://wa.me/message/WM2DELWYY7VOG1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 md:pt-8 text-center">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Wixbox Agency. All rights reserved. 
            Your all-in-one web solution partner.
          </p>
        </div>
      </div>
    </footer>
  )
}
