"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from '@/lib/motion';
import { useInView } from '@/lib/use-in-view';
import { WifiIcon, Battery, Headphones, Zap, Shield, Volume2 } from 'lucide-react';

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
      icon: <Headphones size={24} />,
      title: "Active Noise Cancellation",
      description: "Industry-leading ANC technology that blocks out 99.7% of external noise for immersive listening."
    },
    {
      icon: <Battery size={24} />,
      title: "40-Hour Battery Life",
      description: "Extended battery life that lasts for days of normal use. Quick charge gives you 5 hours in just 10 minutes."
    },
    {
      icon: <WifiIcon size={24} />,
      title: "Bluetooth 5.2",
      description: "Latest Bluetooth technology ensures stable connection up to 100ft away with minimal latency."
    },
    {
      icon: <Zap size={24} />,
      title: "Hi-Fi Sound Quality",
      description: "40mm titanium drivers deliver studio-quality sound with deep bass and crystal clear highs."
    },
    {
      icon: <Shield size={24} />,
      title: "Water & Sweat Resistant",
      description: "IPX4-rated protection keeps your headphones safe during workouts or light rain."
    },
    {
      icon: <Volume2 size={24} />,
      title: "Adaptive EQ",
      description: "Smart technology that automatically adjusts sound balance based on your listening preferences."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            SonicWave Pro combines cutting-edge technology with elegant design to deliver an exceptional audio experience.
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