
'use client';

import { Suspense } from 'react';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ProductGallery from './components/ProductGallery';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import FloatingButtons from './components/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
        <HeroSlider />
        <AboutUs />
        <Services />
        <ProductGallery />
        <Testimonials />
        <ContactUs />
        <FloatingButtons />
      </Suspense>
    </div>
  );
}
