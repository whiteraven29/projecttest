"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from '@/lib/motion';
import { useInView } from '@/lib/use-in-view';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  index
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[];
  isPopular?: boolean;
  index: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-xl p-6 border ${
        isPopular 
          ? 'border-primary/50 shadow-lg shadow-primary/10' 
          : 'border-border'
      }`}
    >
      {isPopular && (
        <div className="py-1 px-3 bg-primary text-primary-foreground text-xs font-medium rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-muted-foreground"> / one-time</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={isPopular ? "default" : "outline"} 
        className="w-full"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Get Started
      </Button>
    </motion.div>
  );
};

const PricingSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const plans = [
    {
      title: "Airtel Mini Pocket Wi-Fi (4G)",
      price: "TSh 50,000",
      description: "Portable 4G connectivity for on-the-go users",
      features: [
        "20GB free data for one month",
        "Super 4G speed",
        "Connects up to 10 devices",
        "Highly portable design",
        "7+ hours battery life"
      ]
    },
    {
      title: "Airtel 5G Router",
      price: "TSh 110,000",
      description: "High-speed 5G connectivity for homes and offices",
      features: [
        "Lightning-fast 5G speeds",
        "Connects up to 64 devices",
        "Dual-band WiFi (2.4GHz & 5GHz)",
        "Four Ethernet ports",
        "Includes UPS/power bank",
        "30-day data plans from TSh 70,000",
        "1-year warranty"
      ],
      isPopular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Airtel Router</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the perfect Airtel router to stay connected with high-speed internet, whether at home or on the go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;