'use client';

import { motion } from 'motion/react';

// I'll use this referrence for scroll reveal.

export default function Practice() {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        About Practice motion
      </motion.h1>

      <motion.div
        className="w-full border border-white p-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <p>
          Lorem ipsum description just trying then add it 3x to the page.tsx
          because i will try the motion dev.
        </p>
      </motion.div>
    </section>
  );
}
