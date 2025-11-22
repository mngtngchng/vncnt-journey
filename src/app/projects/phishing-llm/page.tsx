"use client";

import RootClientLayout from "../../RootClientLayout";
import PhishingDetectionSection from '../../../components/PhishingDetectionSection';
import Navbar from '../../../components/Navbar';

export default function PhishingDetection() {

  return (
    <RootClientLayout>
      <Navbar
        navItems={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/portfolio/projects" },
        ]}
      />
      <PhishingDetectionSection />
    </RootClientLayout>
  );
}
