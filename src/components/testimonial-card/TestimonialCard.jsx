function QuoteIcon() {
  return (
    <svg
      className="absolute -top-4 left-8 h-10 w-10 text-primary-200 dark:text-primary-900"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function TestimonialCard({ quote, image, alt, author, context }) {
  return (
    <blockquote className="relative rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-800/50">
      <QuoteIcon />

      <p className="mb-6 font-serif text-lg leading-relaxed text-stone-700 italic dark:text-stone-300">
        "{quote}"
      </p>

      <footer className="flex items-center gap-4">
        <img
          src={image}
          alt={alt}
          className="h-12 w-12 rounded-full object-cover"
        />

        <cite className="not-italic">
          <span className="block font-medium text-stone-900 dark:text-white">
            {author}
          </span>

          <span className="text-sm text-stone-500 dark:text-stone-400">
            {context}
          </span>
        </cite>
      </footer>
    </blockquote>
  );
}

export default TestimonialCard;
