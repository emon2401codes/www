import { motion } from 'framer-motion'
import { Grid, Clock, Compass, MessageSquare, MousePointer, Smartphone, Users, Play } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export default function PainPoints() {

  const painPoints = [
    {
      icon: Grid,
      title: "Outdated Design",
      description: "An old or cluttered site instantly kills trust. Modern customers expect sleek, fast, mobile-friendly design — not 2015 templates."
    },
    {
      icon: Clock,
      title: "Slow Loading Speed",
      description: "Every second counts. If your site takes too long to load, visitors bounce before even seeing your offer."
    },
    {
      icon: Compass,
      title: "Confusing Navigation",
      description: "If people can't find what they're looking for in 3 clicks, they leave. Clear structure = higher engagement and conversions."
    },
    {
      icon: MessageSquare,
      title: "Weak Copy & Messaging",
      description: "Your design can look great, but if the words don't connect emotionally or clearly explain what you offer, you lose the sale."
    },
    {
      icon: MousePointer,
      title: "No Clear CTA",
      description: "Many sites look nice but don't guide users to take action. You need buttons, hooks, and offers placed strategically."
    },
    {
      icon: Smartphone,
      title: "Unoptimized for Mobile",
      description: "Most visitors are on phones — if your site breaks or scrolls awkwardly, you're losing half your audience instantly."
    },
    {
      icon: Users,
      title: "No Social Proof",
      description: "Testimonials, case studies, and logos build instant trust. Without them, visitors don't believe you can deliver results."
    },
    {
      icon: Play,
      title: "No Motion or Storytelling",
      description: "Static sites feel lifeless. Dynamic visuals, subtle animations, and storytelling flow make users stay longer and buy faster."
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="responsive-heading-lg font-bold text-white mb-4"
          >
            Why Your Website Is Losing Clients
            <span className="text-blue-400"> (and How to Fix It)</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-slate-800 border-slate-700">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 rounded-xl bg-red-900/30 border border-red-800/30">
                      <point.icon className="h-5 w-5 md:h-6 md:w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
