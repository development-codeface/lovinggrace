import React from "react";
import Layout from "@/components/layout";
import { getPageContent } from "@/libs/contents/wordpress/data";
import Journey from "@/components/our-church/Journey";
import HeroSection from "@/components/our-church/HeroSection";
import FaithAndTransformation from "@/components/our-church/FaithAndTransformation";

const page = async () => {
  const data: OurChurchType = await getPageContent("our-church");
  return (
    <>
      <HeroSection
        heroSectionImage={data.page.acf.heroSection.bannerimage.sourceUrl}
        title={data.page.acf.heroSection.tittle}
        description={data.page.acf.heroSection.description}
      />
      {/* <FaithAndTransformation data={data} /> */}
      <Journey data={data} />
    </>
  );
};

export default page;
