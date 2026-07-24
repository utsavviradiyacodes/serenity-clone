function IntroTitle({ children, as: Tag = "h2", tone = "default" }) {
  const tagClasses = {
    h1: "text-7xl leading-tight",
    h2: "text-5xl",
  };

  const toneClasses = {
    default: "text-stone-900 dark:text-white",
    overlay: "text-white",
  };

  return (
    <Tag
      className={`font-serif font-light ${tagClasses[Tag]} ${toneClasses[tone]}`}
    >
      {children}
    </Tag>
  );
}

export default IntroTitle;
