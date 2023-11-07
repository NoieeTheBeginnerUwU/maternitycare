export default {
  "expo": {
    "name": "maternitycare",
    "slug": "maternitycare",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/MCare.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/MCare.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff",
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "package": "com.maternitycareapp2.app",
      "googleServicesFile": "./google-services.json", 
      "adaptiveIcon": {
        "foregroundImage": "./assets/MCare.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/Mcare.png"
    },
    
    "extra": {
      "eas": {
        "projectId": "610160f3-c1ef-4072-8bd5-e02c44cb6fd6"
      }
    },   
    "android": {
    "package": "com.maternitycareapp2.app",
    },
    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ]
    ]
  }
}
