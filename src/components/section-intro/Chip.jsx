function Chip({ children, variant = "default" }) {
  const variantClasses = {
    default:
      "bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-400",
    overlay: "bg-primary-800/50 text-primary-300",
  };

  return (
    <span
      className={`inline-block rounded-full px-4 py-2 text-xs font-medium tracking-widest uppercase ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}

export default Chip;
