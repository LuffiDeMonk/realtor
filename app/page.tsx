import Banner from "@/components/common/Banner";
import CustomHeading from "@/components/common/CustomHeading";
import CustomSubHeading from "@/components/common/CustomSubHeading";
import Exclusives from "@/components/common/Exclusives";
import OurAgents from "@/components/common/OurAgents";
import Services from "@/components/common/Services";
import WhatWeOffer from "@/components/common/WhatWeOffer";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <div>
        <CustomSubHeading
          title="What we offer"
        />
        <CustomHeading
          title="Exclusive Offer For You"
        />
        <Exclusives />
      </div>
      <WhatWeOffer />
      <div>
        <CustomSubHeading
          title='Agents'
        />
        <CustomHeading
          title='Our Agents'
        />
        <OurAgents />
      </div>
      <div>
        <CustomSubHeading
          title="Blog"
        />
        <CustomHeading
          title="Recent Blog"
        />
      </div>
    </>
  );
}
