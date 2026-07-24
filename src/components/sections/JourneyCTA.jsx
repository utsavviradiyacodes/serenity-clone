import journeyBg from "../../assets/images/journey-bg.jpeg";

import SectionIntro from "../section-intro/SectionIntro";
import Button from "../common/Button";

function JourneyCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        <img src={journeyBg} alt="" className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-primary-950/80" />
      </div>

      <div className="absolute top-0 -left-1/4 h-full w-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="absolute -right-1/4 bottom-0 h-full w-1/2 rounded-full bg-primary-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-8 text-center">
        <div className="mb-10">
          <SectionIntro
            title="Begin Your Journey Inward"
            titleTone="overlay"
            description="Whether you're seeking rest, direction, or a deeper relationship with God, we're here to walk alongside you. Take the first step into stillness."
            descriptionTone="overlay"
            descriptionGap="large"
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button href="/retreats" variant="white" size="lg" arrow>
            Book a Retreat
          </Button>

          <Button href="/connect" variant="outlineWhite" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default JourneyCTA;
