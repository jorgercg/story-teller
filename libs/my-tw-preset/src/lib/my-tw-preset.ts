import theme = require('tailwindcss/defaultTheme');

export const myTwPreset = {
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
    colors: {
      trasparent: 'transparent',
      current: 'currentColor',
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
      },
      success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
      destructive: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
      generic: {
        white: '#ffffff',
        black: '#000000',
      },
    },
    fontFamily: {
      sans: ['Inter'],
      serif: [...theme.fontFamily.serif],
      mono: [...theme.fontFamily.mono],
    },
    fontSize: {
      /* display-large 48px 52px - 52px 56px */
      'display-medium-large-mobile': [
        '48px',
        {
          lineHeight: '52px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'display-medium-large-desktop': [
        '52px',
        {
          lineHeight: '56px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'display-semibold-large-mobile': [
        '48px',
        {
          lineHeight: '52px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'display-semibold-large-desktop': [
        '52px',
        {
          lineHeight: '56px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'display-bold-large-mobile': [
        '48px',
        {
          lineHeight: '52px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'display-bold-large-desktop': [
        '52px',
        {
          lineHeight: '56px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'display-extrabold-large-mobile': [
        '48px',
        {
          lineHeight: '52px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      'display-extrabold-large-desktop': [
        '52px',
        {
          lineHeight: '56px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      /* display-small 40px 44px - 44px 48px */
      'display-medium-small-mobile': [
        '40px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'display-medium-small-desktop': [
        '44px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'display-semibold-small-mobile': [
        '40px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'display-semibold-small-desktop': [
        '44px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'display-bold-small-mobile': [
        '40px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'display-bold-small-desktop': [
        '44px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'display-extrabold-small-mobile': [
        '40px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      'display-extrabold-small-desktop': [
        '44px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      /* Heading h1 36px 44px - 40px 48px */
      'h1-medium-mobile': [
        '36px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h1-medium-desktop': [
        '40px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h1-semibold-mobile': [
        '36px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h1-semibold-desktop': [
        '40px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h1-bold-mobile': [
        '36px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h1-bold-desktop': [
        '40px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h1-extrabold-mobile': [
        '36px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      'h1-extrabold-desktop': [
        '40px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      /* Heading h2 32px 40px - 36px 44px */
      'h2-medium-mobile': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h2-medium-desktop': [
        '36px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h2-semibold-mobile': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h2-semibold-desktop': [
        '36px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h2-bold-mobile': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h2-bold-desktop': [
        '36px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h2-extrabold-mobile': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      'h2-extrabold-desktop': [
        '36px',
        {
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      /* Heading h3 28px 36px - 32px 40px */
      'h3-medium-mobile': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h3-medium-desktop': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h3-semibold-mobile': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h3-semibold-desktop': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h3-bold-mobile': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h3-bold-desktop': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h3-extrabold-mobile': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      'h3-extrabold-desktop': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      /* Heading h4 24px 32px - 28px 36px */
      'h4-medium-mobile': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h4-medium-desktop': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h4-semibold-mobile': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h4-semibold-desktop': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h4-bold-mobile': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h4-bold-desktop': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h4-extrabold-mobile': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      'h4-extrabold-desktop': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      /* Heading h5 20px 28px - 24px 32px */
      'h5-medium-mobile': [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h5-medium-desktop': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h5-semibold-mobile': [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h5-semibold-desktop': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h5-bold-mobile': [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h5-bold-desktop': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h5-extrabold-mobile': [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      'h5-extrabold-desktop': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      /* Heading h6 18px 24px - 20px  28px */
      'h6-medium-mobile': [
        '18px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h6-medium-desktop': [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      'h6-semibold-mobile': [
        '18px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h6-semibold-desktop': [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      'h6-bold-mobile': [
        '18px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h6-bold-desktop': [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h6-extrabold-mobile': [
        '18px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      'h6-extrabold-desktop': [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      /* Paragraph p-large 18px - 28px */
      'p-large-regular': [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: '400',
        },
      ],
      'p-large-medium': [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: '500',
        },
      ],
      'p-large-semibold': [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: '600',
        },
      ],
      /* Paragraph p-medium 16px - 24px */
      'p-medium-regular': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      'p-medium-medium': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '500',
        },
      ],
      'p-medium-semibold': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '600',
        },
      ],
      /* Paragraph p-small 14px - 20px */
      'p-small-regular': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      'p-small-medium': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '500',
        },
      ],
      'p-small-semibold': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '600',
        },
      ],
      /* Paragraph p-x-small 12px - 20px */
      'p-x-small-regular': [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      'p-x-small-medium': [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: '500',
        },
      ],
      'p-x-small-semibold': [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: '600',
        },
      ],
      /* Caption caption-small 12px - 20px */
      'caption-small': [
        '12px',
        {
          lineHeight: '20px',
          letterSpacing: '1px',
          fontWeight: '600',
        },
      ],
      /* Caption caption-large 14px - 20px */
      'caption-large': [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '1px',
          fontWeight: '600',
        },
      ],
    },
    boxShadow: {
      xsmall: '0px 1px 2px rgba(0, 0, 0, 0.08)',
      small:
        '0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1)',
      medium:
        '0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
      large:
        '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xlarge:
        '0px 10px 10px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)',
      xxlarge: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
  },
  plugins: [],
};
