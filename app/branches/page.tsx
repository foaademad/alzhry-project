"use client";

import Image from "next/image";

export default function BranchesPage() {
  return (
    <section className="branches_section fade_in">
      <div className="branches_container">
        <h1 className="branches_title">فروعنا</h1>
        <p className="branches_intro">
          اكتشف فروع مجموعة الظاهري المختلفة والخدمات التي نقدمها في كل فرع.
        </p>

        {/* الفروع */}
        <div className="branch_item" id="central-markets">
            
          <h2>فرع الأسواق المركزية والمطاعم</h2>
          <p>يقدم هذا الفرع حلولاً مبتكرة للأسواق والمطاعم، ويشمل إدارة وتشغيل المتاجر الغذائية والمطاعم.</p>
        </div>

        <div className="branch_item" id="food-services">
          <h2>فرع المواد الغذائية والإعاشة وخدمات التشغيل</h2>
          <p>يشمل توفير المواد الغذائية والإعاشة وخدمات التشغيل المتكاملة للمؤسسات والشركات.</p>
        </div>

        <div className="branch_item" id="kitchen-equip">
          <h2>فرع وجار الخليج لمعدات المطابخ</h2>
          <p>يختص بتوفير معدات المطابخ التجارية والصناعية بأحدث المواصفات العالمية.</p>
        </div>

        <div className="branch_item" id="contracting">
          <h2>فرع المقاولات العامة</h2>
          <p>يغطي مشاريع المقاولات العامة، من البناء والتشييد إلى إدارة المشاريع الكبرى.</p>
        </div>

        <div className="branch_item" id="security">
          <h2>فرع القعقاع للخدمات الأمنية</h2>
          <p>يوفر خدمات أمنية متكاملة للمؤسسات والمرافق العامة والخاصة.</p>
        </div>

        <div className="branch_item" id="business">
          <h2>فرع العمليات التجارية والتوكيلات</h2>
          <p>يختص بالعمليات التجارية، التوكيلات، والخدمات اللوجستية للمشاريع المختلفة.</p>
        </div>

        <div className="branch_item" id="uae">
          <h2>فرع مجموعة شركات الظاهري السعودية بالإمارات</h2>
          <p>يمثل المجموعة في دولة الإمارات ويوفر كافة الخدمات التجارية والإدارية.</p>
        </div>

        <div className="branch_item" id="military">
          <h2>فرع التجهيزات العسكرية والأمنية</h2>
          <p>يقدم حلول وتجهيزات عسكرية وأمنية متطورة للمؤسسات الحكومية والخاصة.</p>
        </div>
      </div>
    </section>
  );
}
