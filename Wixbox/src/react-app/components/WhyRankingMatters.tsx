import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

export default function WhyRankingMatters() {
  const openWhatsApp = () => {
    window.open('https://wa.me/message/WM2DELWYY7VOG1', '_blank')
  }

  const points = [
    "First impression = your online storefront.",
    "Visitors judge your brand in under 3 seconds.",
    "Fast, modern sites = more trust and conversions.",
    "Clear messaging = more leads and sales.",
    "Mobile-friendly design = reach every customer.",
    "A great website works 24/7 to bring you clients."
  ]

  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-700 border-slate-600 shadow-xl">
            <CardContent className="p-6 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="responsive-heading-md font-bold text-white mb-6 md:mb-8">
                  Why Your Website Matters
                </h2>
                
                <div className="grid sm:grid-cols-1 gap-4 md:gap-6 mb-8 md:mb-10 max-w-3xl mx-auto">
                  {points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-left"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-slate-200">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <Button 
                    onClick={openWhatsApp}
                    size="lg"
                    className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 h-auto flex items-center gap-3 bg-white text-slate-900 hover:bg-slate-100 border-0"
                  >
                    Get Your Website
                    <ArrowDown className="h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
