'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8c078d6bc77838951fbe12cd5a8edb6b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a1ec6b9fc219284f43d8477b54a802f9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fa0831f59c0cacc99500af0ed6ea7037",
".git/logs/refs/heads/main": "8a933af8d570c8a1d22892bd745cebdf",
".git/logs/refs/remotes/origin/main": "ba943f4c8bce528657cafbb29a61c229",
".git/objects/04/b2ff6439da7c82e3d494478e0aa03dc7a1d197": "f53bbcb533fc63b8d6cae200ebca205e",
".git/objects/07/456afc24f95729a2c1370b0854792f77b3ac49": "1ee61f392d0ee0f75a93ebe826e058a0",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/16/7ed73c725540a18a93bb68de8dd34cc0cc7798": "07c99d2a5d9517c53e762090128ff81a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/58ed04dcf827d1beba9dd33595ae857bcbcadd": "fa497718755332cecbd100c1e789a7f2",
".git/objects/2b/d62a9c552ccdc6312cacc513e05930f153700d": "84f090b1846c8f59ab5b062b5f089322",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/a063345bcbcd8ba19bf0248cae4a070e71e2c4": "e67b983c8f87173ed98a6dca619be438",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3b/a63c729384df1e5fec2b3e7a618f7110a34c19": "ece4ddde45e5f02060c4d1f6456785c2",
".git/objects/42/6d3a452a3b6cc56af934b7ed6a9ef53a855fc6": "b286892201333b101d4fb8d2642624db",
".git/objects/45/7d7567ceb7a2af241a3e6ea1470d36fb3d77c6": "8df434fdf08bd9ca58b07561abec08b7",
".git/objects/4f/00d17c74c1f3c8e64cb2663e7439b2b6fe5e1d": "4b833d6ae0ff453da49644479ac42b2f",
".git/objects/52/f1c8067ac9c66d3265a522be3e7b11c4457eec": "e0d9157f0ec15a711dfe2877ae0e0490",
".git/objects/57/61a6022126d1a56c042a112e383fbac439b7f9": "7f629e21ac21f928b40d808c34113653",
".git/objects/67/7dc36872283a88044ae29a97d7e2df44f1d07e": "176b25924d1212f93eb3bfbda4f78bb3",
".git/objects/67/ab84e94bec151364c6bc9281a4d029bf33f4f9": "ccdb51185b73929a0834dc901ee8c159",
".git/objects/75/c1b44ef3ef4a88c31ed30737aac7824648638b": "8693939c3ce168a2ced39bf6e91625f4",
".git/objects/79/03315c2d9b01334dd36fdd89ff4df3f03bd3ed": "cd37942aa9be46cc0fbc23750984a4d7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/cff102766dfa5ab54ce6cbf7052ec41544db53": "a78692b6c0de649e2f8889eca8921246",
".git/objects/7b/072405925a2e551322d59871f872ffaa40f5f7": "0507ad8383973d0dc7fbc1537af867f8",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bc244866000d878b5016e53439722340759bc5": "2753a71d2d82f628ce258ed22af6c2d7",
".git/objects/8e/866c1f1edbb4ce2f465d9f0efa903f8b28a7af": "78cb1edd6e0de77c54d373434a26315c",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/95/842e61d7404c408d0a2bee6b3e82cf1438001a": "b4b00799a38c43b1194a62c3a2aa01d8",
".git/objects/96/56199b454caf2a854cf8047c35829859e74cc3": "31a08adef8168c79369e1558edaef78a",
".git/objects/9b/903f2beb8a260f16dd2f5323b2718192d8668a": "0f30c911a742091eeb1028332ede17ab",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/8de488121ffe4a57b2b06e834796858cc624eb": "081676f69810d330f964f29b87c9f0dc",
".git/objects/9f/b20dc7ee49fddac086c64aae8ea7f70f7bcfdb": "f8dd1310ad1fafda55bb084258d454cc",
".git/objects/9f/cbab3b686d348be6cadd1fcb7a3c6391a51709": "34fa4a0529e8ab8eecc4bef7fd6c9f28",
".git/objects/a0/6ed3df545a8f9570bb97567af2724838501dda": "3ee5b48a13be7bcc35b9d25d84e8efcd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/30f75fefc15babbf14721d359a8ec6ecb87e5e": "8cbf705d8460976023aa5abe5c4beadb",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/af/db3dce84a6b2ef9bda3f62a52f3e1b103eef1a": "c45ed63387d4381438bb6e0629ad7ce9",
".git/objects/b1/d2de50e89d476f465f789f91b7fde1dab27eb1": "aec03d635050623f03284cf7950a1a1a",
".git/objects/b3/a11b8590a2720a4c9e44327d3bd1612e1c727e": "2d42f9ef73bed8da7c78f887429d2a4b",
".git/objects/b5/37173cd94cd08e0058fd3137b768aaed9b95e0": "26c8638d2eeac2d8ef0c117f4b5ac385",
".git/objects/b6/b336ca6b773e2570d289628e0c9b4dea8b54be": "a01b50ed43018ae198efdd15ee6db8db",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/be/4a7156c8939af72a7d36050328d422cbd92f65": "64503cd0ae3392a2a54b9b0cd8dd7f14",
".git/objects/c3/d102e5e494fb2c267a50b39a7f11fd34b135f4": "5ae7ae45de219878f10ebff7b894649f",
".git/objects/c8/40529d58812fe452bcc994556b3506efff66fe": "645176d20b935e6e4b547588ab26f418",
".git/objects/cb/62d57920bcd23fcd1910475551f5bb9f0b56f5": "2e20a71e2057ee1b5b8c41a40e1d0155",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d8/a7cafbfd3a4669b0be3a2832173a99daced3b6": "65005073a16734ff268deb4397005ed6",
".git/objects/dc/549333fcd65573141bd0e045f6a2fb7c291c28": "3e1e8cfc14d290912ad9a7180e5def1c",
".git/objects/dc/5cbe67c872b1925052a6cad0f6e42d66b0e7db": "bda737088128ebd009f5a3f3fe7dfa19",
".git/objects/df/fcfe665aec2f962e9e6089d9b5c5688494f47f": "d8b27b32cf2d24f102a40499d5aef847",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/e3672bc3ba61ff9227c132612f4f073ed5bdae": "84292ccfd742773aa13439b62194af15",
".git/objects/f9/79ecb2ee1d6c1802b0dcbd41139419260b2278": "bef42ed36c507c51833858d24136a0af",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/ff/4e01ed63d3cd70d6799f54ee8e7b5dacfdc550": "2bc23a231219a4b695b2062e9a64a212",
".git/refs/heads/main": "54693952dd057579943258441d9d26a3",
".git/refs/remotes/origin/main": "54693952dd057579943258441d9d26a3",
"assets/AssetManifest.json": "acf96a5c7b440ab563d21a8554fce26d",
"assets/Cv/cv-maharo.pdf": "8a6ea080a2104c5f2ef326d4a8b5800f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/about.png": "f27b83e574b5cbd13ddb0b834977ab55",
"assets/images/android_os_20px.png": "ae1914eef1bbd361950aac85cf2b0d9e",
"assets/images/contact.png": "9b07df3d93de54cf14b323137b46a5cd",
"assets/images/css3_25px.png": "b2889a9442ff9ebbba9a47759b46de66",
"assets/images/dart_20px.png": "dc5297664ea5bc2f766865ca55aa224c",
"assets/images/dart_25px.png": "4c23f071e92f004add1a189c94db89d3",
"assets/images/database_20px.png": "da5abfa9df03821f2402a5a84dbe6165",
"assets/images/desktop_20px.png": "8092db6bb3a0ee37cdec3e695c598fcd",
"assets/images/development_skillx.png": "0a4c3d3c5fdf1eb5d9e4865e14945ccf",
"assets/images/facebook.png": "7791a8618cbf460017af34dd7f228945",
"assets/images/Facebook_20px.png": "7876e5bed3659fb87fa36cdcee3d1829",
"assets/images/facebook_f_50px.png": "f3eefdef29bf35247909067e879cd7b2",
"assets/images/firebase_20px.png": "0477e0c010c79ac3cfffdebbca98f1dd",
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
"assets/images/java_20px.png": "a297cdc7f4942fc9e59b230d473a0b84",
"assets/images/java_25px.png": "44505d49ce3d9e8e6a7eb1e227d06087",
"assets/images/job.png": "3a7362a4287e8aaa5bc41e9f575bb2d9",
"assets/images/kairosAdminRepresentation.png": "273166878200beefd18ed910a6cf2de9",
"assets/images/kairosClient.png": "f83d0274069b35dad4bb32c4b6b3f8ce",
"assets/images/linkedin.png": "182639eb87814f7ab9d37f782e47bc08",
"assets/images/linkedin_50px.png": "86f603e0c2e6196ad3d9602284b4182a",
"assets/images/mysql_20px.png": "910883b04b5bcd509b0f599e3e47603c",
"assets/images/mysql_25px.png": "1985a322a45949c90850521a6b3aae11",
"assets/images/m_90px.png": "0ad49c1f288d0e213dada4a312dbf119",
"assets/images/pdc.JPG": "1ddeb1959362575718b31b8f1ffdc44f",
"assets/images/profile-bg.jpg": "c60926157caff05b004ebd70bcff6aac",
"assets/images/profile.jpg": "137062cacffc2cd9f14f9b51d701477f",
"assets/images/qr_code_20px.png": "545cbe9500f33762ba35e39dec135b53",
"assets/images/skills-bg.jpg": "08229647455d5b9856dd66324abc6e1d",
"assets/images/skype_50px.png": "0849cd6e58f3adb67356e157479a3689",
"assets/images/symfony_25px.png": "5a87b7a8294ee4eb74f4b49d62e0e726",
"assets/images/vue_js_25px.png": "ccfe2960c1f69880f29f19f1b375c929",
"assets/images/web_20px.png": "0614ef7e72bf773106d54befed854e87",
"assets/images/work.png": "6b9ce1f1f8981a4d960aaa1fce5879a9",
"assets/NOTICES": "29dbdf84eaf7bfe8bfb3161911b11ab5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/videos/kairosAdmin.mp4": "5f74f3df323274a5a742e8d6008be365",
"assets/videos/kairosClient.mp4": "8ed7ed4b0051a67b0ed6a53e2e1a7ef7",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b9194d09a5fd5762262c291948180c2e",
"/": "b9194d09a5fd5762262c291948180c2e",
"main.dart.js": "b81b3160d0740abc778d8dc5df9af672",
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
