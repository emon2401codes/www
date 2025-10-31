import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export default function Pricing() {
  const bookCall = () => {
    window.open('https://wa.me/message/WM2DELWYY7VOG1', '_blank')
  }

  const plans = [
    {
      name: "MVP Sprint",
      duration: "30 Days",
      type: "One-time",
      description: "Foundation + quick wins to get you ranking fast",
      features: [
        "Complete GBP audit & optimization",
        "Category & service setup",
        "Photo/video optimization", 
        "Review system implementation",
        "8 strategic posts",
        "Q&A optimization",
        "Basic citation building",
        "Performance baseline report"
      ],
      cta: "Get Your Website"
    },
    {
      name: "Pro Managed",
      duration: "Monthly",
      type: "Ongoing",
      description: "Ongoing ops, posts, tracking, and reporting",
      features: [
        "Everything in MVP Sprint",
        "Weekly strategic posts",
        "Review management & responses",
        "Geo-grid ranking tracking",
        "Monthly optimization updates",
        "Competitor monitoring",
        "Citation management",
        "Quarterly strategy reviews",
        "Priority support"
      ],
      cta: "Get Your Website",
      popular: true
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no long-term contracts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full relative ${plan.popular ? 'border-blue-500 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-900">{plan.duration}</span>
                    <p className="text-slate-600 text-sm">{plan.type}</p>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={bookCall}
                    className="w-full"
                    variant={plan.popular ? "default" : "secondary"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600">
            All plans include our 30-day satisfaction guarantee. Not happy? We'll make it right.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
