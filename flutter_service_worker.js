'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2dc676e22afedb14a8c85f7571d2c31b",
".git/config": "8c078d6bc77838951fbe12cd5a8edb6b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
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
".git/index": "a13a4d7b7a6264d5a398b79ef809fba0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a9f9a9c3f60ec037e3416ffe35b74d67",
".git/logs/refs/heads/main": "992ab1625a075c50bd02d6c619d72e59",
".git/logs/refs/remotes/origin/main": "2794afb69a943b5b4de1cd90246b1b30",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/03/63b5e088d431751a2c3e478ba13a167ebd0488": "27261b58508d7b0f3790bdb03fba8de1",
".git/objects/04/b2ff6439da7c82e3d494478e0aa03dc7a1d197": "f53bbcb533fc63b8d6cae200ebca205e",
".git/objects/05/43ba3026e54d5f551705186d3f8561cad7b73b": "c13c4dd7ccd7d49959a3118884c2f3e1",
".git/objects/05/48e3e69c3d04a8df140412f948bbbea53e699b": "cd42abc0abd1633f949cc21dd7f7db0d",
".git/objects/07/456afc24f95729a2c1370b0854792f77b3ac49": "1ee61f392d0ee0f75a93ebe826e058a0",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/09/52138fc6253256e0fa72c65833ef631b6516e7": "b60c7b5639787d4acb753e19d68d0ee6",
".git/objects/0c/c9c21f7aa8e086a605e0bf5752371a3f3c318a": "d10127b15e09da7cb102de07d362545b",
".git/objects/10/08914be6332faee180ddfc92f756948de197a3": "9cfa0564f40fc972440dfb86aeb092d7",
".git/objects/12/3fdf20b3c5fb0ea9f107f9935c32bd01344ce3": "415a32d714dfa79113797e7b55226222",
".git/objects/12/78e9f638da93a9669c93b83402b744a7b1e76d": "e98191bad349f0a85caf0ea08a2238af",
".git/objects/12/9672a5dbdcd89c8590343cd7798b62ec98ab6d": "6a877dd6ed2bf7826bf8a126125e8bc8",
".git/objects/13/305b7ca8795bf9d89ac8eef41bbde0e0bcd793": "a29d4efe077ab274137ab502d1559a07",
".git/objects/14/98660a01b63d3e5a7a4855bdaa2a13b902e691": "b78562d39343ae232073c2bd79cbd2f0",
".git/objects/15/09dcecd4512639d55ef229109b7052b224cab7": "98f85bdb2eb54294bc5c95b9a5bf20e6",
".git/objects/16/7ed73c725540a18a93bb68de8dd34cc0cc7798": "07c99d2a5d9517c53e762090128ff81a",
".git/objects/1d/4478c659bb4a1376c552d805ba459f2802019a": "c40abfc882deab3f1aad77f60cbcf7ba",
".git/objects/1d/7601a9cc8822d0ae806cf7ff0f53a9a2ac1b19": "df29008f48244171e4fd3c5b45876c6a",
".git/objects/1e/5512f892ac94daa0e31bf9d6f761a2e4ba5074": "fa574faf6b51f7d6bb05d7b6360961d7",
".git/objects/1e/a6d1feca7046b5cee7c855cb7968e8a570b778": "98396e329f4b8cf30903c6632f2e1d92",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/c5782dde95c3659b0755d5dbd312cbd14cbfdb": "308dafdde957c8991f7d735a1d9df3ee",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/27bcd1b736a79f5127eb37b0182a28e7f2d60b": "6036fc6cb7265cc1f1121d42dbeaeaf1",
".git/objects/2a/2477a65b6ade09fca215b8b94d8ca151bebc24": "98eba3d0ca8b3790ef44c1062066dc83",
".git/objects/2b/58ed04dcf827d1beba9dd33595ae857bcbcadd": "fa497718755332cecbd100c1e789a7f2",
".git/objects/2b/be83a963c9c6181498b42937ed6639abf838ac": "eaf17da32d83f7dee8af240f5fea8578",
".git/objects/2b/d62a9c552ccdc6312cacc513e05930f153700d": "84f090b1846c8f59ab5b062b5f089322",
".git/objects/2d/6d14eca1d3979e5a55d4b61f93c913f5a59d40": "055e76466b50473c35a81f2bc02340b8",
".git/objects/2e/d103cbb2454a5372b010b88236c192494ce036": "a2fc52680e6a5f77bcca89f091bf7090",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/b4427b76f314af3a8c30f010b2c84166dd8d2c": "c95904f668eec75dfa89ac5069e31237",
".git/objects/35/a063345bcbcd8ba19bf0248cae4a070e71e2c4": "e67b983c8f87173ed98a6dca619be438",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3b/a63c729384df1e5fec2b3e7a618f7110a34c19": "ece4ddde45e5f02060c4d1f6456785c2",
".git/objects/3c/34c24caf468e7adf7cf384a2803e4caa21cda7": "5be4fbcbb57ef1b286ceebebdf73d762",
".git/objects/3c/7f2be422e819adce4f8e5530db52637a5b74b6": "cc509f1bb56c79950208d5f3b34d021c",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/3e/8d54d7fda62d32a803801ba6f35e926602f957": "856e1c8e4f3fd1ebf63cfbe5da5decaf",
".git/objects/3f/3aedace94dbe6aed6841a72229503b9f050235": "5b697e5f09490a2c97cd391a886f3866",
".git/objects/40/f4d0d69adb90fba3f716c3360edf3f20536799": "093cdac8211bbc361175771e49b94500",
".git/objects/42/6d3a452a3b6cc56af934b7ed6a9ef53a855fc6": "b286892201333b101d4fb8d2642624db",
".git/objects/45/7d7567ceb7a2af241a3e6ea1470d36fb3d77c6": "8df434fdf08bd9ca58b07561abec08b7",
".git/objects/4a/350c511481b3cecd520366caa25c7fd9ef8373": "b858bdbfeb92408d714d38912cb41d86",
".git/objects/4e/01ff2b7967182d542785819c9eec964ebcee15": "c9e451e5f39d6eda06df5353c34a2d9c",
".git/objects/4f/00d17c74c1f3c8e64cb2663e7439b2b6fe5e1d": "4b833d6ae0ff453da49644479ac42b2f",
".git/objects/52/f1c8067ac9c66d3265a522be3e7b11c4457eec": "e0d9157f0ec15a711dfe2877ae0e0490",
".git/objects/53/0c3f79032eb1f4de72c42dc71e8021d3c689f9": "a9668693b16996265df115e021a817ed",
".git/objects/53/c00724e6f4a6864976caf56c318deed54011b5": "e31577b6779227d5447de4b33441b2a2",
".git/objects/53/c4808e57c40fa75795f11f74d07014bf372c6c": "5ee3ed1213dfcf3742c84b57a1e541a0",
".git/objects/54/279d720b4f2dfc1e40843e7cd32551b37dd31e": "e127120a5fda387c8a20eae44b2310ce",
".git/objects/56/79706f54d867f1aad1adfad3a99964803ebf72": "815c7af24fbbde3941b6f27f9ca770a0",
".git/objects/57/61a6022126d1a56c042a112e383fbac439b7f9": "7f629e21ac21f928b40d808c34113653",
".git/objects/5b/1396191831ae52cf12aa3eedeab6d9b0f63fd3": "2c29a09ea444371b3496d7c94c31af00",
".git/objects/5b/6ebcba656731be76a8199e13f97cb1e6833dd0": "17d9dfcb6541fe0e35e513d54e19db5f",
".git/objects/5e/44689efef4e6c4b981147b83e4cd2bc4ed635d": "3d2ce596409c1b26ba3b5c4a8321ab34",
".git/objects/5e/651482cb8cfbcfc0eb3bb77b196e30812f9f16": "ce10c9f1c60ef7b45a0c04e56b54adc3",
".git/objects/60/474f7d1e4aea62177d8036245f79495f5fec39": "da0654ec3b61cb87f093cb27ab63df6f",
".git/objects/61/089229419e13a89ba7beaa855e09e7f01cf141": "f34a8481cf23ab33c64dfbd7aad236b7",
".git/objects/61/6d266ebc1dcf3f5d082edd2849d043046aa937": "03d2b5eed347d7effc787ea47e3b8c5d",
".git/objects/61/f93dd4484b18ad79892d4dce89cfc1adefd7f8": "7e32e2182da4e6a60809fd3a437fe908",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/65/c1710c704636c29decd59b132574be17a368a0": "621c94a9d0e74e4886038347d436e623",
".git/objects/66/4dd0613b3e3925cd462b6a6366da319975599f": "2667f51a0ee209e1c2d9595c2f8d2039",
".git/objects/67/71030adeb9cb0983f9cb9bfb9f4e0859077e58": "83fb3396cf72670f66424d8ce9b7fbdb",
".git/objects/67/7dc36872283a88044ae29a97d7e2df44f1d07e": "176b25924d1212f93eb3bfbda4f78bb3",
".git/objects/67/ab84e94bec151364c6bc9281a4d029bf33f4f9": "ccdb51185b73929a0834dc901ee8c159",
".git/objects/68/c1f2d57cf388a43b6a434561aa38eccf03cbfb": "e82c2b0b30b92132c1c01aa0216e9158",
".git/objects/6a/fb25feb2c128e76b4a40ed3eea4c887d647723": "a6a00288146090715022ded4cd208c7f",
".git/objects/6e/be892cb93cb36d2032ea6e44bedcc7b80ef40f": "a9c1182100b1b8d802486bf64d4e7944",
".git/objects/6f/688a30f3ce353592442d03b702c4d2ed0c4bee": "65739f70fe4e87b795f260c4738b181b",
".git/objects/72/d5c435e83cab854b3f0cff4baf20d77c821076": "6b06dd848a9583a9b4abaedd7e740117",
".git/objects/72/eba79eb0ba9f7e96bc3130b8b57f814f3c67aa": "ffde9d277a76faf730419264c505e439",
".git/objects/75/c1b44ef3ef4a88c31ed30737aac7824648638b": "8693939c3ce168a2ced39bf6e91625f4",
".git/objects/79/03315c2d9b01334dd36fdd89ff4df3f03bd3ed": "cd37942aa9be46cc0fbc23750984a4d7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/cff102766dfa5ab54ce6cbf7052ec41544db53": "a78692b6c0de649e2f8889eca8921246",
".git/objects/7b/072405925a2e551322d59871f872ffaa40f5f7": "0507ad8383973d0dc7fbc1537af867f8",
".git/objects/7c/fe218f7fcd96d5efd47b629add3ce961f4853a": "cdc96f5b31a04212bd025bdf474c650b",
".git/objects/7d/5e29fc58ca8a5e9c6e386f5442946fef700a8e": "c209ce3c5c0f71fc2ff5b8fdacb84ba7",
".git/objects/7e/773eb8a6a22f2b617d147711a4430bd99a902f": "a1a73cf0ac272487998d2a3ca29d3d84",
".git/objects/7f/9cd3fa4a0caa59fcf3fa783f083e3f73487383": "143fa9a1a94f6476210249cd11944694",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/a2830879f8cc26d4e529ea49eba7bcdf99e7c8": "c2682f8683ec317aa1eb5e05aa7553fc",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9945b3ab346742dc7432f9a71f5737db9378a9": "42c5fd43163dcf4d5cf517e1dce0ee3b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bc244866000d878b5016e53439722340759bc5": "2753a71d2d82f628ce258ed22af6c2d7",
".git/objects/8b/12bfc772472a97ca733bdc6f20a22815d605c5": "dd417273a6f9e09bae7b1e305d4e84d9",
".git/objects/8e/866c1f1edbb4ce2f465d9f0efa903f8b28a7af": "78cb1edd6e0de77c54d373434a26315c",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/92/19239a9ef1b4208a251377ec9bf3aa342e0985": "d55e164ca098de0db2928a5839aa1133",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/95/842e61d7404c408d0a2bee6b3e82cf1438001a": "b4b00799a38c43b1194a62c3a2aa01d8",
".git/objects/95/a6a48d4f3608ec9f4314e803907e530afb41e5": "1b74b3c47b6ad0472297425c713d99be",
".git/objects/96/56199b454caf2a854cf8047c35829859e74cc3": "31a08adef8168c79369e1558edaef78a",
".git/objects/96/8c5a8ece8f041cc593b5d06f7057119bbed761": "9cf78d5c464ace37c1f9852f4083a468",
".git/objects/98/d73fb1fc6096052f9ddcd0b60a89faa889eec9": "9e338a4889df3d748d4b87b58cd8b165",
".git/objects/9b/903f2beb8a260f16dd2f5323b2718192d8668a": "0f30c911a742091eeb1028332ede17ab",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/8de488121ffe4a57b2b06e834796858cc624eb": "081676f69810d330f964f29b87c9f0dc",
".git/objects/9f/b20dc7ee49fddac086c64aae8ea7f70f7bcfdb": "f8dd1310ad1fafda55bb084258d454cc",
".git/objects/9f/cbab3b686d348be6cadd1fcb7a3c6391a51709": "34fa4a0529e8ab8eecc4bef7fd6c9f28",
".git/objects/a0/6ed3df545a8f9570bb97567af2724838501dda": "3ee5b48a13be7bcc35b9d25d84e8efcd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/30f75fefc15babbf14721d359a8ec6ecb87e5e": "8cbf705d8460976023aa5abe5c4beadb",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/b00599070c6290a675d219d10114f37829ea26": "704612b7e0c36fa4a592934b8b930851",
".git/objects/ac/fa8dcaafbbb06cc1f01769539a049091f7ba34": "f6c31f31907ea23cd4db5d5fe8bd98fd",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/ae/7e9f05a692449310c9287a69aaac9f8fd2a469": "bc6d9168d1e4d86380b98b9cdfaf32c3",
".git/objects/af/6718a5ed3a0d3b87d0ca3e0b431b3d564987bd": "0434f3739ef0e44f11a692191fc316a4",
".git/objects/af/db3dce84a6b2ef9bda3f62a52f3e1b103eef1a": "c45ed63387d4381438bb6e0629ad7ce9",
".git/objects/b0/9ecd07e9262d8879d47e8226d4a5445bf1f69f": "e3b13531380e283565cce5a698160ca9",
".git/objects/b1/5117e9d368cf987c423de201a56d9e949b4939": "ba5a69cfbec80bc23423ba057c2f7ef4",
".git/objects/b1/d2de50e89d476f465f789f91b7fde1dab27eb1": "aec03d635050623f03284cf7950a1a1a",
".git/objects/b2/2173d438e41acd1d5dcb14fd68b155d7892dec": "7c425216a758786da09a01c21bb9e31e",
".git/objects/b3/a11b8590a2720a4c9e44327d3bd1612e1c727e": "2d42f9ef73bed8da7c78f887429d2a4b",
".git/objects/b4/c7706d83fe636a67a6899b39b52bb4c333b3eb": "42db7eaf5d5ab64d5141133d061f3c55",
".git/objects/b5/37173cd94cd08e0058fd3137b768aaed9b95e0": "26c8638d2eeac2d8ef0c117f4b5ac385",
".git/objects/b6/43d76c0f70da80b4a9d4935931d19bcedfbe5e": "c878c67b5dd86b03bf7e49bc6d1caa56",
".git/objects/b6/b336ca6b773e2570d289628e0c9b4dea8b54be": "a01b50ed43018ae198efdd15ee6db8db",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/bd/0df30714a88d0d8c9af48dffd26a3bc07efecd": "d9e3764552431c5e8a095b94d759d486",
".git/objects/be/4a7156c8939af72a7d36050328d422cbd92f65": "64503cd0ae3392a2a54b9b0cd8dd7f14",
".git/objects/c0/0a2905f0b2000652c9cadd18979ca583ef6901": "410aa5ecb848eaa7e8f395b92ae8269b",
".git/objects/c0/b8d796b239f0f83a43cf922691ce303b415ba4": "754b741d5f424dab5a7235f0ca523a12",
".git/objects/c1/62e599a723293516cb29b8ada3243e4340c98a": "a061c2c0ee9d6d581b1841b39be20c9d",
".git/objects/c3/d102e5e494fb2c267a50b39a7f11fd34b135f4": "5ae7ae45de219878f10ebff7b894649f",
".git/objects/c8/40529d58812fe452bcc994556b3506efff66fe": "645176d20b935e6e4b547588ab26f418",
".git/objects/ca/09c7cbd14935819cc848c856d51ca76f61db89": "518ff072b033419332d15f844770177e",
".git/objects/cb/62d57920bcd23fcd1910475551f5bb9f0b56f5": "2e20a71e2057ee1b5b8c41a40e1d0155",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cf/b9932442c38780da8d8a7abef3f58f2d472117": "6c4228395b6d0235195783252402acdb",
".git/objects/d1/43bba74c12a4a1f8b532e7249827830537568f": "f164fe38a44442c9a520e1709b00bcfe",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d7/c55b7c8e6311aeb3e54e42c8b16d91e5113933": "c6be320ef3d7bda48f9c3c623bbc8c3a",
".git/objects/d8/69987c8b498200b729f275716eb36e047d3127": "4333659111ebdbf549602cc84855c0ac",
".git/objects/d8/a7cafbfd3a4669b0be3a2832173a99daced3b6": "65005073a16734ff268deb4397005ed6",
".git/objects/dc/549333fcd65573141bd0e045f6a2fb7c291c28": "3e1e8cfc14d290912ad9a7180e5def1c",
".git/objects/dc/5cbe67c872b1925052a6cad0f6e42d66b0e7db": "bda737088128ebd009f5a3f3fe7dfa19",
".git/objects/dc/d9a3275e85edbab780542aefa5ebda41a278fb": "512726ca703fdb875d03b44c01144fbc",
".git/objects/df/fcfe665aec2f962e9e6089d9b5c5688494f47f": "d8b27b32cf2d24f102a40499d5aef847",
".git/objects/e2/a88be731dc9d212121868eb49c5fb772061ee1": "9a6950a0f41d349932253bcac3a7142f",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/cfaee48c9a7c3342db1ae7fe13d9d782710598": "68bc87bc114cede575a515155f9e0724",
".git/objects/e7/833feabf502cbea38ef6605bdedfdbd368c71f": "a2e686c77d5f55d1bf7551a199a55aa6",
".git/objects/e9/d80217eab46aaa9b7298ed436ae48b2dd1e55f": "3e80ec139b2a4c18cd9041953fbbf133",
".git/objects/eb/0468e611c18d3716121bd43c47a700d698d8e5": "05bdb6160df4697e664ce7871bee5a0c",
".git/objects/f3/298f9a02276cd08f06fc3cedb1f55ddc06171f": "7fa1dfa04f6f3bd9980fe83d6e1c28f2",
".git/objects/f3/e3672bc3ba61ff9227c132612f4f073ed5bdae": "84292ccfd742773aa13439b62194af15",
".git/objects/f7/946ecd9089f87f32f3fdd6ca55417e89261598": "9ae9ad3c7261ad35e00bc2c13cc1af55",
".git/objects/f9/79ecb2ee1d6c1802b0dcbd41139419260b2278": "bef42ed36c507c51833858d24136a0af",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fc/bcd4d01083ef91b2d613024203e3b548f74f9e": "b9e8dde28c458380a23e21a36ac00b58",
".git/objects/fd/5c1fa8d2543005a4c30986bf752d376969799a": "9770857395ed900f140b40e8a759df0e",
".git/objects/fd/fc28ceb7413fb3634ba1cdb8b418e4372a187c": "7ee0037c2c754a4dd108ebe399f25e62",
".git/objects/fe/767fc5563bd083fdbe9595678a63ce46aaacab": "74adc851534ec0e67cd8b48fb0ea7985",
".git/objects/ff/3289cff0846eae2d0e565df2ae80c61b833169": "a2dc71d83f6fe784c464e8e5e0d0a482",
".git/objects/ff/4e01ed63d3cd70d6799f54ee8e7b5dacfdc550": "2bc23a231219a4b695b2062e9a64a212",
".git/refs/heads/main": "adf524bd879d35b8d557be1de7deea86",
".git/refs/remotes/origin/main": "c6429e49b0bfaa88c9df0f415fb2cd35",
"assets/AssetManifest.json": "7f59297abdd2d17844766c701115d69e",
"assets/assets/fonts/OpenSansCondensed.ttf": "3589bddbe338e444d408f4dbc545ca1e",
"assets/assets/fonts/Signatra.ttf": "7b67035b3b8dab514ecf09763597a947",
"assets/Cv/cv-maharo.pdf": "8a6ea080a2104c5f2ef326d4a8b5800f",
"assets/FontManifest.json": "a14e181d8f957bba4b991ec21c74019e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/about.png": "f27b83e574b5cbd13ddb0b834977ab55",
"assets/images/android_db_25px.png": "01031f8226881bbe3f9582860e3e8dcb",
"assets/images/android_os_20px.png": "ae1914eef1bbd361950aac85cf2b0d9e",
"assets/images/bootstrap_25px.png": "490758bad4be61d470cbcb1ac1addee7",
"assets/images/CI_25px.png": "9cf1a3429a94491240a0707431a40f23",
"assets/images/cloud_firestore_25px.png": "10472180b47c582bdfe902f2f81cbf07",
"assets/images/cloud_storage_25px.png": "cea1892167e71ce9a2af03271ad453fa",
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
"assets/images/google_firebase_25px.png": "9c889f009fb9791c88a4d6fec76aea86",
"assets/images/google_maps_25px.png": "11ec3127faa250c9dfaa568df6295a96",
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
"assets/images/kotlin_25px.png": "54b8268cdc01ac906e05a673afc8f08e",
"assets/images/linkedin.png": "182639eb87814f7ab9d37f782e47bc08",
"assets/images/linkedin_50px.png": "86f603e0c2e6196ad3d9602284b4182a",
"assets/images/mysql_20px.png": "910883b04b5bcd509b0f599e3e47603c",
"assets/images/mysql_25px.png": "42a96131e78705c667bd90c9f7b1dbcf",
"assets/images/mysql_db_25px.png": "1985a322a45949c90850521a6b3aae11",
"assets/images/m_90px.png": "0ad49c1f288d0e213dada4a312dbf119",
"assets/images/nodejs_25px.png": "0aaf5a96a0eaa3e436e0099058b50888",
"assets/images/pdc.JPG": "1ddeb1959362575718b31b8f1ffdc44f",
"assets/images/postgresql_25px.png": "e0cd1c573211b8481778bb1b7ba13d7b",
"assets/images/profile-bg.jpg": "c60926157caff05b004ebd70bcff6aac",
"assets/images/profile-bg.png": "f7c254db40e32337e0302a6ed415ce29",
"assets/images/profile.jpg": "137062cacffc2cd9f14f9b51d701477f",
"assets/images/profile.psd": "dace89ebad157ff248388484bed78c28",
"assets/images/profile1-bg.png": "7685da8da10060687c2b7953464b0f2a",
"assets/images/qr_code_20px.png": "545cbe9500f33762ba35e39dec135b53",
"assets/images/react_25px.png": "4c46b21cda9aa35b0854718f4b6b2fb4",
"assets/images/realtime_database_25px.png": "e903bbfaac802221fda11fcaeddc6b00",
"assets/images/skills-bg.jpg": "08229647455d5b9856dd66324abc6e1d",
"assets/images/skype_50px.png": "0849cd6e58f3adb67356e157479a3689",
"assets/images/symfony_25px.png": "5a87b7a8294ee4eb74f4b49d62e0e726",
"assets/images/vue_js_25px.png": "ccfe2960c1f69880f29f19f1b375c929",
"assets/images/web_20px.png": "0614ef7e72bf773106d54befed854e87",
"assets/images/wordpress_25px.png": "9f6088b2a6c8624f42124646e8192049",
"assets/images/work.png": "6b9ce1f1f8981a4d960aaa1fce5879a9",
"assets/images/xml_25px.png": "1ed3f03c8d3b8e141a0eb4d7babd633b",
"assets/NOTICES": "d0a0067ab7d315adbed4bee70b7e20cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/videos/kairosAdmin.mp4": "5f74f3df323274a5a742e8d6008be365",
"assets/videos/kairosClient.mp4": "8ed7ed4b0051a67b0ed6a53e2e1a7ef7",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/gif/bouncing_ball.gif": "bfc63beee7fdd6cd1bf9da778fa64692",
"icons/gif/Snake.gif": "a54a804581e7fc30ed14866c0b780785",
"icons/gif/tube_pressure.gif": "d8aea4c44cc7f03d406e1b5a124a60a7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/m_90px.png": "0ad49c1f288d0e213dada4a312dbf119",
"index.html": "c286c02d5bdd140ff50a25609ec21333",
"/": "c286c02d5bdd140ff50a25609ec21333",
"main.dart.js": "068725a646a6ddd323e2fd2b8e9bbf92",
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
