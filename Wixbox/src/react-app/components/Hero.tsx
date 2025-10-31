import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export default function Hero() {
  const bookCall = () => {
    window.open('https://wa.me/message/WM2DELWYY7VOG1', '_blank')
  }

  const industries = [
    'Junk Removal',
    'Autodetailing', 
    'Solar Company',
    'HVAC Service',
    'Resort',
    'Medical'
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 -mt-3"
        >
          <h1 className="responsive-heading-xl font-bold text-white">
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              No Website Means Missed- <br />
              <span className="bg-gradient-to-t from-[#ff2e00] to-[#fff500] bg-clip-text text-transparent">
                Leads Every Single Day.
              </span>
            </motion.span>
            <motion.span
              className="block responsive-subtitle mt-6 text-slate-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We design websites that generate leads, build credibility, and grow your revenue <br className="hidden md:block" />Focus on your business, while we focus on getting you more business.
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="responsive-heading-sm text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Worked with biggest industries
        </motion.p>

        {/* Industry Tags - Sliding Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16 overflow-hidden"
        >
          <div className="relative w-full">
            <div className="flex animate-slide-infinite">
              {/* First set of industries */}
              {industries.map((industry, index) => (
                <motion.div
                  key={`first-${industry}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.2)"
                  }}
                  className="flex-shrink-0 mx-2 px-6 py-3 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {industry}
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {industries.map((industry, index) => (
                <motion.div
                  key={`second-${industry}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.2)"
                  }}
                  className="flex-shrink-0 mx-2 px-6 py-3 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {industry}
                </motion.div>
              ))}
              {/* Third set for extra seamless effect */}
              {industries.map((industry, index) => (
                <motion.div
                  key={`third-${industry}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.2)"
                  }}
                  className="flex-shrink-0 mx-2 px-6 py-3 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={bookCall}
              size="lg" 
              className="text-lg px-8 py-4 h-auto bg-white text-slate-900 hover:bg-slate-100 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl border-0"
            >
              Get Your Website
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 hidden lg:block">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"
          />
        </div>
        
        <div className="absolute top-1/3 right-16 hidden lg:block">
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 opacity-20"
          />
        </div>

        <div className="absolute bottom-1/4 left-1/4 hidden lg:block">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-600 opacity-20"
          />
        </div>
      </div>
    </section>
  )
}
