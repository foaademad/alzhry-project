"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Branch = {
  title: string;
  videoSrc: string;
  link: string;
};

const branches: Branch[] = [
  { title: "فرع الأسواق المركزية والمطاعم", videoSrc: "/audio/frist.mp4", link: "/branches/central-markets" },
  { title: "فرع المواد الغذائية والإعاشة وخدمات التشغيل", videoSrc: "/audio/second.mp4", link: "/branches/food-supply" },
  { title: "فرع وجار الخليج لمعدات المطابخ", videoSrc: "/audio/third.mp4", link: "/branches/gulf-equipment" },
  { title: "فرع المقاولات العامة", videoSrc: "/audio/four.mp4", link: "/branches/contracting" },
  { title: "فرع القعقاع للخدمات الأمنية", videoSrc: "/audio/frist.mp4", link: "/branches/security-services" },
  { title: "فرع العمليات التجارية والتوكيلات", videoSrc: "/audio/second.mp4", link: "/branches/commercial-ops" },
  { title: "فرع الإمارات", videoSrc: "/audio/seven.mp4", link: "/branches/uae-branch" },
  { title: "فرع التجهيزات العسكرية والأمنية", videoSrc: "/audio/eight.mp4", link: "/branches/military-equipment" }
];

export default function BranchesSection() {
  return (
    <section className="branches_section">
      
      {/* عناصر خلفية عائمة */}
      <span className="float_shape shape1"></span>
      <span className="float_shape shape2"></span>
      <span className="float_shape shape3"></span>

      <motion.h2
        className="branches_title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        الفروع التي نقدمها
      </motion.h2>

      <div className="branches_container">
        {branches.map((branch, idx) => (
          <motion.div
            key={idx}
            className="branch_card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <video
              className="branch_video"
              src={branch.videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="branch_info">
              <h3 className="branch_name">{branch.title}</h3>
              <Link href={branch.link} className="branch_btn">
                معرفة المزيد
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
