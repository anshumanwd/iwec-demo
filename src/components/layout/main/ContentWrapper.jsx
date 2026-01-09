"use client";
import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function ContentWrapper({ children }) {
  return (
    <div>
      <BackToTop />
      <Header headerType={4} />
      <Header headerType={4} isStickyHeader={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="top-space-15"></div>
            {children}
          </main>
          <Footer5 />
        </div>
      </div>
      <ClientWrapper />
    </div>
  )
}
