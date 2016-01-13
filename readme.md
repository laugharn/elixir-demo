## Elixir Demo

* Run `npm install`
* Modify node_modules/laravel-elixir/Config.js: set the 'assetsPath' to 'assets' and the 'appPath' to ''
* Have two terminal tabs open, one for Gulp and one for the PHP server
* Use `gulp` to on-demand compile your SASS, JS, etc. Use `gulp watch` to have a continuous file listener.
* Run `php -S localhost:9000 -t public` to serve up the index.php file in /public and see your results

* **Elixir** Gulpfile.js is where the magic happens. Docs can be found at [https://laravel.com/docs/master/elixir]()
* **Bootstrap** When overriding a variable, add them to app.scss or import your own file BEFORE the call to Bootstrap. Docs can be found at [http://v4-alpha.getbootstrap.com]() and you can poke around the SASS at node_modules/bootstrap/scss/bootstrap
* **Vue** Docs can be found at [http://vuejs.org]() and there are some pretty good videos on Laracasts about it. Watch the series on 1.0+ to make sure you're getting the current syntax.
