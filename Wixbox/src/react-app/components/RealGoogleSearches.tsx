import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent } from './ui/dialog'

export default function RealGoogleSearches() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const searchImages = [
    {
      id: 1,
      url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Solar-ranking-in-the-region-not-just-town.jpg",
      title: "Solar Company Dominating Regional Search",
      description: "Apex Energy ranking #1 across the entire Hamptons region"
    },
    {
      id: 2,
      url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Liquor-store-in-local-pack.jpg",
      title: "Liquor Store Local Pack Dominance",
      description: "Multiple liquor stores ranking in top positions"
    },
    {
      id: 3,
      url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Spa-in-the-local-pack.jpg",
      title: "Spa Local Pack Results",
      description: "Luz De Mar Spa achieving top local rankings"
    },
    {
      id: 4,
      url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Solar-in-the-Hamptons-(-Ranking-High-in-most-important-keyword-).jpg",
      title: "Solar in Hamptons - Top Keyword",
      description: "Dominating the most important solar search terms"
    },
    {
      id: 5,
      url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Realtor-Ranking-high-on-web-searches.jpg",
      title: "Realtor High Web Search Rankings",
      description: "Real estate professional achieving top search visibility"
    },
    {
      id: 6,
      url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/top-in-the-local-pack-Liquor-store.jpg",
      title: "Top Local Pack Performance",
      description: "Jerusalem Plaza Liquor ranking #1 in local searches"
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? searchImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === searchImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % searchImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + searchImages.length) % searchImages.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <>
      <section className="py-16 md:py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Google Searches
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              See exactly how our clients appear in actual Google search results. These aren't mockups - they're real searches showing real rankings.
            </p>
          </motion.div>

          {/* Slideshow Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Main slideshow container */}
            <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl">
              <AnimatePresence initial={false} custom={currentSlide}>
                <motion.div
                  key={currentSlide}
                  custom={currentSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)

                    if (swipe < -swipeConfidenceThreshold) {
                      nextSlide()
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevSlide()
                    }
                  }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => openModal(currentSlide)}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-slate-600 bg-slate-700 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-full h-full bg-slate-600">
                      <img
                        src={searchImages[currentSlide].url}
                        alt={searchImages[currentSlide].title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                          <span className="text-slate-900 font-medium">Click to expand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            {/* Image Info Below Slideshow */}
            <div className="text-center mt-4 md:mt-6 px-4">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {searchImages[currentSlide].title}
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                {searchImages[currentSlide].description}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 md:mt-6 gap-2">
              {searchImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-400 scale-110' 
                      : 'bg-slate-500 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-3 md:mt-4">
              <span className="text-sm text-slate-400">
                {currentSlide + 1} of {searchImages.length}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Expanded View */}
      <Dialog open={selectedImage !== null} onOpenChange={() => closeModal()}>
        <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-black/95 border-0">
          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* Image */}
              <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
                <img
                  src={searchImages[selectedImage].url}
                  alt={searchImages[selectedImage].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 z-50">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h3 className="text-white font-semibold mb-1">
                    {searchImages[selectedImage].title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {searchImages[selectedImage].description}
                  </p>
                  <p className="text-white/60 text-xs mt-2">
                    {selectedImage + 1} of {searchImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
