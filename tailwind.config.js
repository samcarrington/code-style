import colors from 'tailwindcss/colors';
import tailWindTypography from '@tailwindcss/typography';

module.exports = {
  darkMode: 'class',
  plugins: [tailWindTypography],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.stone,
      },
    },
  },
};
