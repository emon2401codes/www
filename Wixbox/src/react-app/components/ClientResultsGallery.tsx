import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

export default function ClientResultsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const clientResults = [{
    id: 1,
    url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/WhatsApp-Image-2025-10-30-at-03.45.47.jpeg",
    title: "Client Feedback Message 1",
    description: "Real client feedback about website improvements"
  }, {
    id: 2,
    url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/WhatsApp-Image-2025-10-30-at-03.46.26.jpeg",
    title: "Client Feedback Message 2",
    description: "Positive response about SEO results and rankings"
  }, {
    id: 3,
    url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/WhatsApp-Image-2025-10-30-at-03.44.11.jpeg",
    title: "Client Feedback Message 3",
    description: "Client satisfaction with new website design"
  }, {
    id: 4,
    url: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/WhatsApp-Image-2025-10-30-at-03.44.35.jpeg",
    title: "Client Feedback Message 4",
    description: "Appreciation for professional website work"
  }];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? clientResults.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === clientResults.length - 1 ? 0 : selectedImage + 1);
    }
  };

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
              Feedback from Clients
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Read real messages from satisfied clients sharing their success stories and positive feedback.
            </p>
          </motion.div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clientResults.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div onClick={() => openModal(index)} className="relative group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-700 bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src={result.url} 
                      alt={result.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                          <span className="text-slate-900 font-medium">Click to expand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-center mt-4 text-sm font-medium text-slate-300">
                    {result.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-4">
              {clientResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-60"
                >
                  <div onClick={() => openModal(index)} className="relative group cursor-pointer">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-700 bg-slate-700">
                      <img 
                        src={result.url} 
                        alt={result.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                            <span className="text-slate-900 font-medium text-sm">Tap to expand</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-center mt-3 text-sm font-medium text-slate-300">
                      {result.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll indicator for mobile */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-700/50 px-3 py-2 rounded-full">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span>Swipe to see more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
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
                  src={clientResults[selectedImage].url}
                  alt={clientResults[selectedImage].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 z-50">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h3 className="text-white font-semibold mb-1">
                    {clientResults[selectedImage].title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {clientResults[selectedImage].description}
                  </p>
                  <p className="text-white/60 text-xs mt-2">
                    {selectedImage + 1} of {clientResults.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
