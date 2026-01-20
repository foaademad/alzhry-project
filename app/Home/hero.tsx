"use client";

import { useEffect, useRef } from "react";
import initPlanet3D from "@/components/3D/planet";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { renderer, dispose } = initPlanet3D(canvasRef.current);

    return () => {
      if (dispose) dispose();

      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <section className="hero_main p-10">
      <canvas ref={canvasRef} className="planet-3D" />
      <div className="content">
        <h1>مرحبا بك في شركات الظاهري</h1>
        <p>
          هى احدى الشركات الرائدة فى المملكة العربية السعودية ومنطقة الخليج
          تأسست فى عام 1983 كفرع للمقاولات فى البداية، و طورت الشركة نشاطها إلى
          مجموعة متكامله من عشرة فروع متنوعة الأنشطة في مختلف المجالات حتى الان.
        </p>
      
      </div>
    </section>
  );
}
