import Badge from "../common/Badge";

function CalendarIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function RetreatCard({ retreat }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all hover:shadow-2xl hover:shadow-stone-900/10 dark:border-stone-800 dark:bg-stone-800/50">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={retreat.image}
          alt={retreat.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 to-transparent"></div>

        {retreat.featured && (
          <Badge variant="featured" className="absolute top-4 left-4">
            Featured
          </Badge>
        )}

        {retreat.availability && (
          <Badge variant="availability" className="absolute top-4 right-4">
            {retreat.availability}
          </Badge>
        )}

        <div className="absolute bottom-4 left-4">
          <Badge variant="category">{retreat.type}</Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
          <CalendarIcon />

          <span>{retreat.date}</span>

          <span className="text-stone-300 dark:text-stone-600">·</span>

          <span>{retreat.duration}</span>
        </div>

        <h3 className="mb-2 font-serif text-xl font-medium text-stone-900 dark:text-white">
          {retreat.title}
        </h3>

        <p className="mb-2 text-sm font-medium text-primary-600 dark:text-primary-400">
          {retreat.subtitle}
        </p>

        <p className="mb-4 line-clamp-2 text-sm text-stone-600 dark:text-stone-400">
          {retreat.description}
        </p>

        <div className="flex items-center justify-between border-t border-stone-100 pt-4 dark:border-stone-700">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-stone-500 dark:text-stone-400">
              with
            </span>

            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              {retreat.director}
            </span>
          </div>

          <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
            {retreat.price}
          </span>
        </div>
      </div>
    </article>
  );
}

export default RetreatCard;
