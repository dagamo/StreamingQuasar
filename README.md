This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# IOS APP

<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
  <img src="src/assets/images/ios1.png" height="400">
  <img src="src/assets/images/ios2.png" height="400">
  <img src="src/assets/images/ios3.png" height="400">
</div>

# Android APP

<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
  <img src="src/assets/images/android1.png" height="400">
  <img src="src/assets/images/android2.png" height="400">
  <img src="src/assets/images/android3.png" height="400">
</div>

## Before to Start

Before to run the project, review your enviroment whit this.

1. You need are using Node Version >=20.15.1
2. Android Studio installed with AVD
3. Xcode installed version >= 16.1

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install Modules

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
cd ios && pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.
