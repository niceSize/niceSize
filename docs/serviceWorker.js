var chacheName = 'cache';
var urlsToCache = [
  'index.html',
  'de-de.html',
  'contact.html',
  'de-deContact.html',
  'css/niceSizeFallback.css',
  'css/style.css',
  'css/de-de.css',
  'css/contact.css',
  'css/de-deContact.css',
  'js/niceSize.min.js',
  'js/index.min.js',
  'img/contact.svg',
  'img/contactDarkMode.svg',
  'img/contactUs.svg',
  'img/contactUsDarkMode.svg',
  'img/discord.svg',
  'img/discordDarkMode.svg',
  'img/fastLoading.svg',
  'img/fastLoadingDarkMode.svg',
  'img/footerDownload.svg',
  'img/footerDownloadDarkMode.svg',
  'img/github.svg',
  'img/githubDarkMode.svg',
  'img/goodTeam.svg',
  'img/goodTeamDarkMode.svg',
  'img/logo.svg',
  'img/logoDarkMode.svg',
  'img/mobileBrowsers.svg',
  'img/mobileBrowsersDarkMode.svg',
  'img/openSource.svg',
  'img/openSourceDarkMode.svg',
  'img/webDevices.svg',
  'img/webDevicesDarkMode.svg',
];

//Install the worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(chacheName)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

//Handle request from cache and store new request in the cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(chacheName)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
    );
});
