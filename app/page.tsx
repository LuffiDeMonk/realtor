import TitleAnimation from "@/components/common/BaseAnimation";
import Banner from "../components/common/Banner";
import Services from "@/components/common/Services";
import Exclusives from "@/components/common/Exclusives";
import WhatWeOffer from "@/components/common/WhatWeOffer";
import About from "@/components/common/About";
import { Suspense } from "react";
import OurAgents from "@/components/common/OurAgents";
import OurBlogs from "@/components/common/OurBlogs";
import TestimonialWrapper from "@/components/common/TestimonialWrapper";
import CardSkeletonContainer from "@/components/common/CardSkeletonContainer";

export default async function Home() {
  return (
    <>
      <Banner />
      <Services />
      <TitleAnimation
        title="Exclusive Offer For You"
        subtitle="WHAT WE OFFER"
      />
      <Suspense fallback={<CardSkeletonContainer skeletonCount={3} />}>
        <Exclusives />
      </Suspense>
      <WhatWeOffer />
      <About />
      <TitleAnimation
        title="Our Agents"
        subtitle="AGENTS"
      />
      <Suspense fallback={<CardSkeletonContainer
        skeletonCount={4}
        containerStyles="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      />
      }>
        <OurAgents />
      </Suspense>
      <TitleAnimation
        title="Happy Clients"
        subtitle="TESTIMONIA"
      />
      <TestimonialWrapper />
      <TitleAnimation
        title='Recent Blog'
        subtitle="BLOG"
      />
      <Suspense fallback={<CardSkeletonContainer skeletonCount={4}
        containerStyles="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" />}>
        <OurBlogs />
      </Suspense>
    </>
  );
}
