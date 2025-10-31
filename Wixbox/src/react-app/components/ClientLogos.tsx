import { motion } from 'framer-motion'

export default function ClientLogos() {
  const logos = [
    {
      name: "2025",
      url: "https://mocha-cdn.com/019942d4-8f5b-70c5-99c3-949f10a105c8/67ef386c1676d6abaf67ae75_2025-logo-dark-1-p-500.png",
      width: "w-24"
    },
    {
      name: "Platinum Prestige Detailing",
      url: "https://mocha-cdn.com/019942d4-8f5b-70c5-99c3-949f10a105c8/logo.png",
      width: "w-40"
    },
    {
      name: "Junk Removal",
      url: "https://mocha-cdn.com/019942d4-8f5b-70c5-99c3-949f10a105c8/hamptons-pickup2.PNG",
      width: "w-36"
    },
    {
      name: "Fashion",
      url: "https://mocha-cdn.com/019942d4-8f5b-70c5-99c3-949f10a105c8/Fashion-Logo.png",
      width: "w-32"
    },
    {
      name: "Double A Roofing",
      url: "https://mocha-cdn.com/019942d4-8f5b-70c5-99c3-949f10a105c8/logo-(2).png",
      width: "w-40"
    }
  ]

  // Create enough duplicates for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-16 border-y border-slate-200 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-slate-600 text-lg">
            Trusted by local businesses in home services, clinics, hospitality, retail, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className={`flex-shrink-0 ${logo.width} h-16 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100`}
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
