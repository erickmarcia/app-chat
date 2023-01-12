module.exports = {
    prefix: '',
    // purge: {
    //   content: [
    //     './src/**/*.{html,ts}',
    //   ]
    // },
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
