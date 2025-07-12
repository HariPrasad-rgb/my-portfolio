'use client';
import { useEffect, useState } from 'react';

const useSectionObserver = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // top: -30%, bottom: -60%
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('✅ In View:', entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        console.log(`📌 Attaching observer to: #${id}`);
        observer.observe(el);
      } else {
        console.warn(`⚠️ Could not find section: #${id}`);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};

export default useSectionObserver;
