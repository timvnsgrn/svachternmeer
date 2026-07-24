module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'sva-blue': {
          DEFAULT: '#1E3A8A',
          50:  '#EEF2FB',
          100: '#DCE5F6',
          200: '#B4C6EA',
          300: '#8CA7DE',
          400: '#4A6BC4',
          500: '#1E3A8A',
          600: '#1A3277',
          700: '#152864',
          800: '#101E4B',
          900: '#0B1533',
        },
        'sva-accent': '#2E5BFF',
        'sva-ink': '#15171C',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(16,30,75,0.04), 0 8px 24px -8px rgba(16,30,75,0.10)',
        'card-hover': '0 4px 8px rgba(16,30,75,0.06), 0 16px 32px -12px rgba(16,30,75,0.18)',
      },
    },
  },
  plugins: [],
};
