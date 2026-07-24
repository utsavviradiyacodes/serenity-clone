import Button from "../common/Button";
import PracticeCard from "../practice-card/PracticeCard";
import SectionIntro from "../section-intro/SectionIntro";

const iconClasses = "h-6 w-6";

const practices = [
  {
    title: "Centering Prayer",
    description:
      "A method of silent prayer that prepares us to receive the gift of contemplative prayer, opening our minds and hearts to God beyond words.",
    duration: "20 minutes",
    icon: (
      <svg
        className={iconClasses}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Lectio Divina",
    description:
      "Sacred reading of Scripture—a slow, contemplative approach to engaging with the Word that invites transformation.",
    duration: "30-45 minutes",
    icon: (
      <svg
        className={iconClasses}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: "Walking Meditation",
    description:
      "Mindful walking through our grounds, bringing awareness to each step as a form of moving prayer.",
    duration: "15-30 minutes",
    icon: (
      <svg
        className={iconClasses}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    title: "Labyrinth Walk",
    description:
      "An ancient practice of walking a winding path as a metaphor for the spiritual journey—releasing, receiving, returning.",
    duration: "20-40 minutes",
    icon: (
      <svg
        className={iconClasses}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12m-9 0a9 9 0 1018 0a9 9 0 10-18 0M12 12m-6 0a6 6 0 1012 0a6 6 0 10-12 0M12 12m-3 0a3 3 0 106 0a3 3 0 10-6 0M12 12h.01"
        />
      </svg>
    ),
  },
  {
    title: "Examen",
    description:
      "A daily review of consciousness, noticing where God was present and where we may have missed the invitation.",
    duration: "15 minutes",
    icon: (
      <svg
        className={iconClasses}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Silent Sitting",
    description:
      "Simply being present in silence, without agenda, allowing God to work in the depths of our being.",
    duration: "Open",
    icon: (
      <svg
        className={iconClasses}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        />
      </svg>
    ),
  },
];

function Practices() {
  return (
    <section id="practices" className="bg-stone-100 py-28 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-3xl">
          <SectionIntro
            eyebrow="Contemplative Practices"
            title="Ancient Paths to the Present"
            description="These time-tested practices create space for encounter with God. During your retreat, you'll be introduced to practices suited to your spiritual journey."
            descriptionMaxWidth="max-w-3xl"
            align="left"
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {practices.map((practice) => (
            <PracticeCard key={practice.title} {...practice} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/resources" variant="outlinePrimary" size="md" arrow>
            Explore Guided Practices
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Practices;
