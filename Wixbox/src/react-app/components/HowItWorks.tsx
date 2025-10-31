import { motion } from 'framer-motion'
import { Users, Palette, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function HowItWorks() {
  const steps = [
    {
      icon: Users,
      title: "Understand Your Goals",
      description: "We begin by getting to know you, your business, and what you want to achieve with your website.",
      features: [
        "Discuss your vision, goals, and target audience in a quick Google Meet or Zoom call",
        "Identify what your website needs to accomplish — leads, sales, or credibility",
        "Review your competitors and understand your market position", 
        "Create a clear plan before we start building"
      ]
    },
    {
      icon: Palette,
      title: "Build & Optimize",
      description: "Once we have a clear direction, our team designs and develops your site for both looks and performance.",
      features: [
        "Custom-built design that fits your brand identity",
        "Fully responsive and mobile-friendly layout",
        "Optimized for SEO, loading speed, and conversions",
        "Includes essential integrations"
      ]
    },
    {
      icon: Shield,
      title: "Manage & Secure",
      description: "After your website goes live, we take care of the backend so you don't have to worry about anything.",
      features: [
        "Keep your website secure and stable",
        "Monitor uptime and overall performance",
        "Handle all technical maintenance in the background",
        "Ensure everything runs smoothly, 24/7"
      ]
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="responsive-heading-md font-bold text-white mb-4">
            Our 3-Step Process
          </h2>
          <p className="responsive-subtitle text-slate-300 max-w-2xl mx-auto">
            We handle everything — from understanding your goals to building and managing a website that works for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full relative overflow-hidden bg-slate-800 border-slate-700">
                <div className="absolute top-4 left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <CardHeader className="pt-12 md:pt-16">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 md:p-3 rounded-xl bg-blue-900/30 border border-blue-800/30">
                      <step.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-base md:text-lg text-white">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 p-4 md:p-6">
                  <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-xs md:text-sm">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-xs text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-slate-800/70 backdrop-blur-xl border border-green-700/30 rounded-full px-4 md:px-6 py-3">
            <span className="text-2xl">💡</span>
            <span className="text-green-300 font-medium text-xs md:text-sm">No templates. No tech stress. Just a website that works and grows with your business.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
