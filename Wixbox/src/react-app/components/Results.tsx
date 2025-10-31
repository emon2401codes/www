import { motion } from 'framer-motion'
import { TrendingUp, Eye, Navigation } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export default function Results() {

  const results = [
    {
      icon: TrendingUp,
      image: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Before-On-the-Grid.jpg",
      title: "Before: Hard to Find on Google",
      description: "This client's business was buried — showing in scattered spots 100+ positions down with almost no visibility to new customers.",
      metrics: "Rankings: 100+"
    },
    {
      icon: Eye,
      image: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Higher-ranking-equals-more-business-(-Ranking-high-on-another-keyword-).jpg", 
      title: "After: Ranking in the Top Spots",
      description: "With our optimization, they now rank in the top positions across multiple keywords — driving more calls and consistent business growth.",
      metrics: "Multiple #1-6 Rankings"
    },
    {
      icon: Navigation,
      image: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Before-On-the-grid.png",
      title: "Before: Low Visibility = Few Calls", 
      description: "This spa had just 10% visibility and averaged position 14. Customers were finding competitors instead.",
      metrics: "Visibility: 10%, Avg ranking: 14.1"
    },
    {
      icon: TrendingUp,
      image: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/2-months-after-wokring-with-on-the-Grid-UPDATED.png",
      title: "After: #1 Across the Entire Market",
      description: "In just a short time, Luz de Mar Spa went from barely visible to dominating Google search. Now, when people search for spas in Hampton Bays, they're ranked #1 almost everywhere. This visibility has translated into a steady stream of new clients — many of whom became repeat customers. With an average ranking of 1.1 across the map, their business is the first choice in town.",
      metrics: "Visibility: 41%, Avg ranking: 1.1"
    },
    {
      icon: Navigation,
      image: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Solar-cpmany-near-me-RANKING-HIGH.jpg",
      title: "Before: Struggling to Compete",
      description: "Apex Energy was lost in the crowded solar market with rankings scattered across positions 7-17. Potential customers couldn't find them when searching for solar companies.",
      metrics: "Rankings: 7-17"
    },
    {
      icon: TrendingUp,
      image: "https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Solar-in-the-Hamptons-(-Ranking-High-in-most-important-keyword-).jpg",
      title: "After: Dominating Solar Keywords",
      description: "Now Apex Energy ranks #1 across the entire Hamptons for critical solar keywords. This dominant positioning has positioned them as the go-to solar company in the region.",
      metrics: "Multiple #1 Rankings"
    },
    
  ]

  return (
    <section id="results" className="py-16 md:py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Proven Results That Drive Calls
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Real businesses, real growth. See how we've helped companies like yours dominate local search.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Junk Removal Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-white text-center mb-6 md:mb-8"
            >
              Junk Removal
            </motion.h3>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {results.slice(0, 2).map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer bg-slate-700 border-slate-600">
                    <div className="relative">
                      <div className="aspect-video bg-slate-600 rounded-t-2xl overflow-hidden">
                        <img 
                          src={result.image} 
                          alt={result.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-xs font-medium text-white">{result.metrics}</span>
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-sm md:text-base font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                        {result.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Luz De Mar Spa Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white text-center mb-6 md:mb-8"
            >
              Luz De Mar Spa
            </motion.h3>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {results.slice(2, 4).map((result, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer bg-slate-700 border-slate-600">
                    <div className="relative">
                      <div className="aspect-video bg-slate-600 rounded-t-2xl overflow-hidden">
                        <img 
                          src={result.image} 
                          alt={result.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-medium text-white">{result.metrics}</span>
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {result.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        {/* Apex Energy Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white text-center mb-6 md:mb-8"
            >
              Apex Energy
            </motion.h3>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {results.slice(4, 6).map((result, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer bg-slate-700 border-slate-600">
                    <div className="relative">
                      <div className="aspect-video bg-slate-600 rounded-t-2xl overflow-hidden">
                        <img 
                          src={result.image} 
                          alt={result.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-medium text-white">{result.metrics}</span>
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {result.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
