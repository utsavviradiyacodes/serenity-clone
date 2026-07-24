import margaretAnne from "../../assets/images/directors/margaret-anne.jpeg";
import davidBrennan from "../../assets/images/directors/david-brennan.jpeg";
import sarahChen from "../../assets/images/directors/sarah-chen.jpeg";
import brotherThomas from "../../assets/images/directors/brother-thomas.jpeg";

import SectionIntro from "../section-intro/SectionIntro";
import DirectorCard from "../director-card/DirectorCard";
import Button from "../common/Button";

const directors = [
  {
    image: margaretAnne,
    alt: "Sr. Margaret Anne, OSB",
    name: "Sr. Margaret Anne, OSB",
    role: "Director of Spiritual Formation",
    description:
      "A Benedictine sister with 30 years of experience in spiritual direction, Sr. Margaret Anne specializes in guiding people through major life transitions and deepening contemplative practice.",
    specialties: ["Centering Prayer", "Discernment", "Life Transitions"],
    availability: "Available Monday - Thursday",
  },
  {
    image: davidBrennan,
    alt: "Fr. David Brennan",
    name: "Fr. David Brennan",
    role: "Retreat Director",
    description:
      "An ordained priest and trained spiritual director, Fr. David brings 20 years of retreat leadership and a gentle, listening presence to those seeking God.",
    specialties: [
      "Ignatian Spirituality",
      "Scripture Prayer",
      "Vocational Discernment",
    ],
    availability: "Available Tuesday - Saturday",
  },
  {
    image: sarahChen,
    alt: "Dr. Sarah Chen",
    name: "Dr. Sarah Chen",
    role: "Contemplative Psychologist",
    description:
      "Holding both a PhD in psychology and certification in spiritual direction, Sarah integrates therapeutic wisdom with contemplative traditions for deep healing work.",
    specialties: ["Grief & Loss", "Trauma-Informed Care", "Burnout Recovery"],
    availability: "Available Wednesday - Friday",
  },
  {
    image: brotherThomas,
    alt: "Brother Thomas",
    name: "Brother Thomas",
    role: "Grounds & Prayer Guide",
    description:
      "A lay brother who tends our gardens and leads walking meditations, Thomas embodies the connection between nature, labor, and prayer.",
    specialties: [
      "Walking Meditation",
      "Labyrinth Guidance",
      "Creation Spirituality",
    ],
    availability: "Available Daily (outdoor practices)",
  },
];

function SpiritualDirectors() {
  return (
    <section id="directors" className="bg-stone-100 py-28 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16">
          <SectionIntro
            eyebrow="Spiritual Direction"
            title="Companions for the Journey"
            description="Our trained spiritual directors offer one-on-one guidance for those seeking deeper connection with God. Each brings unique gifts to the sacred work of accompaniment."
          />
        </div>

        <div className="grid grid-cols-4 gap-8">
          {directors.map((director) => (
            <DirectorCard
              key={director.name}
              image={director.image}
              alt={director.alt}
              name={director.name}
              role={director.role}
              description={director.description}
              specialties={director.specialties}
              availability={director.availability}
            />
          ))}
        </div>

        <div className="mt-16 grid place-content-center">
          <Button href="/direction" variant="outlinePrimary" size="lg" arrow>
            Begin Spiritual Direction
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SpiritualDirectors;
