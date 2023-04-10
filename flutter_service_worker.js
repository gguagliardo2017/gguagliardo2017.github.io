'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a5ab776667d2ff7469e844d4b7d4a428",
"index.html": "e7bacfc4702836384d776b06d347e6db",
"/": "acdffd32449014de10587d3f8f40950a",
"main.dart.js": "df9fa64518a5c69604d568356b9f0f60",
"web/macos/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"web/macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"web/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"web/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"web/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"web/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"web/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"web/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"web/macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "5bd47c3ef1d1a261037c87fb3ddb9cfd",
"web/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"web/macos/Runner/DebugProfile.entitlements": "6e164fc6ed6acb30c71fe12e29e49642",
"web/macos/Runner/Base.lproj/MainMenu.xib": "a41bc20792a7e771d7901124cdb8c835",
"web/macos/Runner/MainFlutterWindow.swift": "da69378dd4558360d3f2132c07003750",
"web/macos/Runner/Configs/AppInfo.xcconfig": "8240700e0e70efe0085b03bc3ba9297f",
"web/macos/Runner/Configs/Debug.xcconfig": "0a7555f820f3e4371d88ec1c339d70ef",
"web/macos/Runner/Configs/Release.xcconfig": "d36330778580798c0d9c5a5b71501a0f",
"web/macos/Runner/Configs/Warnings.xcconfig": "e19c2368cf97e5f3eaf8de37cff2b341",
"web/macos/Runner/AppDelegate.swift": "ce90ac27873ef28bc53a7dbc142459e5",
"web/macos/Runner/Info.plist": "b945a5051bb1cca2d906ac0be98b629a",
"web/macos/Runner/Release.entitlements": "e6fde05dec64f9856d3978a4a5e4bf48",
"web/macos/Runner.xcodeproj/project.pbxproj": "8920dea371e4a52b3328937794490a88",
"web/macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"web/macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "d875d1e650abbe1de541c057e7553dbb",
"web/macos/Flutter/Flutter-Debug.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"web/macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"web/macos/Flutter/Flutter-Release.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"web/macos/Flutter/ephemeral/flutter_export_environment.sh": "419e5f51412284786b24652bc008dede",
"web/macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "317bd90c02c7e1ad959b585e6592c27d",
"web/test/widget_test.dart": "cb2dd7128b72a5807c36cba95bd6bbc4",
"web/web/index.html": "acdffd32449014de10587d3f8f40950a",
"web/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/web/manifest.json": "901d86fb8842ec0d66225a542131d689",
"web/pubspec.lock": "814bf1fb4e8180472b720abd3e8385a0",
"web/ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"web/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"web/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"web/ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"web/ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"web/ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"web/ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"web/ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"web/ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"web/ios/Runner/Info.plist": "283c9d8e1b189a1ff499b797ae94ed12",
"web/ios/Runner.xcodeproj/project.pbxproj": "29d2980e785cdbd1fe37ba28f204d42e",
"web/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"web/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "4c619b382ab54d778dbc522ef4b1c6e5",
"web/ios/Flutter/flutter_export_environment.sh": "7d29298087ed620c8ca37268bf9fb94b",
"web/ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"web/ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"web/ios/Flutter/AppFrameworkInfo.plist": "a25bf969a6a92bae1dbdf68f4e6e5b3b",
"web/ios/Flutter/Generated.xcconfig": "0ba74e1bbe3dae62bdfda4380037b45d",
"web/README.md": "ac18482fc28234fc361bcd7776f73e29",
"web/pubspec.yaml": "631ed01360f464be4d15ddc97bce4397",
"web/linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"web/linux/CMakeLists.txt": "ee55d1068840b0d682357a5efe1945d0",
"web/linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"web/linux/my_application.cc": "ac3348888f9b2ecc49e45fe8f62ca1fe",
"web/linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"web/linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"web/linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"web/linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"web/android/app/build.gradle": "210084d50082b5c93e1aaa5cdb6fc1d4",
"web/android/app/src/profile/AndroidManifest.xml": "103e238cc24264b5b82e98b21b7908e0",
"web/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"web/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"web/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"web/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"web/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"web/android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"web/android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"web/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"web/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"web/android/app/src/main/AndroidManifest.xml": "b2d87e203907c61e1f730cf22cf822b8",
"web/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"web/android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"web/android/app/src/debug/AndroidManifest.xml": "103e238cc24264b5b82e98b21b7908e0",
"web/android/local.properties": "cf81aa868c2f541c06c849b562a502ba",
"web/android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"web/android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"web/android/gradle/wrapper/gradle-wrapper.properties": "9954c54e2024747de137abef4cdd309c",
"web/android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"web/android/build.gradle": "f01ed90f9bbc52e242be52732f1f4166",
"web/android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"web/android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"web/android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"web/lib/main.dart": "c394d0f5456ce3bf6b7e861623ccd8e0",
"web/analysis_options.yaml": "90ca05185a2de012cebf6fb9f85f3598",
"web/.dart_tool/package_config.json": "78478ee58f7860642c56b425465adba5",
"web/.dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
"web/.dart_tool/package_config_subset": "e7f4e7aa00d9e8f346f0316167045073",
"web/.dart_tool/version": "4710e5ca557f7a06d9456c8c1a37f82a",
"web/windows/CMakeLists.txt": "3e82f2f30bdb70e405872af11416a743",
"web/windows/runner/flutter_window.cpp": "13f3805c97491b594db63fae59e688aa",
"web/windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"web/windows/runner/utils.cpp": "fb30235ce8e718f4a34b6392d0480a91",
"web/windows/runner/runner.exe.manifest": "19a145783806442d541438903cc9be98",
"web/windows/runner/CMakeLists.txt": "e99a99b5cc82a168fc557eb23b8d5a96",
"web/windows/runner/win32_window.h": "8e991a2d727ffe4d9dbf1b100535ccfd",
"web/windows/runner/win32_window.cpp": "8863adf466a0e3e11e6818ca33805592",
"web/windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"web/windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"web/windows/runner/Runner.rc": "e9da37d227497f66dc7628a7347cc9d9",
"web/windows/runner/main.cpp": "3a8985ef77836fcfa1aaee2376b0394a",
"web/windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"web/windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"web/windows/flutter/CMakeLists.txt": "7fcf749e1f5907bc37e680385971ae1c",
"web/windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"web/windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"web/web.iml": "731a1a3080009db8d4572ef3fb1679c3",
"web/.idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
"web/.idea/libraries/Dart_SDK.xml": "9ac7a759f1f6027d3879dc45d1526529",
"web/.idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
"web/.idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
"web/.idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "998d1784b1b1b8f75974aa50e2c3d846",
"build/ios/Pods.build/Release-iphonesimulator/GTMSessionFetcher.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/FirebaseAuthInterop.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/GoogleSignIn.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/AppAuth.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/google_sign_in_ios.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/firebase_auth.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/FirebaseAppCheckInterop.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/GoogleUtilities.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/Pods-Runner.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/FirebaseAuth.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/FirebaseCoreInternal.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/FirebaseCoreExtension.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/firebase_storage.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/FirebaseStorage.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/GoogleSignIn-GoogleSignIn.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/PromisesObjC.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/GTMAppAuth.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/FirebaseCore.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/Flutter.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/firebase_core.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"build/ios/Pods.build/Release-iphonesimulator/Firebase.build/dgph": "c7f2bf5e039ca40952445acae62d37b3",
"assets/AssetManifest.json": "82f30155458770b563b47179c5b2474b",
"assets/NOTICES": "a5d07d3bd9104c6638eaf9645ad0ddad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/images/apple.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/lib/images/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/lib/images/facebook.png": "1748e43e2aeea1a2a146afed1a1a9aba",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
