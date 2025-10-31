import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const bookCall = () => {
    window.open('https://wa.me/message/WM2DELWYY7VOG1', '_blank')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center -ml-5">
            <img 
              src="https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Story.png" 
              alt="Wixbox Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('results')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={bookCall} 
              size="default"
              className="bg-white text-slate-900 hover:bg-slate-100 border-0"
            >
              Get Your Website
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors text-white"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700 bg-slate-900/95 backdrop-blur-xl">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('results')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                FAQ
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={bookCall} 
                  className="w-full bg-white text-slate-900 hover:bg-slate-100 border-0"
                >
                  Get Your Website
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
