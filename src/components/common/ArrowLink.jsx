function ArrowLink({
  children,
  href,
  variant = "default",
  size = "sm",
  iconSize = size,
}) {
  const baseClasses =
    "inline-flex items-center gap-2 font-medium transition-colors";

  const variantClasses = {
    default:
      "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
    overlay: "text-primary-300 hover:text-white",
  };

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
  };

  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      <span>{children}</span>

      <svg
        className={iconSizeClasses[iconSize]}
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
    </a>
  );
}

export default ArrowLink;
