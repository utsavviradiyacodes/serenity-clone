import Chip from "./Chip";
import IntroTitle from "./IntroTitle";
import DescriptionGroup from "./DescriptionGroup";
import IntroDescription from "./IntroDescription";

function SectionIntro({
  eyebrow,
  chipVariant = "default",

  title,
  titleAs = "h2",
  titleTone = "default",

  description,
  descriptionTone = "default",
  descriptionSize = "default",
  descriptionGap = "normal",
  descriptionMaxWidth = "max-w-2xl",

  align = "center",
}) {
  const alignClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
  };

  const descriptionGapClasses = {
    normal: "mt-4",
    large: "mt-6",
  };

  const descriptions = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  return (
    <div className={`flex flex-col ${alignClasses[align]}`}>
      {eyebrow && <Chip variant={chipVariant}>{eyebrow}</Chip>}

      {title && (
        <div className={eyebrow ? "mt-4" : ""}>
          <IntroTitle as={titleAs} tone={titleTone}>
            {title}
          </IntroTitle>
        </div>
      )}

      {descriptions.length > 0 && (
        <DescriptionGroup
          className={`${descriptionGapClasses[descriptionGap]} ${descriptionMaxWidth}`}
        >
          {descriptions.map((description, index) => (
            <IntroDescription
              key={index}
              tone={descriptionTone}
              size={descriptionSize}
            >
              {description}
            </IntroDescription>
          ))}
        </DescriptionGroup>
      )}
    </div>
  );
}

export default SectionIntro;
