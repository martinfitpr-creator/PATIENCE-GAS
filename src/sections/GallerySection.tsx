import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const galleryItems = [
  {
    src: '/assets/cylinder-red.jpg',
    alt: 'Safe, premium pressure-tested LPG Cylinder',
    title: 'Certified Safety Cylinders',
    desc: 'Strictly inspected & sealed before every delivery.',
  },
  {
    src: '/assets/kitchen-cylinder.jpg',
    alt: 'Modern kitchen gas stove setup with connected LPG cylinder',
    title: 'Clean & Efficient Cooking',
    desc: 'Instant, powerful heat ready for any household.',
  },
  {
    src: '/assets/delivery-1.jpg',
    alt: 'Patience Gas Supplies delivery driver handing over 9kg cylinder with a smile',
    title: 'Friendly Delivery Staff',
    desc: 'Serving families with smiles and reliability.',
  },
  {
    src: '/assets/delivery-2.jpg',
    alt: 'LPG Gas delivery arrival outside a Midrand residence',
    title: 'Quick Home Drop-offs',
    desc: 'Direct same-day service straight to your door.',
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: 'clamp(3rem, 6vw, 6rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
        <SectionHeader
          label="GALLERY"
          heading="Our Operations in Action"
          subheading="See how we deliver clean, safe, and convenient energy across Midrand."
        />

        <ScrollReveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.1}
          y={30}
          start="top 80%"
        >
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className="group rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-border-green)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-border)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-[1.15rem] leading-[1.3] mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-[0.88rem] leading-[1.5]" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
