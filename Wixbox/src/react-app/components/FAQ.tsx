import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      question: "How long will it take to get my website live?",
      answer: "Most websites go live within 1-3 weeks after our onboarding call. We start by understanding your business goals and then move straight into building and optimizing your site — no unnecessary delays."
    },
    {
      question: "What do you need from me to get started?",
      answer: "We just need some basic details — your business name, services, contact info, and brand preferences (like colors or logo). After that, we handle everything from structure, design, and copywriting to domain and hosting setup."
    },
    {
      question: "Do I have to manage the website myself?",
      answer: "Not at all. We completely manage and maintain your website — including security, backups, uptime monitoring, and updates — so you can focus on running your business."
    },
    {
      question: "Will my website work on mobile and tablets?",
      answer: "Absolutely. Every site we build is fully responsive, meaning it looks and performs great on mobile, tablet, and desktop screens."
    },
    {
      question: "What kind of businesses do you work with?",
      answer: "We work with a wide range of local and service-based businesses — from auto repair shops and construction companies to resorts and spas. If you run a business that needs clients online, we can help you."
    },
    {
      question: "Do you have a WhatsApp number where I can connect?",
      answer: "Yes I do, you can connect me in this number +91 8910461768"
    }
  ]

  return (
    <section id="faq" className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Get answers to common questions about our website design and development services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-700 p-4 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-700">
                  <AccordionTrigger className="text-left text-sm md:text-base text-white hover:text-blue-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
