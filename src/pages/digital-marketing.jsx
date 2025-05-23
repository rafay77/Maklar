import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero";
import DigitalMarketingBrand from "@/components/brand/DigitalMarketingBrand";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import BeautyServicesShowcase from "@/components/service/NewServices";
import DigitalMarketingProtfolio from "@/components/portfolio/DigitalMarketingProtfolio";
import DigitalMarketingTestimonial from "@/components/testimonial/DigitalMarketingTestimonial";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingPrice from "@/components/price/DigitalMarketingPrice";
import DigitalMarketingBlog from "@/components/blog/DigitalMarketingBlog";

export default function DigitalMarketing() {
  return (
    <div>
      <Head>
        <title>Digital Marketing</title>
        <meta name="description" content="Digital Marketing Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <DigitalMarketingHero />
          <DigitalMarketingAbout />
          <BeautyServicesShowcase/>
          {/* <DigitalMarketingService /> */}
          {/* <DigitalMarketingProtfolio /> */}
          {/* <DigitalMarketingTestimonial /> */}
          <DigitalMarketingWorkflow />
          <DigitalMarketingBrand />
         {/* // <DigitalMarketingPrice /> */}
          {/* <DigitalMarketingBlog /> */}
        </RootLayout>
      </main>
    </div>
  );
}
