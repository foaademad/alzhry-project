"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
    setBranchesOpen(false);
  };

  const toggleBranches = () => {
    setBranchesOpen(!branchesOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">مجموعة الظاهري</div>

        <button
          className={`menu_btn ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className={`nav_links ${open ? "active" : ""}`}>
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
