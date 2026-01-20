"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaBuilding, FaUsers, FaGlobe, FaBriefcase, FaUserTie, FaIndustry } from "react-icons/fa";

export default function NeonBusinessCounter() {
  const counters = [
    { id:1, icon:<FaBuilding/>, number:15000, title:"حلول الأعمال" },
    { id:2, icon:<FaUsers/>, number:196, title:"خبراء الحلول" },
    { id:3, icon:<FaGlobe/>, number:999, title:"شريك عالمي" },
    { id:4, icon:<FaBriefcase/>, number:41, title:"سنوات من الخبرة" },
    { id:5, icon:<FaUserTie/>, number:5000, title:"موظف" },
    { id:6, icon:<FaIndustry/>, number:80, title:"نشاطات مختلفة" },
  ];

  const [counted, setCounted] = useState<boolean[]>(Array(counters.length).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const newCounted = [...counted];
          counters.forEach((_, index) => newCounted[index] = true);
          setCounted(newCounted);
        }
      });
    }, { threshold: 0.4 });

    if(containerRef.current) observer.observe(containerRef.current);
    return () => { if(containerRef.current) observer.unobserve(containerRef.current); }
  }, []);

  return (
    <section className="neon_business_section" ref={containerRef}>
      <h2 className="neon_title">أرقام مجموعة الظاهري</h2>
      <div className="counters_container">
        {counters.map((counter, index) => (
          <div key={counter.id} className="counter_card">
            <div className="counter_icon">{counter.icon}</div>
            <div className="counter_number">
              +{counted[index] ? <CountUp end={counter.number}/> : 0}
            </div>
            <div className="counter_title">{counter.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 30);
    const interval = setInterval(() => {
      start += increment;
      if(start >= end){
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [end]);

  return <>{count}</>;
}
