module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Spartan']
    },
    extend: {
      backgroundImage: theme => ({
        'img-anne': "url('/images/image-anne.jpg')",
        'img-colton': "url('/images/image-colton.jpg')",
        'img-irene': "url('/images/image-irene.jpg')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
