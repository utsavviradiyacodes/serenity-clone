import chapel from "../../assets/images/spaces/chapel.jpeg";
import labyrinth from "../../assets/images/spaces/labyrinth.jpeg";
import prayerGarden from "../../assets/images/spaces/prayer-garden.jpeg";
import forestTrails from "../../assets/images/spaces/forest-trails.jpeg";

import SectionIntro from "../section-intro/SectionIntro";
import SpaceCard from "../space-card/SpaceCard";
import ArrowLink from "../common/ArrowLink";

const spaces = [
  {
    image: chapel,
    alt: "The Chapel",
    title: "The Chapel",
    description:
      "Our intimate stone chapel seats 40 and hosts the Daily Office. Simple, unadorned, with natural light streaming through clear glass windows.",
    features: [
      "Daily Office prayers",
      "Private prayer hours",
      "Candle lighting",
    ],
    availability: "Open 5:30 AM - 10:00 PM",
    imageWrapperClassName: "aspect-3/4",
    // imageWrapperClassName: "h-[768px]",
    className: "row-span-2",
  },
  {
    image: labyrinth,
    alt: "The Labyrinth",
    title: "The Labyrinth",
    description:
      "A classical 11-circuit Chartres-style labyrinth set in a meadow, offering a walking meditation path for releasing, receiving, and returning.",
    features: [
      "Self-guided walks",
      "Guided group walks monthly",
      "Wheelchair accessible path",
    ],
    availability: "Dawn to dusk",
    imageWrapperClassName: "aspect-16/10",
    // imageWrapperClassName: "h-[372px]",
  },
  {
    image: prayerGarden,
    alt: "Prayer Garden",
    title: "Prayer Garden",
    description:
      "A walled garden with benches, a small fountain, and plantings chosen for their symbolic and sensory qualities. A place to sit with God.",
    features: ["Sensory plantings", "Water feature", "Sheltered seating"],
    availability: "Open 6:00 AM - 9:00 PM",
    imageWrapperClassName: "aspect-16/10",
    // imageWrapperClassName: "h-[372px]",
  },
  {
    image: forestTrails,
    alt: "Forest Trails",
    title: "Forest Trails",
    description:
      "Three miles of wooded trails wind through our 80-acre property, with stations for prayer and benches for rest along the way.",
    features: ["3 miles of paths", "Prayer stations", "Wildlife observation"],
    availability: "Daylight hours",
    imageWrapperClassName: "aspect-16/10",
    // imageWrapperClassName: "h-[372px]",
  },
];

function SacredSpaces() {
  return (
    <section id="spaces" className="bg-stone-50 py-28 dark:bg-coffee-950">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16">
          <SectionIntro
            eyebrow="Sacred Spaces"
            title="80 Acres of Sanctuary"
            description="Our grounds are designed to invite encounter—with nature, with silence, with God. Wander freely and discover the space that speaks to your soul."
          />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12">
          {spaces.map((space) => (
            <SpaceCard
              key={space.title}
              image={space.image}
              alt={space.alt}
              title={space.title}
              description={space.description}
              features={space.features}
              availability={space.availability}
              imageWrapperClassName={space.imageWrapperClassName}
              className={space.className}
            />
          ))}
        </div>

        <div className="mt-12 grid place-content-center">
          <ArrowLink href="/spaces" variant="default" size="md">
            Explore All Sacred Spaces
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

export default SacredSpaces;
