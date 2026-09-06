"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export function ImageReveal({
  src,
  alt,
  className = "",
  sizes = "100vw",
}: ImageRevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}