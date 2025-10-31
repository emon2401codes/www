import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

export default function FinalCTA() {
  const bookCall = () => {
    window.open('https://wa.me/message/WM2DELWYY7VOG1', '_blank')
  }

  return (
    <section className="py-16 md:py-20 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
            <CardContent className="p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                <div className="space-y-4">
                  <motion.h2 
                    className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Let's get you a website that doesn't only look good,{' '}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                      but performs top in your locality
                    </span>
                  </motion.h2>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    onClick={bookCall}
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl h-auto rounded-xl shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 border-0"
                  >
                    Get Your Website
                  </Button>
                </motion.div>

                <motion.p 
                  className="text-slate-400 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Ready to dominate your local market? Let's talk.
                </motion.p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
