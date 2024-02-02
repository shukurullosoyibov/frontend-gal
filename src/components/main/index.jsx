import React from "react";
import IntroSection from "./IntroSection";
import ProductWrapper from "./ProductWrapper";
import OurIndex from "./ourInstagram";


export default function MainSection() {
  return (
    <main className="main mt-4">
      <div className="page-content">
        <div className="container">
            <IntroSection />
     
            <ProductWrapper/>
            <OurIndex />
        </div>
      </div>
    </main>
  );
}
