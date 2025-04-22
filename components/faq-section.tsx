"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from '@/lib/motion';
import { useInView } from '@/lib/use-in-view';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How long does the battery last?",
    answer: "The SonicWave Pro headphones feature an industry-leading 40-hour battery life with active noise cancellation enabled. With ANC turned off, you can enjoy up to 60 hours of playback time. Additionally, our quick charge technology provides 5 hours of listening time with just a 10-minute charge."
  },
  {
    question: "Are the SonicWave Pro headphones water-resistant?",
    answer: "Yes, the SonicWave Pro headphones have an IPX4 water resistance rating, which means they are protected against splashes from any direction. This makes them ideal for workouts or use in light rain, but they should not be submerged in water."
  },
  {
    question: "How does the noise cancellation technology work?",
    answer: "SonicWave Pro uses advanced hybrid active noise cancellation that combines feedforward and feedback microphones. This system analyzes external noise and creates opposite sound waves to cancel it out before it reaches your ears, while also monitoring the sound you hear to make real-time adjustments for optimal noise cancellation."
  },
  {
    question: "Can I connect to multiple devices at once?",
    answer: "Yes, SonicWave Pro features multipoint Bluetooth technology that allows you to connect to two devices simultaneously. You can seamlessly switch between listening to music on your laptop and taking calls on your phone without having to disconnect and reconnect."
  },
  {
    question: "What's included in the box?",
    answer: "Each SonicWave Pro comes with the headphones, a premium hard carry case, a USB-C charging cable, a 3.5mm audio cable for wired listening, an airplane adapter, and a user manual."
  },
  {
    question: "What is your warranty policy?",
    answer: "SonicWave Pro comes with a comprehensive 3-year warranty that covers manufacturing defects and hardware malfunctions. Our SonicWave Studio model includes an extended 5-year warranty. We also offer a 30-day risk-free trial period, allowing you to return the product for a full refund if you're not completely satisfied."
  }
];

const FaqSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about SonicWave Pro.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;