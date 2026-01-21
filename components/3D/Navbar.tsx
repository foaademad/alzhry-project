"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleLinkClick = () => {
    setOpen(false);
    setBranchesOpen(false);
  };

  const toggleBranches = () => {
    setBranchesOpen(!branchesOpen);
  };

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (navRef.current?.contains(target)) return;
      if (menuButtonRef.current?.contains(target)) return;
      setOpen(false);
      setBranchesOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [open]);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">مجموعة الظاهري</div>

        <button
          ref={menuButtonRef}
          className={`menu_btn ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div
          className={`nav_overlay ${open ? "active" : ""}`}
          onClick={handleLinkClick}
          aria-hidden="true"
        ></div>

        <nav ref={navRef} className={`nav_links ${open ? "active" : ""}`}>
          <Link href="/" onClick={handleLinkClick}>الرئيسية</Link>
          <Link href="/ceo" onClick={handleLinkClick}>عن رئيس المجموعة</Link>

          {/* Dropdown فروعنا */}
          <div className="nav_item_dropdown">
            <span onClick={toggleBranches}>
              فروعنا
              <FaChevronDown className={branchesOpen ? "rotate" : ""} />
            </span>

            <div className={`dropdown ${branchesOpen ? "active" : ""}`}>
              <Link href="/branches/central-markets" onClick={handleLinkClick}>فرع الأسواق المركزية والمطاعم</Link>
              <Link href="/branches/food-supply" onClick={handleLinkClick}>فرع المواد الغذائية والإعاشة</Link>
              <Link href="/branches/gulf-equipment" onClick={handleLinkClick}>وجار الخليج لمعدات المطابخ</Link>
              <Link href="/branches/contracting" onClick={handleLinkClick}>فرع المقاولات العامة</Link>
              <Link href="/branches/security-services" onClick={handleLinkClick}>فرع القعقاع للخدمات الأمنية</Link>
              <Link href="/branches/commercial-ops" onClick={handleLinkClick}>فرع العمليات التجارية والتوكيلات</Link>
              <Link href="/branches/uae-branch" onClick={handleLinkClick}>فرع الإمارات</Link>
              <Link href="/branches/military-equipment" onClick={handleLinkClick}>فرع التجهيزات العسكرية والأمنية</Link>
            </div>
          </div>

          <Link href="/group" onClick={handleLinkClick}>عن المجموعة</Link>
          <Link href="/media" onClick={handleLinkClick}>المركز الإعلامي</Link>
          <Link href="/careers" onClick={handleLinkClick}>التوظيف</Link>
          <Link href="/contact" onClick={handleLinkClick}>اتصل بنا</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
