const mix = require('laravel-mix')

mix.browserSync('gakuen_furima.test')
  .js('resources/js/app.js', 'public/js')
  .version()