import { motion } from 'framer-motion'

export default function OurWork() {
  const images = [
    "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/5.jpg",
    "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/7.jpg",
    "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/1.jpg",
    "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/1222.jpg"
  ]

  return (
    <section id="our-work" className="py-16 md:py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Beautiful, high-converting websites that drive real business results.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 bg-slate-700/50 backdrop-blur-sm border border-slate-600 mx-auto" style={{ width: '80%' }}>
                  <div className="aspect-[9/16] bg-slate-600 overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Website project ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
