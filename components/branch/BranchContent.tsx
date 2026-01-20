"use client";

import { motion } from "framer-motion";
import ServicesSection from "./ServicesSection";

type BranchContentProps = {
  title: string;
  text: string;
};

export default function BranchContent({ title, text }: BranchContentProps) {
  return (
    <section className="branch_section">
      {/* Floating Shapes */}
      <div className="shape s1"></div>
      <div className="shape s2"></div>
      <div className="shape s3"></div>

      <motion.div
        className="branch_container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="branch_title"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="branch_text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {text}
        </motion.p>
      </motion.div>

    </section>
  );
}
