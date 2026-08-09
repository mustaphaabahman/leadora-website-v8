import React from 'react';

export const LeadGenLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M22 2L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="22" cy="2" r="2" fill="currentColor"/>
  </svg>
);

export const CreativeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M17 10L21 8V16L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="12" r="2" fill="currentColor"/>
  </svg>
);

export const WebLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 8H22" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="5" cy="6" r="1" fill="currentColor"/>
    <circle cx="8" cy="6" r="1" fill="currentColor"/>
    <circle cx="11" cy="6" r="1" fill="currentColor"/>
    <path d="M8 16L12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LandingLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="18" r="1" fill="currentColor"/>
  </svg>
);

export const ShopifyLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18.88 4.09C18.88 4.09 16.94 4.8 15.68 5.17L13.1 1.25C12.87 0.9 12.39 0.9 12.16 1.25L9.57 5.17C8.31 4.8 6.37 4.09 6.37 4.09C6.01 3.97 5.61 4.14 5.48 4.51L2.03 15.68C1.94 15.98 2.05 16.31 2.31 16.48L11.75 22.84C12.06 23.05 12.46 23.05 12.77 22.84L22.21 16.48C22.47 16.31 22.58 15.98 22.49 15.68L19.04 4.51C18.91 4.14 18.51 3.97 18.88 4.09ZM12.34 19.86C10.74 19.86 9.44 18.56 9.44 16.96C9.44 15.36 10.74 14.06 12.34 14.06C13.94 14.06 15.24 15.36 15.24 16.96C15.24 18.56 13.94 19.86 12.34 19.86Z"/>
  </svg>
);

export const YouCanLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="youcan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3584F6" />
        <stop offset="100%" stopColor="#1054FB" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="24" fill="url(#youcan-grad)" />
    
    <path d="M28 42C28 39.7909 29.7909 38 32 38H68C70.2091 38 72 39.7909 72 42V72C72 74.2091 70.2091 76 68 76H32C29.7909 76 28 74.2091 28 72V42Z" fill="white" />
    <path d="M38 38V32C38 25.3726 43.3726 20 50 20C56.6274 20 62 25.3726 62 32V38" stroke="white" strokeWidth="6" strokeLinecap="round" />
    
    <path d="M40 56C40 62 44.5 66 50 66C54 66 57 63.5 58 60L60 62" stroke="#1054FB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SocialLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor"/>
    <rect x="13" y="3" width="8" height="8" rx="4" fill="currentColor"/>
    <rect x="3" y="13" width="8" height="8" rx="4" fill="currentColor"/>
    <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor"/>
    <path d="M7 7L17 17M17 7L7 17" stroke="white" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export const ConsultingLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 20H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="6" y="12" width="3" height="6" fill="currentColor"/>
    <rect x="11" y="8" width="3" height="10" fill="currentColor"/>
    <rect x="16" y="4" width="3" height="14" fill="currentColor"/>
  </svg>
);

export const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.01 2.01C6.49 2.01 2 6.5 2 12.02C2 13.78 2.46 15.48 3.3 16.96L2.12 21.28L6.56 20.12C8.01 20.89 9.68 21.31 11.4 21.31C16.92 21.31 21.41 16.82 21.41 11.3C21.41 8.63 20.37 6.13 18.48 4.24C16.6 2.36 14.1 1.32 11.43 1.32L12.01 2.01ZM12.01 19.86C10.5 19.86 9.04 19.46 7.76 18.7L7.52 18.56L4.85 19.26L5.56 16.65L5.41 16.41C4.58 15.08 4.14 13.56 4.14 12.01C4.14 7.67 7.68 4.13 12.02 4.13C14.12 4.13 16.08 4.95 17.57 6.44C19.06 7.93 19.88 9.89 19.88 11.99C19.88 16.33 16.34 19.87 12.01 19.87L12.01 19.86ZM16.32 13.98C16.08 13.86 14.93 13.29 14.71 13.21C14.5 13.13 14.34 13.09 14.18 13.33C14.02 13.57 13.58 14.09 13.44 14.25C13.3 14.41 13.16 14.43 12.92 14.31C12.68 14.19 11.93 13.94 11.05 13.15C10.36 12.53 9.89 11.76 9.75 11.52C9.61 11.28 9.74 11.17 9.85 11.05C9.96 10.94 10.09 10.77 10.2 10.63C10.32 10.49 10.36 10.39 10.44 10.23C10.52 10.07 10.48 9.93 10.42 9.81C10.36 9.69 9.89 8.53 9.69 8.06C9.5 7.6 9.3 7.66 9.16 7.66C9.02 7.66 8.86 7.66 8.7 7.66C8.54 7.66 8.28 7.72 8.06 7.96C7.84 8.2 7.22 8.78 7.22 9.96C7.22 11.14 8.08 12.28 8.2 12.44C8.32 12.6 9.89 15.02 12.3 16.06C12.87 16.31 13.32 16.45 13.67 16.56C14.24 16.74 14.76 16.71 15.17 16.65C15.63 16.58 16.62 16.06 16.82 15.48C17.02 14.9 17.02 14.41 16.96 14.31C16.88 14.19 16.72 14.13 16.48 14.01V13.98H16.32Z"/>
  </svg>
);
