import Badge from "../common/Badge";

function DirectorCard({
  image,
  alt,
  name,
  role,
  description,
  specialties = [],
  availability,
}) {
  return (
    <article className="group text-center">
      <div className="relative mx-auto mb-6 size-48 overflow-hidden rounded-full bg-stone-300">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 rounded-full ring-4 ring-primary-600/20 transition-all group-hover:ring-primary-600/40" />
      </div>

      <h3 className="mb-1 font-serif text-xl font-medium text-stone-900 dark:text-white">
        {name}
      </h3>

      <p className="mb-3 text-sm font-medium text-primary-600 dark:text-primary-400">
        {role}
      </p>

      <p className="mb-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {specialties.map((specialty) => (
          <Badge key={specialty} variant="topic">
            {specialty}
          </Badge>
        ))}
      </div>

      <p className="mt-4 text-xs text-stone-500 dark:text-stone-500">
        {availability}
      </p>
    </article>
  );
}

export default DirectorCard;
