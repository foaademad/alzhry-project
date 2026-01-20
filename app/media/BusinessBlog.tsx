"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  { img: "/image/media/image1.png", title: "Saudi Gets Life Membership", date: "21 أكتوبر" },
  { img: "/image/media/image2.png", title: "ذكرى بيعة ولي العهد", date: "21 أكتوبر" },
  { img: "/image/media/image3.png", title: "OPTIMISM, TEAMWORK AND VISION THE KEY", date: "21 أكتوبر" },
  { img: "/image/media/image4.png", title: "الأوامر الملكية من أجل المواطن", date: "21 أكتوبر" },
  { img: "/image/media/image5.png", title: "مجموعة الظاهري مقاولون عامون", date: "22 أكتوبر" },
  { img: "/image/media/image6.png", title: "المعاني العظيمة لليوم الوطني", date: "22 أكتوبر" },
  { img: "/image/media/image7.png", title: "الجنادرية تجسد إرثاً تاريخياً عريقاً", date: "22 أكتوبر" },
  { img: "/image/media/image8.png", title: "الدكتوراه للظاهري", date: "12 يناير" },
  { img: "/image/media/image9.png", title: 'الإنسان "سلمان بن عبدالعزيز"', date: "17 يناير" },
  { img: "/image/media/image10.png", title: "اليوم الوطنى", date: "17 يناير" },
  { img: "/image/media/image11.png", title: "مهارات القيادة الفعالة", date: "17 يناير" },
  { img: "/image/media/image12.png", title: "زهابكو السعودية والدرجة الاولي", date: "18 يناير" },
  { img: "/image/media/image13.png", title: "أمن واستقرار الأمة العربية", date: "18 يناير" },
  { img: "/image/media/image14.png", title: "الظاهري رئيسا لمجلس الأعمال السعودي - الماليزي", date: "18 يناير" },
];

export default function CreativeCards() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const validCards = cardsRef.current.filter((el) => el);

    validCards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 30, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="creative_section">
      <div className="creative_shapes">
        <div className="shape s1"></div>
        <div className="shape s2"></div>
        <div className="shape s3"></div>
      </div>

      <div className="cards_container">
        {articles.map((art, idx) => (
          <div
            key={idx}
            className="card"
            ref={(el) => {
              if (el && !cardsRef.current.includes(el)) {
                cardsRef.current.push(el);
              }
            }}
          >
            <div className="card_image">
              <img src={art.img} alt={art.title} />
            </div>
            <div className="card_content">
              <h3 className="card_title">{art.title}</h3>
              <span className="card_date">{art.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
