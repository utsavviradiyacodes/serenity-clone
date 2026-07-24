function IntroDescription({ children, tone = "default", size = "default" }) {
  const toneClasses = {
    default: "text-stone-600 dark:text-stone-400",
    overlay: "text-stone-300",
    accent: "text-primary-200/80",
  };

  const sizeClasses = {
    default: "text-lg",
    hero: "text-xl",
  };

  return (
    <p className={`leading-relaxed ${sizeClasses[size]} ${toneClasses[tone]}`}>
      {children}
    </p>
  );
}

export default IntroDescription;
