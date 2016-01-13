var elixir = require('laravel-elixir');

elixir.config.appPath = '';
elixir.config.assetsPath = 'assets';

elixir(function(mix) {
    mix.browserify('app.js');
    mix.sass('app.scss');
});
