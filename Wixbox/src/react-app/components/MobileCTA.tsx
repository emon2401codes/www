import { useState, useEffect } from 'react'
import { Calendar, X } from 'lucide-react'
import { Button } from './ui/button'

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 200px and if not dismissed
      setIsVisible(window.scrollY > 200 && !isDismissed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const bookCall = () => {
    window.open('https://wa.me/message/WM2DELWYY7VOG1', '_blank')
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-700 shadow-lg mx-4 mb-4 rounded-xl">
        <div className="p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                Let's Build Your Website
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                onClick={bookCall} 
                size="sm" 
                className="flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 border-0"
              >
                <Calendar className="h-4 w-4" />
                Get Your Website
              </Button>
              
              <button
                onClick={handleDismiss}
                className="p-2 text-slate-400 hover:text-slate-300 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
