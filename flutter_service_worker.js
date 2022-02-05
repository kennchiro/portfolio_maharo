'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "30022612c7cfaedd89d21ad65ab1f518",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/about.png": "f27b83e574b5cbd13ddb0b834977ab55",
"assets/images/contact.png": "9b07df3d93de54cf14b323137b46a5cd",
"assets/images/css3_25px.png": "b2889a9442ff9ebbba9a47759b46de66",
"assets/images/dart_25px.png": "4c23f071e92f004add1a189c94db89d3",
"assets/images/development_skillx.png": "0a4c3d3c5fdf1eb5d9e4865e14945ccf",
"assets/images/facebook.png": "7791a8618cbf460017af34dd7f228945",
"assets/images/facebook_f_50px.png": "f3eefdef29bf35247909067e879cd7b2",
"assets/images/flutter_20px.png": "38b15848ef5ee4fb8ad881fe74493b21",
"assets/images/flutter_25px.png": "4eba04e954673e6f731c51121b5b2f75",
"assets/images/github.png": "a5e89277ee58878ac5b620161827ebe4",
"assets/images/gmail.png": "a207528f270276682b7bf7afe58677cf",
"assets/images/gmail_50px.png": "887eafe20368e62608bba92baeede38b",
"assets/images/google_firebase_console_25px.png": "9c889f009fb9791c88a4d6fec76aea86",
"assets/images/home.png": "7b9dba905139ba7e9619979c8e956d4b",
"assets/images/html_25px.png": "5a9109255461c3a17b662c09691a7ece",
"assets/images/html_5_25px.png": "e71a485c6d3474d375551487e2962f8b",
"assets/images/intro-bg.jpg": "2457c369d0f00bd3120ab73d14733379",
"assets/images/javascript_25px.png": "290b08de7921d00b25fed995dc1489f5",
"assets/images/java_25px.png": "44505d49ce3d9e8e6a7eb1e227d06087",
"assets/images/job.png": "3a7362a4287e8aaa5bc41e9f575bb2d9",
"assets/images/linkedin.png": "182639eb87814f7ab9d37f782e47bc08",
"assets/images/linkedin_50px.png": "86f603e0c2e6196ad3d9602284b4182a",
"assets/images/mysql_25px.png": "1985a322a45949c90850521a6b3aae11",
"assets/images/m_90px.png": "0ad49c1f288d0e213dada4a312dbf119",
"assets/images/pdc.JPG": "1ddeb1959362575718b31b8f1ffdc44f",
"assets/images/profile-bg.jpg": "c60926157caff05b004ebd70bcff6aac",
"assets/images/profile.jpg": "137062cacffc2cd9f14f9b51d701477f",
"assets/images/skills-bg.jpg": "08229647455d5b9856dd66324abc6e1d",
"assets/images/skype_50px.png": "0849cd6e58f3adb67356e157479a3689",
"assets/images/symfony_25px.png": "5a87b7a8294ee4eb74f4b49d62e0e726",
"assets/images/vue_js_25px.png": "ccfe2960c1f69880f29f19f1b375c929",
"assets/images/work.png": "6b9ce1f1f8981a4d960aaa1fce5879a9",
"assets/NOTICES": "6dd0693af8d9e95224410960fed62f7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f9d04c165c0a3dead064c8b6f7962dc2",
"/": "f9d04c165c0a3dead064c8b6f7962dc2",
"main.dart.js": "c6509f23238d6b7e01f075615a95ae45",
"manifest.json": "105564294e5212994fc1209e94c51ef3",
"version.json": "accbdb6407e6843f22645f479dde0a29"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
