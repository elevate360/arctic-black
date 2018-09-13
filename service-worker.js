/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1cbe79c0f9fb28ca65a941b7020f3375"
  },
  {
    "url": "assets/css/3.styles.3aaab79d.css",
    "revision": "3b009d53f427350594774d2d0da5012d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.ca9eb1f9.js",
    "revision": "3e592f1eb0a11b69673f914c90da593d"
  },
  {
    "url": "assets/js/1.7b757e66.js",
    "revision": "1386fd4ab6fe08e5309f9e877a24746a"
  },
  {
    "url": "assets/js/2.ec6ad489.js",
    "revision": "a87bc3b6d4c6730ba7afe84d95f41522"
  },
  {
    "url": "assets/js/app.84d1a571.js",
    "revision": "f12bf91feb464d2d22b221dd521781f1"
  },
  {
    "url": "config/index.html",
    "revision": "1b1ac3af1b289792e4c4a88e972287a0"
  },
  {
    "url": "index.html",
    "revision": "9293411fa148378265414e8f75376899"
  },
  {
    "url": "logo.png",
    "revision": "e741d22f8ed60c25ffa80a79608a2fdf"
  },
  {
    "url": "screenshot.jpg",
    "revision": "b52bea42e1765b974e4ba548110ad9ef"
  },
  {
    "url": "setup/index.html",
    "revision": "7df7435eb85ae2c3e08d8d140b2ce7fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
