import type { Config } from 'tailwindcss';

/**
 * Calderwood Partners — design tokens
 *
 * Trustworthy and sharp: white paper, deep navy structure, one emerald
 * accent reserved for action and emphasis. Structured grid, no decoration.
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1F3D', // headings, dark bands, footer
          soft: '#22334F',    // body text on white
          mute: '#5A6A85',    // secondary text (AA on white)
          wash: '#E8EDF5',    // tinted surfaces / borders' kin
        },
        emerald: {
          DEFAULT: '#10805F', // links, primary buttons, active states — only hue
          dark: '#0B654A',    // hover
          light: '#5FBF9A',   // on-dark accent (footer links)
          wash: '#E6F2ED',    // success tints, tag backgrounds
        },
        line: '#D9E0EA',      // 1px hairlines
        paper: '#FFFFFF',
        fog: '#F5F7FA',       // alternating section band
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h1x': ['clamp(2rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h2x': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2' }],
        'stat': ['clamp(2.25rem, 4vw, 3rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'lead': ['1.125rem', { lineHeight: '1.7' }],
      },
      spacing: {
        section: '6.5rem',
        shell: '80rem',
      },
      maxWidth: {
        shell: '80rem',
        prose: '44rem',
      },
      borderRadius: {
        sharp: '2px', // near-square corners = "sharp" brand posture
      },
      boxShadow: {
        card: '0 1px 3px rgb(15 31 61 / 0.08)',
        raised: '0 10px 30px rgb(15 31 61 / 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
