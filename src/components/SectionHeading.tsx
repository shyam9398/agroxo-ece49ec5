interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, center = true }: Props) => (
  <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
    {badge && (
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeading;
