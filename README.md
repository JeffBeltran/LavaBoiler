# LavaBoiler  


## A Simple SPA Boilerplate built with [Laravel](https://laravel.com) and [Vue](https://vuejs.org/)

In short, this is a direct replacement of the `php artisan make:auth` command with laravel but with [Vue](https://vuejs.org/) and [Bulma](http://bulma.io/documentation/overview/start/)

### Resources
##### Back-End:  
- [Laravel](https://laravel.com): Acts as the back-end API
- [Passport](https://laravel.com/docs/5.4/passport): Handles API auth and allows for oAuth support. Current version uses the [CreateFreshApiToken](https://laravel.com/docs/5.4/passport#consuming-your-api-with-javascript) middleware to set a JWT in the encrypted cookie that gets sent with the responses. (This SPA is not decoupled as it is launched via a blade)

##### Front-End:  

- [Vue](https://vuejs.org/): Acts as the front end framework
- [Vuex](https://vuex.vuejs.org/en/): Vue plugin to handle state management for the app
- [vue-router](https://router.vuejs.org/en/): Handles the routing, currently it does not handle history mode since it requires server changes but if you [don't want the hashes just look at this](https://router.vuejs.org/en/essentials/history-mode.html)
- [Buefy](https://buefy.github.io/#/documentation/start): just a Vue version of [Bulma](http://bulma.io/documentation/overview/start/) to make things a little more simple by having components... you don't need it but i liked it.
- [LocalForage](https://localforage.github.io/localForage/): Simple enhancement for local storage, it uses promises so made my life easier...

### Why?

I wanted to learn Vue (and improve my understanding of JS) and create a SPA with Laravel that utilized oAuth.

As I was working on this I realized this would be helpful for me with my future projects so i don't have to do the boring stuff over and over again. Then I figured I'd share it, enjoy.

### How

Just in-case you are new to the world of Laravel...

1. Clone this repo
1. copy `env.example` to `.env`
1. fill out the `.env` to meet your requirements
1. run `php artisan key:generate`
1. run `php artisan migrate`
1. run `php artisan passport:install`
1. run `composer install`
1. run `npm install`
1. visit site
