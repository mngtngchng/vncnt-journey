"use client";

import Layout from "../../RootClientLayout";
import TimesTransformSection from '../../../components/TimesTransformSection'
import Navigation from "../../../components/Navbar";

export default function AndroidApp() {
  return (
    <Layout>
      <Navigation
        navItems={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/portfolio/projects" },
        ]}
      />
      <TimesTransformSection />
    </Layout>
  );
}
