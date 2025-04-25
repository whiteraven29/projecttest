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
    question: "What data plans are included with the Airtel Mini Pocket Wi-Fi?",
    answer: "Upon purchasing the Airtel Mini Pocket Wi-Fi, you receive 20GB of free data valid for one month. After that, you can choose from  monthly bundles, starting from as low as TSh 10000 for 10GB monthly or TSh 30000 for 25GB monthly and other more bundles."
  },
  {
    question: "How fast is the connectivity on these routers?",
    answer: "The Airtel Mini Pocket Wi-Fi offers super 4G speeds, suitable for streaming, browsing, and gaming. The Airtel 5G Router provides lightning-fast 5G speeds, with download speeds up to 4Gbps in 5G-covered areas, and falls back to 4G where 5G is unavailable."
  },
  {
    question: "How many devices can connect to these routers?",
    answer: "The Airtel Mini Pocket Wi-Fi supports up to 10 simultaneous device connections, including smartphones, laptops, and smart TVs. The Airtel 5G Router can connect up to 64 devices at once, making it ideal for homes or small offices."
  },
  {
    question: "Are these routers portable?",
    answer: "Yes, the Airtel Mini Pocket Wi-Fi is highly portable, with a compact design that fits in your pocket, bag, or pouch, and a battery life of over 7 hours. The Airtel 5G Router is designed for home or office use but includes a UPS/power bank for portability during power outages."
  },
  {
    question: "What is the warranty policy for Airtel routers?",
    answer: "Both the Airtel Mini Pocket Wi-Fi and Airtel 5G Router come with a 1-year warranty covering manufacturing defects and hardware malfunctions. Contact Airtel customer support or visit an Airtel shop for warranty claims."
  },
  {
    question: "Can I use these routers in areas without 5G coverage?",
    answer: "Yes, the Airtel 5G Router is backward compatible and will connect to 4G or 3G networks in areas without 5G coverage. The Airtel Mini Pocket Wi-Fi uses 4G and is compatible with Airtel’s 4G network across Tanzania."
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
            Find answers to the most common questions about Airtel Mini Pocket Wi-Fi and Airtel 5G Router.
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