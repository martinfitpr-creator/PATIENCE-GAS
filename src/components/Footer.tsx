import { WHATSAPP_NUMBER } from '@/constants';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

const suburbs = ['Midrand', 'Waterfall', 'Kyalami', 'Noordwyk', 'Vorna Valley', 'Halfway House'];

const businessHours = [
  { days: 'Monday – Friday', hours: '7:00am – 7:00pm' },
  { days: 'Saturday', hours: '8:00am – 5:00pm' },
  { days: 'Sunday', hours: '9:00am – 2:00pm' },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-forest)',
        color: 'var(--color-cream)',
        padding: 'clamp(3rem, 6vw, 6rem) var(--page-margin) clamp(2rem, 4vw, 4rem)',
      }}
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" style={{ maxWidth: 'var(--max-content)' }}>

        {/* Brand */}
        <div className="lg:col-span-1">
          <h3 className="font-serif text-[1.3rem]">Patience Gas Supplies</h3>
          <p className="mt-3 text-[0.9rem]" style={{ color: 'rgba(248, 246, 241, 0.65)' }}>
            Fast, reliable LPG gas delivery in Midrand and surrounding areas.
          </p>

          {/* Contact details */}
          <div className="mt-5 space-y-2.5">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[0.9rem] transition-colors duration-300 hover:text-[var(--color-whatsapp)]"
              style={{ color: 'rgba(248, 246, 241, 0.75)' }}
            >
              <Phone size={14} style={{ flexShrink: 0 }} />
              067 430 5238
            </a>
            <a
              href="mailto:info@patiencegas.co.za"
              className="flex items-center gap-2.5 text-[0.9rem] transition-colors duration-300 hover:text-[var(--color-cream)]"
              style={{ color: 'rgba(248, 246, 241, 0.75)' }}
            >
              <Mail size={14} style={{ flexShrink: 0 }} />
              info@patiencegas.co.za
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="font-sans font-bold text-[0.7rem] uppercase tracking-[0.08em] mb-4"
            style={{ color: 'rgba(248, 246, 241, 0.45)' }}
          >
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[0.9rem] transition-colors duration-300 hover:text-[var(--color-cream)]"
                  style={{ color: 'rgba(248, 246, 241, 0.65)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Area */}
        <div>
          <h4
            className="font-sans font-bold text-[0.7rem] uppercase tracking-[0.08em] mb-4"
            style={{ color: 'rgba(248, 246, 241, 0.45)' }}
          >
            <span className="flex items-center gap-1.5"><MapPin size={12} /> We Deliver To</span>
          </h4>
          <ul className="space-y-2">
            {suburbs.map((suburb) => (
              <li
                key={suburb}
                className="text-[0.9rem]"
                style={{ color: 'rgba(248, 246, 241, 0.65)' }}
              >
                {suburb}
              </li>
            ))}
          </ul>
          <p className="mt-3 font-sans font-medium text-[0.85rem]" style={{ color: 'var(--color-whatsapp)' }}>
            Same-day delivery available
          </p>
        </div>

        {/* Business Hours */}
        <div>
          <h4
            className="font-sans font-bold text-[0.7rem] uppercase tracking-[0.08em] mb-4"
            style={{ color: 'rgba(248, 246, 241, 0.45)' }}
          >
            <span className="flex items-center gap-1.5"><Clock size={12} /> Business Hours</span>
          </h4>
          <ul className="space-y-3">
            {businessHours.map(({ days, hours }) => (
              <li key={days}>
                <p className="text-[0.8rem] font-sans font-medium" style={{ color: 'rgba(248, 246, 241, 0.45)' }}>
                  {days}
                </p>
                <p className="text-[0.9rem]" style={{ color: 'rgba(248, 246, 241, 0.75)' }}>
                  {hours}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
        style={{
          maxWidth: 'var(--max-content)',
          borderTop: '1px solid rgba(248, 246, 241, 0.12)',
        }}
      >
        <span className="text-[0.8rem]" style={{ color: 'rgba(248, 246, 241, 0.35)' }}>
          © 2026 Patience Gas Supplies. All rights reserved.
        </span>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans font-medium text-[0.85rem] px-5 py-2.5 rounded-[var(--radius-pill)] transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-whatsapp)',
            color: 'white',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Us
        </a>
      </div>
    </footer>
  );
}
