"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            SonicWave
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-foreground transition-colors">
              FAQ
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex"
            >
              Get Started
            </Button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="py-4 px-4 space-y-3">
            <button 
              onClick={() => scrollToSection('features')} 
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;