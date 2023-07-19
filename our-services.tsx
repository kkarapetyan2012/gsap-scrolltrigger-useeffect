import Layout from "components/Layout";
import SEO from "components/SEO";
import React, { FC } from "react";
import Hero from "components/Hero";
import OurServiceStyle from "assets/styles/pages/OurService.style";
import ContactUs from "components/ContactUs";
import { useServicePage } from "hooks/useServicePage";
import ZoomScroll from "components/our-services/components/ZoomScroll";
import FadeInScroll from "components/our-services/components/FadeInScroll";
import Description from "components/Description";

const OurServices: FC = () => {
  const {
    heroTitle,
    heroText,
    heroImg,
    seoTitle,
    seoDescription,
    servicesDescription,
    servicesList,
    processHeaderTitle,
    processList,
    contactImg,
    contactTitle,
  } = useServicePage();

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />
      <OurServiceStyle>
        <Hero heroTitle={heroTitle} heroText={heroText} heroImg={heroImg} />
        {/* animation components */}
        <ZoomScroll
          processList={processList}
          processHeaderTitle={processHeaderTitle}
        />

        <FadeInScroll servicesList={servicesList} />

        <Description
          title={servicesDescription}
          typography="h2"
          variant="dark"
          link="/our-portfolio/"
          linkTitle="See how we do that"
        />
      </OurServiceStyle>
      <ContactUs
        contactImg={contactImg}
        contactTitle={contactTitle}
        formName="contact-us-form"
      />
    </Layout>
  );
};

export default OurServices;
