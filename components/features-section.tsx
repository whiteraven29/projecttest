"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from '@/lib/motion';
import { useInView } from '@/lib/use-in-view';
import { WifiIcon, Battery, Smartphone, Zap, Pocket, Gift } from 'lucide-react';

const FeatureCard = ({ icon, title, description, index }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
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
      className="flex flex-col p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gift size={24} />,
      title: "20GB Free Data",
      description: "Get 20GB of data valid for a full month upon purchase, perfect for browsing, streaming, and more."
    },
    {
      icon: <Zap size={24} />,
      title: "Super 4G Speed",
      description: "Experience blazing-fast 4G connectivity for seamless internet access on all your devices."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Connects Up to 10 Devices",
      description: "Supports simultaneous connections for smartphones, laptops, desktops, and smart TVs."
    },
    {
      icon: <Pocket size={24} />,
      title: "Highly Portable",
      description: "Compact design fits in your pocket, bag, or pouch, making it easy to carry anywhere."
    },
    {
      icon: <Battery size={24} />,
      title: "Long Battery Life",
      description: "Holds a charge for 7+ hours, ensuring reliable connectivity throughout your day."
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="features" className="py-20 bg-muted/30">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Airtel Mini Pocket Wi-Fi Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            For only TSh 50,000, the Airtel Mini Pocket Wi-Fi delivers high-speed 4G connectivity in a portable package, perfect for staying connected on the go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;