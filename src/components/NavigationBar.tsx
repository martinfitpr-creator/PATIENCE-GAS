import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Menu, X, Info, Tag, Star, Phone as PhoneIcon, MessageCircle, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { WHATSAPP_NUMBER } from '@/constants';

const navLinks = [
  { label: 'How It Works', to: '/how-it-works', icon: Info },
  { label: 'Pricing', to: '/pricing', icon: Tag },
  { label: 'Reviews', to: '/reviews', icon: Star },
  { label: 'Contact', to: '/contact', icon: PhoneIcon },
];

const businessHours = [
  { days: 'Mon – Fri', hours: '7am – 7pm' },
  { days: 'Saturday', hours: '8am – 5pm' },
  { days: 'Sunday', hours: '9am – 2pm' },
];

export default function NavigationBar() {
  const navRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const location = useLocation();

  useGSAP(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      y: scrollDirection === 'down' ? -100 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, { dependencies: [scrollDirection] });

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Slide-in / slide-out animation for drawer
  useEffect(() => {
    if (!drawerRef.current) return;
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        drawerRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.35, ease: 'power3.out' }
      );
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMenu = () => {
    if (!drawerRef.current) {
      setMobileOpen(false);
      return;
    }
    gsap.to(drawerRef.current, {
      x: '100%',
      opacity: 0,
      duration: 0.28,
      ease: 'power3.in',
      onComplete: () => setMobileOpen(false),
    });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 transition-none"
        style={{
          backgroundColor: 'rgba(248, 246, 241, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border)',
          height: 'var(--nav-height)',
        }}
      >
        <div
          className="flex items-center justify-between h-full mx-auto"
          style={{ maxWidth: 'var(--max-content)', padding: '0 var(--page-margin)' }}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[var(--color-green)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.5 2 6 5.5 6 9c0 2.5 1.5 5 3 7s3 4 3 6c0-2 1.5-3.5 3-6s3-4.5 3-7c0-3.5-2.5-7-6-7zm0 3c1.5 0 3 2 3 4s-1.5 3-3 3-3-1-3-3 1.5-4 3-4z" />
            </svg>
            <span className="font-serif text-[1.2rem] tracking-[0.02em]">Patience Gas</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans font-medium text-[0.8rem] uppercase tracking-[0.04em] transition-colors duration-300 hover:text-[var(--color-green)]"
                style={{
                  color: location.pathname === link.to ? 'var(--color-green)' : 'var(--color-text-secondary)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton size="sm" text="Order" />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} style={{ color: 'var(--color-green)' }} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[590]"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)' }}
          onClick={closeMenu}
        />
      )}

      {/* Mobile Slide-in Drawer */}
      {mobileOpen && (
        <div
          ref={drawerRef}
          className="md:hidden fixed top-0 right-0 h-full z-[600] flex flex-col"
          style={{
            width: 'min(340px, 90vw)',
            backgroundColor: 'var(--color-cream)',
            boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
          }}
        >
          {/* Drawer Header */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: '1px solid var(--color-border)' }}
          >
            <span className="font-serif text-[1.1rem]" style={{ color: 'var(--color-green)' }}>
              Menu
            </span>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: 'var(--color-green-pale)',
                color: 'var(--color-green)',
              }}
            >
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-6 pt-6 gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="flex items-center gap-4 py-3.5 px-4 rounded-[var(--radius-md)] transition-all duration-200"
                style={{
                  backgroundColor: location.pathname === link.to ? 'var(--color-green-pale)' : 'transparent',
                  color: location.pathname === link.to ? 'var(--color-green)' : 'var(--color-text-primary)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-green-pale)' }}
                >
                  <link.icon size={16} style={{ color: 'var(--color-green)' }} />
                </div>
                <span className="font-sans font-medium text-[1rem]">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Phone number & Hours */}
          <div
            className="mx-6 mb-5 mt-2 p-4 rounded-[var(--radius-md)]"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 font-sans font-medium text-[0.9rem] mb-3"
              style={{ color: 'var(--color-green)' }}
            >
              <PhoneIcon size={14} />
              067 430 5238
            </a>
            <div className="flex items-start gap-2.5">
              <Clock size={14} style={{ color: 'var(--color-text-muted)', marginTop: 2, flexShrink: 0 }} />
              <div className="space-y-0.5">
                {businessHours.map(({ days, hours }) => (
                  <p key={days} className="font-sans text-[0.8rem]" style={{ color: 'var(--color-text-secondary)' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>{days}:</span> {hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="px-6 pb-8">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-[var(--radius-pill)] font-sans font-medium text-[0.95rem] transition-all duration-300"
              style={{ backgroundColor: 'var(--color-whatsapp)', color: 'white' }}
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
