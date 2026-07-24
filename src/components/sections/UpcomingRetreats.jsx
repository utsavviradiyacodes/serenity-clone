import springSilenceRetreat from "../../assets/images/retreats/spring-silence-retreat.jpeg";
import contemplativePrayerRetreat from "../../assets/images/retreats/contemplative-prayer-retreat.jpeg";
import dayOfRestRetreat from "../../assets/images/retreats/day-of-rest-retreat.jpeg";

import SectionIntro from "../section-intro/SectionIntro";
import RetreatCard from "../retreat-card/RetreatCard";
import Button from "../common/Button";

const retreats = [
  {
    image: springSilenceRetreat,
    alt: "Spring Silence Retreat",
    type: "Silent retreat",
    featured: true,
    availability: "4 spots left",
    date: "April 14-19, 2025",
    duration: "5 nights",
    title: "Spring Silence Retreat",
    subtitle: "Five Days of Guided Silence",
    description:
      "Enter into extended silence with the support of daily spiritual direction, communal meals, and the rhythm of the Daily Office. This retreat offers space for deep listening and renewal.",
    director: "Sr. Margaret Anne",
    price: "$795",
  },
  {
    image: contemplativePrayerRetreat,
    alt: "Introduction to Contemplative Prayer",
    type: "weekend retreat",
    date: "March 7-9, 2025",
    duration: "2 nights",
    title: "Introduction to Contemplative Prayer",
    subtitle: "Weekend Immersion",
    description:
      "Learn the foundations of centering prayer, lectio divina, and other contemplative practices in a supportive community setting.",
    director: "Fr. Thomas Keating Society",
    price: "$395",
  },
  {
    image: dayOfRestRetreat,
    alt: "Day of Rest",
    type: "day retreat",
    date: "First Saturday monthly",
    duration: "9 AM - 5 PM",
    title: "Day of Rest",
    subtitle: "Monthly Day Retreat",
    description:
      "A single day set apart for silence, prayer, and rest. Includes access to all sacred spaces, optional spiritual direction, and a contemplative lunch.",
    director: "Various Directors",
    price: "$85",
  },
];

function UpcomingRetreats() {
  return (
    <section id="retreats" className="bg-stone-50 py-28 dark:bg-coffee-950">
      <div className="mx-auto max-w-7xl px-8">
        <SectionIntro
          eyebrow="Upcoming Retreats"
          title="Step Away. Go Deeper."
          description="From single-day refreshers to week-long immersions, find the retreat that meets you where you are."
        />

        <div className="mt-16 grid grid-cols-3 gap-8">
          {retreats.map((retreat) => (
            <RetreatCard key={retreat.alt} retreat={retreat} />
          ))}
        </div>

        <div className="mt-12 grid place-content-center">
          <Button href="/retreats" variant="primary" size="lg" arrow>
            View All Retreats
          </Button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingRetreats;
