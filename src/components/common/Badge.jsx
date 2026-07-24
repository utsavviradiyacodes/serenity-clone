function Badge({ children, variant = "category", className = "" }) {
  const baseClasses =
    "rounded-full py-1 text-xs whitespace-nowrap";

  const variantClasses = {
    featured: "bg-primary-600 px-3 font-medium text-white",

    availability: "bg-amber-500 px-3 font-medium text-white",

    category:
      "bg-white/90 px-3 font-medium capitalize text-stone-800 backdrop-blur-sm",

    imageFeature: "bg-white/20 px-3 text-white backdrop-blur-sm",

    topic:
      "bg-stone-200 px-2 text-stone-600 dark:bg-stone-800 dark:text-stone-400",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
