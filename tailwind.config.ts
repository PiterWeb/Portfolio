import {defineConfig} from 'windicss/helpers';

export default defineConfig({
  theme: {
        extend: {
          colors: {
            reepolee: {
              500: "#b40000",
              600: "#9c0000",
              700: "#750000",
            },
          },
        },
      },
  darkMode: 'class',
  extract: {
    include: ['/src/style.css', 'index.html']
  }
});
