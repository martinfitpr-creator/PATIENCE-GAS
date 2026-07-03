
const instructions = [
  {
    title: 'Keep it Ventilated',
    desc: 'Always place and use your gas cylinder in a well-ventilated area, preferably outdoors or near an open window.',
  },
  {
    title: 'Check the Seal',
    desc: 'Before connecting your cylinder, ensure the safety seal is intact. Check all connections using soapy water to detect any tiny leaks.',
  },
  {
    title: 'Turn Off When Done',
    desc: 'Get in the habit of shutting off the valve on top of the cylinder first, then turning off the stove burner control dials.',
  },
];

export default function SafetyTipsSection() {
  return (
    <section
      id="safety-tips"
      style={{
        backgroundColor: 'var(--color-green-pale)',
        padding: 'clamp(3rem, 6vw, 6rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left image column */}
          <div className="lg:col-span-5 rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] aspect-[4/3] lg:aspect-auto lg:h-[450px]">
            <img
              src="/assets/cylinder-red.jpg"
              alt="Properly pressure-tested premium red LPG cylinder"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right text details */}
          <div className="lg:col-span-7">
            <span
              className="inline-block font-sans font-bold text-[0.7rem] uppercase tracking-[0.1em] px-3 py-1.5 rounded-[var(--radius-pill)] mb-4"
              style={{ backgroundColor: 'var(--color-green)', color: 'white' }}
            >
              Cylinder Safety
            </span>
            <h2
              className="font-serif leading-[1.1] tracking-[-0.01em] mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-text-primary)' }}
            >
              Essential LPG Safety Tips
            </h2>
            <div className="space-y-6">
              {instructions.map((tip, i) => (
                <div key={tip.title} className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-sans font-bold text-[0.9rem]"
                    style={{ backgroundColor: 'var(--color-green)', color: 'white' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-[1.2rem] leading-[1.3] mb-1" style={{ color: 'var(--color-text-primary)' }}>
                      {tip.title}
                    </h3>
                    <p className="text-[0.95rem] leading-[1.6]" style={{ color: 'var(--color-text-secondary)' }}>
                      {tip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
