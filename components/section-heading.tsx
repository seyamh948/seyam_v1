type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600 sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base md:text-lg md:leading-7">
        {description}
      </p>
    </div>
  );
}
