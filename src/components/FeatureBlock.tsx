"use client";


import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming standard Shadcn utility
import { Link } from "react-router-dom";

// Interface for the component props
interface FeatureBlockProps {
  titlePart1: string;
  titlePart2: string;
  highlightColor: string; // Tailwind color class, e.g., 'text-green-500'
  description: string;
  subdescription?: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string; // Optional custom background color
}

const FeatureBlock = ({
  titlePart1,
  titlePart2,
  highlightColor,
  description,
  ctaText,
  ctaLink,
  subdescription,
  backgroundColor = "bg-[#1d1d1f]", // Default background to match the screenshot
}: FeatureBlockProps) => {
  return (
    <section className={cn("w-full py-32", backgroundColor)}>
      <motion.div
        className="max-w-4xl mx-auto md:mx-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8">
          {titlePart1} <span className={highlightColor}>{titlePart2}</span>
        </h2>

        {/* Description/Body Text */}
        <div className="text-gray-400 max-w-xl text-lg space-y-4 font-light">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
          {description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {subdescription}
      
          </motion.p>
        </div>

        {/* CTA Link */}
        <motion.div
          className="mt-12 inline-block group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link to={ctaLink}>
            <span className="text-white text-base font-medium border-b border-white hover:border-transparent transition-all duration-300 flex items-center">
              {ctaText}
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }} // Sharp horizontal shift on hover
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureBlock;