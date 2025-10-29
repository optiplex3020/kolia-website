import Hero from "@/components/sections/Hero";
import WhatIsKolia from "@/components/sections/WhatIsKolia";
import FeaturedBox from "@/components/sections/FeaturedBox";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function RitualPage() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <WhatIsKolia />
      <FeaturedBox />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
