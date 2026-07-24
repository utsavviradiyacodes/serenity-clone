import heroBg from "../../assets/images/hero-bg.jpeg";
import Button from "../common/Button";
import SectionIntro from "../section-intro/SectionIntro";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-linear-to-b from-stone-950/70 via-stone-950/50 to-stone-950/80" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <p className="font-serif text-lg text-stone-300 italic md:text-xl">
              "Be still, and know that I am God."
            </p>

            <p className="mt-2 text-sm tracking-wider text-primary-400">
              Psalm 46:10
            </p>
          </div>

          <SectionIntro
            title="Find Rest for Your Soul"
            titleAs="h1"
            titleTone="overlay"
            description="Step away from the noise. Enter into silence. Discover the quiet place where God meets you."
            descriptionTone="overlay"
            descriptionSize="hero"
            descriptionGap="large"
            align="center"
          />

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              href="/retreats"
              variant="primaryHero"
              size="lg"
              arrow
              className="bg-amber-50"
            >
              Explore Retreats
            </Button>

            <Button href="/direction" variant="outlineWhite" size="lg">
              Begin Spiritual Direction
            </Button>
          </div>
        </div>

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-stone-400">
            <span className="text-xs tracking-widest uppercase">
              Enter the Stillness
            </span>

            <svg
              className="h-6 w-6 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
