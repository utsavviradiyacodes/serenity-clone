import aboutRetreat from "../../assets/images/about-retreat.jpeg";
import SectionIntro from "../section-intro/SectionIntro";
import ArrowLink from "../common/ArrowLink";

const stats = [
  {
    value: "35+",
    label: "Years of Ministry",
  },
  {
    value: "12,000+",
    label: "Retreat Guests",
  },
  {
    value: "80",
    label: "Acres of Silence",
  },
  {
    value: "4",
    label: "Daily Prayer Offices",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-stone-50 py-28 dark:bg-coffee-950">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-2 items-center gap-16">
          <div className="relative">
            <div className="aspect-4/5 overflow-hidden rounded-2xl">
              <img
                src={aboutRetreat}
                alt="Stillwater Retreat grounds"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -right-8 -bottom-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-xl dark:border-stone-700 dark:bg-stone-800">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="block font-serif text-3xl font-semibold text-primary-600 dark:text-primary-400">
                      {stat.value}
                    </span>

                    <span className="text-xs text-stone-500 dark:text-stone-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Our Story"
              title="A Place Set Apart"
              description={[
                "Stillwater Retreat was founded in 1987 by a small community of contemplatives seeking to share the gift of silence with a noisy world. What began as a single farmhouse has grown into an 80-acre sanctuary.",
                "We are rooted in the Christian contemplative tradition while welcoming seekers of all backgrounds. Our approach is ecumenical, drawing wisdom from Benedictine, Ignatian, and Celtic streams.",
                "Whether you come for an hour or a week, our prayer is that you would encounter the God who waits for you in the stillness.",
              ]}
              descriptionGap="large"
              align="left"
            />

            <div className="mt-8">
              <ArrowLink
                href="/connect"
                variant="default"
                size="md"
                iconSize="sm"
              >
                Plan Your Visit
              </ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
