import michaelTorres from "../../assets/images/testimonials/michael-torres.jpeg";
import jenniferWalsh from "../../assets/images/testimonials/jennifer-walsh.jpeg";
import davidPark from "../../assets/images/testimonials/david-park.jpeg";

import SectionIntro from "../section-intro/SectionIntro";
import TestimonialCard from "../testimonial-card/TestimonialCard";

const testimonials = [
  {
    quote:
      "I came to Stillwater burned out and empty. I left with a renewed sense of purpose and a practice that sustains me daily. The silence was terrifying at first—then it became the greatest gift.",
    image: michaelTorres,
    alt: "Michael Torres",
    author: "Michael Torres",
    context: "After a 5-day silent retreat",
  },
  {
    quote:
      "Spiritual direction with Sr. Margaret Anne changed my life. For the first time, I felt truly heard—not just by her, but by God through her.",
    image: jenniferWalsh,
    alt: "Jennifer Walsh",
    author: "Jennifer Walsh",
    context: "Ongoing spiritual direction",
  },
  {
    quote:
      "The labyrinth walk brought up things I had been avoiding for years. In that slow, winding path, I finally found the courage to surrender them.",
    image: davidPark,
    alt: "David Park",
    author: "David Park",
    context: "Day retreat participant",
  },
];

function Testimonials() {
  return (
    <section className="bg-stone-100 py-28 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16">
          <SectionIntro eyebrow="Stories" title="Transformed by Stillness" />
        </div>

        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              image={testimonial.image}
              alt={testimonial.alt}
              author={testimonial.author}
              context={testimonial.context}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
