function PracticeCard({ icon, title, description, duration }) {
  return (
    <article className="group rounded-2xl border border-stone-200 bg-white p-8 transition-all hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 dark:border-stone-800 dark:bg-stone-800/50 dark:hover:border-primary-800">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/50 dark:text-primary-400">
        {icon}
      </div>

      <h3 className="mb-2 font-serif text-xl font-medium text-stone-900 dark:text-white">
        {title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {description}
      </p>

      <span className="text-xs font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
        {duration}
      </span>
    </article>
  );
}

export default PracticeCard;
