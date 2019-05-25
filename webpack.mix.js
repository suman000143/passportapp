const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
   proxy: process.env.APP_URL,
   files: [
       'public/assets/css/**/*.css',
       'public/assets/js/bundle.js',
       'app/**/*.php',
       'resources/views/**/*.php',
   ]
}).js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
