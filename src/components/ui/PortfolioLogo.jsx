import React from 'react'

// Small inline SVG mark designed to match the navbar dark-glass/glow aesthetic.
export function PortfolioLogo({ className = '' }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Portfolio logo"
    >
      <defs>
        <linearGradient id="bb_logo_g" x1="2" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(59,130,246,0.95)" />
          <stop offset="0.5" stopColor="rgba(139,92,246,0.95)" />
          <stop offset="1" stopColor="rgba(6,182,212,0.95)" />
        </linearGradient>
        <filter id="bb_logo_glow" x="-2" y="-2" width="26" height="26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="1.1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer rounded mark */}
      <rect
        x="2.5"
        y="2.5"
        width="17"
        height="17"
        rx="6"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
      />

      {/* Abstract 'K/N' monogram-like strokes */}
      <g filter="url(#bb_logo_glow)">
        <path
          d="M7.2 7.0H9.0V13.9H7.2V7.0Z"
          fill="url(#bb_logo_g)"
          opacity="0.95"
        />
        <path
          d="M9.2 10.2L13.0 7.0H15.2L11.0 10.5L15.2 14.9H13.0L9.2 11.2V10.2Z"
          fill="url(#bb_logo_g)"
          opacity="0.95"
        />
        <path
          d="M13.3 14.9V12.6C13.3 11.7 13.8 11.2 14.6 11.2H15.1V12.9H14.9C14.7 12.9 14.6 13.0 14.6 13.2V14.9H13.3Z"
          fill="rgba(255,255,255,0.55)"
        />
      </g>
    </svg>
  )
}

