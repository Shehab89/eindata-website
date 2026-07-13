import React from 'react';

/**
 * EinData logo icon — Cloud outline with three data-circuit nodes.
 * Uses currentColor for stroke/fill so it inherits text color from parent.
 */
export function EinDataIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Cloud outline */}
      <path
        d="M10.5 33C5.8 33 2 29.2 2 24.5c0-3.9 2.6-7.1 6.2-8.1C9.8 10.4 14.6 6 20.5 6c4.3 0 8 2.2 10.2 5.5.9-.3 1.9-.5 2.8-.5 4.4 0 8 3.6 8 8 0 .5-.1 1-.1 1.4C44.2 21.8 46 24.8 46 28.2c0 2.7-1.4 5-3.5 6.4"
        stroke={color || 'currentColor'}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 33v1.5M42.5 34.6v-1.6"
        stroke={color || 'currentColor'}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Left data node */}
      <circle cx="19" cy="22.5" r="2.6" fill={color || 'currentColor'} />
      <line
        x1="19" y1="25.1" x2="19" y2="45"
        stroke={color || 'currentColor'}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Center data node (tallest) */}
      <circle cx="26.5" cy="15" r="2.6" fill={color || 'currentColor'} />
      <line
        x1="26.5" y1="17.6" x2="26.5" y2="45"
        stroke={color || 'currentColor'}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Right data node */}
      <circle cx="34" cy="22.5" r="2.6" fill={color || 'currentColor'} />
      <line
        x1="34" y1="25.1" x2="34" y2="45"
        stroke={color || 'currentColor'}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Full EinData wordmark with icon + text + optional tagline.
 *
 * @param variant - 'color' | 'white' | 'dark'
 * @param showTagline - Whether to show "DATA • CLOUD • AI"
 * @param size - 'sm' | 'md' | 'lg'
 */
export function EinDataLogo({
  variant = 'color',
  showTagline = false,
  size = 'md',
  className,
}: {
  variant?: 'color' | 'white' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const iconColor = variant === 'white' ? '#ffffff' : '#2563EB';

  // Text color classes — 'color' variant adapts to dark mode
  const einClass =
    variant === 'white'
      ? 'text-white'
      : variant === 'dark'
        ? 'text-[#0F172A]'
        : 'text-[#0F172A] dark:text-white';
  const dataClass =
    variant === 'white' ? 'text-white' : 'text-[#2563EB]';
  const taglineClass =
    variant === 'white'
      ? 'text-white/60'
      : 'text-slate-400 dark:text-slate-500';

  const sizes = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', tagline: 'text-[8px]', gap: 'gap-1.5' },
    md: { icon: 'w-9 h-9', text: 'text-xl', tagline: 'text-[9px]', gap: 'gap-2' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', tagline: 'text-[10px]', gap: 'gap-2.5' },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap} ${className || ''}`}>
      <EinDataIcon className={s.icon} color={iconColor} />
      <div className="flex flex-col">
        <span
          className={`${s.text} font-bold tracking-tight leading-none`}
          style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
        >
          <span className={einClass}>Ein</span>
          <span className={dataClass}>Data</span>
        </span>
        {showTagline && (
          <span
            className={`${s.tagline} font-semibold tracking-[0.25em] uppercase leading-tight mt-0.5 ${taglineClass}`}
          >
            DATA &bull; CLOUD &bull; AI
          </span>
        )}
      </div>
    </div>
  );
}
