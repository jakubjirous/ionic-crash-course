# Ionic Crash Course

[Ionic academy crash course](https://ionicacademy.com/getting-started-with-ionic-4/) in Ionic &amp; Angular &amp; Capacitor

## Commands:

### Ionic Lab

This will bring up a slightly different view that already shows your potential app inside a nice app container.
```
ionic lab
```

### Ionic Sync

- Perform an Ionic build, which compiles web assets
- Copy web assets to Capacitor native platform(s)
- Update Capacitor native platform(s) and dependencies
- Install any discovered Capacitor or Cordova plugins

```
ionic sync
```

### New Platform

- Install the Capacitor platform package
- Copy the native platform template into your project

Android

```
ionic cap add android
```

iOS

```
ionic cap add ios
```

### Build 

- Perform ionic build
- Copy web assets into the specified native platform
- Open the IDE for your native project (Xcode for iOS, Android Studio for Android)

```
ionic cap build
```

### Angular Generator

Pages

```
ionic g page pages/films
ionic g page pages/people
ionic g page pages/planets
```

Services

```
ionic g service services/api
ionic g service services/utils
```


### Plugins

Email Composer - Capacitor

```
npm install cordova-plugin-email-composer
npm install @ionic-native/email-composer
ionic cap sync
```

## Links:

- [GIT Ignore Generator](https://www.toptal.com/developers/gitignore)
- [Start Wars API](https://swapi.dev/)
- [Email Composer](https://ionicframework.com/docs/native/email-composer)
