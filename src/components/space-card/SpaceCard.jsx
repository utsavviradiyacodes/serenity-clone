import Badge from "../common/Badge";

function TimeIcon() {
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
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function SpaceCard({
  image,
  alt,
  title,
  description,
  features = [],
  availability,
  imageWrapperClassName,
  className = "",
}) {
  return (
    <article className={`group ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl ${imageWrapperClassName}`}
      >
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

        <div className="absolute right-0 bottom-0 left-0 p-8">
          <h3 className="mb-2 font-serif text-3xl font-medium text-white">
            {title}
          </h3>

          <p className="mb-4 text-base leading-relaxed text-stone-300">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {features.map((feature) => (
              <Badge key={feature} variant="imageFeature">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-primary-300">
            <TimeIcon />
            {availability}
          </div>
        </div>
      </div>
    </article>
  );
}

export default SpaceCard;
