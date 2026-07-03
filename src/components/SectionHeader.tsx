interface SectionHeaderProps {
  label: string;
  heading: string;
  subheading?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  subheading,
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <div className={`text-center mb-16 ${className}`}>
      <span
        className="inline-block font-sans font-medium text-[0.7rem] uppercase tracking-[0.08em] px-4 py-1.5 rounded-[var(--radius-pill)] mb-4"
        style={{
          color: isDark ? 'rgba(255,255,255,0.5)' : 'var(--color-green)',
          backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'var(--color-green-pale)',
        }}
      >
        {label}
      </span>
      <h2
        className="font-serif leading-[1.1] tracking-[-0.01em]"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: isDark ? 'var(--color-cream)' : 'var(--color-text-primary)',
        }}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className="mt-4 text-[1.05rem] leading-[1.65] max-w-xl mx-auto"
          style={{
            color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--color-text-secondary)',
          }}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
