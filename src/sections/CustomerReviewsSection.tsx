import { Star } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const reviews = [
  {
    quote: "Ordered at 10am, gas arrived by noon. Fastest delivery I've experienced in Centurion — highly recommend!",
    author: 'Sarah M.',
    location: 'Centurion',
  },
  {
    quote: "Never have to worry about load shedding killing my cooking anymore. Patience Gas is always reliable across Midrand.",
    author: 'Thabo K.',
    location: 'Midrand',
  },
  {
    quote: "Run a small restaurant in Johannesburg — Patience Gas keeps my kitchen going without fail. Same-day, every time.",
    author: 'Priya N.',
    location: 'Johannesburg',
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="group rounded-[var(--radius-md)] p-8 transition-all duration-[400ms] min-w-[300px] lg:min-w-0 flex-shrink-0 lg:flex-shrink flex flex-col"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        scrollSnapAlign: 'start',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'var(--color-border-green)';
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'var(--color-border)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="var(--color-star)"
            style={{ color: 'var(--color-star)' }}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[1.05rem] leading-[1.65] italic mb-6 flex-1" style={{ color: 'var(--color-text-primary)' }}>
        "{review.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-sans font-bold text-[0.85rem]"
          style={{ backgroundColor: 'var(--color-green-pale)', color: 'var(--color-green)' }}
        >
          {review.author[0]}
        </div>
        <div>
          <p className="font-sans font-medium text-[0.9rem]" style={{ color: 'var(--color-text-primary)' }}>
            {review.author}
          </p>
          <p className="font-sans text-[0.8rem]" style={{ color: 'var(--color-text-muted)' }}>
            {review.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CustomerReviewsSection() {
  return (
    <section
      id="reviews"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: 'clamp(4rem, 8vw, 8rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
        <SectionHeader label="CUSTOMER REVIEWS" heading="What Our Customers Say" />

        {/* Desktop grid */}
        <ScrollReveal
          className="hidden lg:grid grid-cols-3 gap-6"
          stagger={0.15}
          y={40}
          start="top 75%"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </ScrollReveal>

        {/* Mobile/Tablet horizontal scroll carousel */}
        <div
          className="lg:hidden flex gap-5 pb-4 overflow-x-auto"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <p
          className="lg:hidden text-center mt-3 font-sans text-[0.75rem]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Swipe to see more ›
        </p>
      </div>
    </section>
  );
}
