import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  {
    question: 'How fast is delivery?',
    answer: 'We deliver same-day in most cases. Orders placed before our 3:00 PM cutoff go out the same day. Later orders go out the next morning.',
  },
  {
    question: 'What areas do you deliver to?',
    answer: 'We deliver across Midrand, Waterfall, Kyalami, Noordwyk, Vorna Valley, Centurion, and Johannesburg areas.',
  },
  {
    question: 'Do I need an empty cylinder to exchange?',
    answer: 'Yes, our standard pricing is for cylinder exchange. You hand over an empty cylinder of any brand and pay the exchange price. If you do not have an empty cylinder, a first-time deposit of R650 is charged for the cylinder shell.',
  },
  {
    question: 'What cylinder sizes do you offer?',
    answer: 'We offer 9kg, 19kg, and 48kg LPG cylinders to suit household, business, and restaurant needs.',
  },
  {
    question: 'How do I pay?',
    answer: 'We accept cash and EFT on delivery. You only pay once the gas is delivered and safely set up.',
  },
  {
    question: 'Is there a delivery fee?',
    answer: 'Our exchange price (e.g. R350 for 9kg) already includes delivery within our primary zones. Distance-based fees may apply for outlying areas, ranging from R20 to R50.',
  },
  {
    question: 'Are your cylinders safe?',
    answer: 'Safety is our top priority. Every cylinder we deliver is professionally inspected, pressure-tested, and quality-sealed before leaving our facility.',
  },
  {
    question: 'What if my cylinder is a different brand?',
    answer: 'No problem! We accept universal exchanges across all major LPG brands in South Africa (including Afrox, Easigas, Totalgas, and others) as long as the cylinder is in acceptable condition.',
  },
  {
    question: 'Can businesses order in bulk?',
    answer: 'Yes, we supply caterers, restaurants, and businesses. Contact us directly on WhatsApp for commercial pricing and scheduled bulk deliveries.',
  },
  {
    question: 'How do I order?',
    answer: 'Simply click the WhatsApp button on our website or message us at 067 430 5238 with your delivery address and cylinder size.',
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-[var(--radius-md)] overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: open ? '1px solid var(--color-border-green)' : '1px solid var(--color-border)',
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-sans font-medium text-[1rem] leading-[1.4]"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {faq.question}
        </span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            backgroundColor: open ? 'var(--color-green)' : 'var(--color-green-pale)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <ChevronDown
            size={16}
            style={{ color: open ? 'white' : 'var(--color-green)' }}
            strokeWidth={2.5}
          />
        </div>
      </button>

      <div
        style={{
          maxHeight: open ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p
          className="px-6 pb-5 text-[0.95rem] leading-[1.7]"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: 'clamp(2.5rem, 5vw, 4rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
        <SectionHeader
          label="FAQ"
          heading="Common Questions Answered"
          subheading="Everything you need to know before your first order."
        />

        <ScrollReveal
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          stagger={0.08}
          y={30}
          start="top 78%"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
