import { Truck, Calendar, Clock } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: '500+ deliveries completed' },
  { icon: Calendar, text: 'Serving Midrand since 2023' },
  { icon: Clock, text: 'Average delivery: under 2 hours' },
];

export default function TrustBar() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative',
        height: '42px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Scrollable container */}
      <div
        className="flex items-center whitespace-nowrap"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'scrollLeft 25s linear infinite',
        }}
      >
        {/* Double-render the list so it scrolls continuously without gaps */}
        {[...trustItems, ...trustItems, ...trustItems, ...trustItems].map(({ icon: Icon, text }, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-8"
            style={{
              borderRight: '1px solid var(--color-border)',
            }}
          >
            <Icon size={14} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
            <span
              className="font-sans font-medium text-[0.82rem]"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* Styled animation keyframe inject */}
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
