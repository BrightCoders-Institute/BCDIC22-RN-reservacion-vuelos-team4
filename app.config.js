const { ExpoConfig, ConfigContext } = require('expo/config');
require('dotenv').config();
module.exports = ({ config }) => ({
  ...config,
  expo: {
    name: 'aplicacion-vuelos',
    slug: 'aplicacion-vuelos',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.brightcoders.aplicacion_vuelos',
      versionCode: 1,
      googleServicesFile: process.env.FIREBASE_GOOGLE_SERVICES_JSON,
    },
    web: {
      favicon: './src/assets/favicon.png',
    },
    plugins: [
      '@react-native-firebase/app',
      '@react-native-firebase/auth',
      '@react-native-google-signin/google-signin',
    ],
    extra: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
      },
      googleServices: process.env.FIREBASE_GOOGLE_SERVICES_DATA
        ? JSON.parse(process.env.FIREBASE_GOOGLE_SERVICES_DATA)
        : undefined,
      eas: {
        projectId: '41e77e7a-de05-4308-b645-f2c7d71c06ca',
      },
    },
  },
});
