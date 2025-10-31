import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const videoTestimonials = [
    {
      id: 1,
      mediaId: "7w7htjdyun", 
      title: "Client Success Story 1",
      aspect: "0.5660377358490566"
    },
    {
      id: 2,
      mediaId: "d3j1efhu43",
      title: "Client Success Story 2",
      aspect: "0.575"
    },
    {
      id: 3,
      mediaId: "rq1a5fxbze",
      title: "Client Success Story 3",
      aspect: "0.565625"
    },
    {
      id: 4,
      mediaId: "o30dry5pfa",
      title: "Client Success Story 4",
      aspect: "0.5660377358490566"
    },
    {
      id: 5,
      mediaId: "y2o17kvvl9",
      title: "Client Success Story 5",
      aspect: "0.5642633228840125"
    }
  ]

  // Auto-scroll functionality for mobile only
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoTestimonials.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [videoTestimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videoTestimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length)
  }

  useEffect(() => {
    // Load Wistia player script
    if (typeof window !== 'undefined') {
      const playerScript = document.createElement('script')
      playerScript.src = 'https://fast.wistia.com/player.js'
      playerScript.async = true
      document.head.appendChild(playerScript)

      // Load individual video scripts
      videoTestimonials.forEach(video => {
        const videoScript = document.createElement('script')
        videoScript.src = `https://fast.wistia.com/embed/${video.mediaId}.js`
        videoScript.async = true
        videoScript.type = 'module'
        document.head.appendChild(videoScript)

        // Add styles for loading state
        const style = document.createElement('style')
        style.textContent = `
          wistia-player[media-id='${video.mediaId}']:not(:defined) { 
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${video.mediaId}/swatch'); 
            display: block; 
            filter: blur(5px); 
            padding-top: ${(1 / parseFloat(video.aspect)) * 100}%; 
          }
        `
        document.head.appendChild(style)
      })
    }
  }, [])

  const WistiaPlayer = ({ video }: { video: typeof videoTestimonials[0] }) => {
    return (
      <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-600">
        <div className="relative w-full">
          {/* Wistia Player */}
          {React.createElement('wistia-player', {
            'media-id': video.mediaId,
            aspect: video.aspect,
            className: "w-full h-full rounded-2xl"
          })}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
          <h3 className="text-white font-medium text-xs">
            {video.title}
          </h3>
        </div>
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Straight From Our Clients
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Watch real testimonials from our satisfied clients sharing their success stories
          </p>
        </div>

        {/* Mobile: Single Video with Navigation */}
        <div className="block sm:hidden">
          <div className="relative max-w-sm mx-auto">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <WistiaPlayer video={videoTestimonials[currentSlide]} />
            </motion.div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: All Videos in Single Row */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WistiaPlayer video={video} />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-xs text-slate-400">
            <span className="sm:hidden">Swipe or tap arrows to see more testimonials</span>
            <span className="hidden sm:inline">Watch these testimonials from our satisfied clients</span>
          </p>
        </div>
      </div>
    </section>
  )
}
