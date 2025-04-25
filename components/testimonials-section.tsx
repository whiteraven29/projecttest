"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from '@/lib/motion';
import { useInView } from '@/lib/use-in-view';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Router ya Airtel Mini Pocket Wi-Fi imebadilisha maisha yangu! Ninaweza kubeba kwenye mfuko wangu na kushikamana na intaneti popote pale. Data za GB 20 za mwezi wa kwanza ni za kutosha kabisa!",
    author: "Fatuma Ally",
    title: "Mwanafunzi wa Chuo",
    avatar: "/assets/images/image1.jpg"
  },
  {
    quote: "Airtel 5G Router ni ya kasi sana! Ninaunganisha vifaa vyangu vyote, kutoka simu hadi TV, bila matatizo yoyote. Kasi ya 5G inafanya kazi zangu za ofisini ziwe rahisi zaidi.",
    author: "Joseph Mwanga",
    title: "Mfanyabiashara",
    avatar: "/assets/images/image2.jpg"
  },
  {
    quote: "Router hizi za Airtel ziko juu! Mini Pocket Wi-Fi ina betri inayodumu zaidi ya masaa saba, na 5G Router inaunganisha vifaa vingi sana. Zote ziko na bei nafuu na zinanifaa kabisa!",
    author: "Amina Juma",
    title: "Mwalimu",
    avatar: "/assets/images/image.jpeg"
  }
];

const TestimonialsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="testimonials" className="py-20">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wateja Wetu Wanasema Nini</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Usisikie tu kutoka kwetu. Hivi ndivyo wateja wa Airtel Mini Pocket Wi-Fi na Airtel 5G Router wanavyosema kuhusu uzoefu wao.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 mr-4 relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;