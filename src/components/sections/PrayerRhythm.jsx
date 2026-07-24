import ArrowLink from "../common/ArrowLink";
import SectionIntro from "../section-intro/SectionIntro";
import PrayerCard from "../prayer-card/PrayerCard";

const prayerTimes = [
  {
    icon: "sun",
    time: "6:30 AM",
    title: "Lauds",
    description: "Morning prayer to greet the new day with gratitude",
  },
  {
    icon: "clock",
    time: "12:00 PM",
    title: "Midday Prayer",
    description: "A brief pause to recenter in the middle of the day",
  },
  {
    icon: "sun",
    time: "5:30 PM",
    title: "Vespers",
    description: "Evening prayer as day transitions to night",
  },
  {
    icon: "moon",
    time: "8:30 PM",
    title: "Compline",
    description: "Night prayer to close the day in peaceful surrender",
  },
];

const PrayerRhythm = () => {
  return (
    <section
      id="rhythm"
      className="relative overflow-hidden bg-primary-900 py-28"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary-800/30 via-transparent to-primary-950/50" />

      <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-primary-700/20 blur-3xl" />

      <div className="absolute -right-1/4 -bottom-1/4 h-1/2 w-1/2 rounded-full bg-primary-800/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-8">
        <SectionIntro
          eyebrow="Daily Office"
          chipVariant="overlay"
          title="A Rhythm of Prayer"
          titleTone="overlay"
          description="Four times daily, our community gathers in the chapel to pray. Guests are always welcome to join—or simply know that prayer is being offered on their behalf."
          descriptionTone="accent"
          align="center"
        />

        <div className="mt-16 grid grid-cols-4 gap-6">
          {prayerTimes.map((prayer) => (
            <PrayerCard
              key={prayer.title}
              icon={prayer.icon}
              time={prayer.time}
              title={prayer.title}
              description={prayer.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-primary-200/70">
            All prayer offices are held in our chapel and open to visitors.
          </p>

          <ArrowLink href="/spaces#chapel" variant="overlay" size="sm">
            View the Chapel
          </ArrowLink>
        </div>
      </div>
    </section>
  );
};

export default PrayerRhythm;
