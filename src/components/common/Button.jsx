function Button({
  children,
  href,
  variant = "primary",
  size = "sm",
  arrow = false,
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all";

  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const variantClasses = {
    primary:
      "bg-primary-600 text-white shadow-lg shadow-primary-600/20 hover:bg-primary-700 hover:shadow-xl",

    primaryHeader:
      "bg-primary-600 text-white shadow-lg shadow-primary-600/20 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30",

    primaryHero:
      "bg-primary-600 text-white shadow-xl shadow-primary-900/30 hover:bg-primary-700 hover:shadow-2xl",

    white:
      "bg-white text-primary-900 shadow-xl hover:bg-stone-100 hover:shadow-2xl",

    outlineWhite:
      "border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10",

    outlineWhiteBlur:
      "border-2 border-white/30 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10",

    outlinePrimary:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-600 dark:hover:text-white",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}

      {arrow && (
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </a>
  );
}

export default Button;
