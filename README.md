# PetCare 🐾

**Students:** Wendy Lorena Palacios, Andres Felipe Jimenez
**Subject:** Software Construction V / Mobile Development

## Description

PetCare is a mobile application built with React Native CLI to manage pet information. It allows users to view a list of registered pets, check the detail of each one, register new pets with real-time form validation, and access care tips that rotate automatically every 5 seconds.

## Technologies Used

- React Native CLI
- React Navigation (Bottom Tabs + Native Stack)
- React Hooks: useState, useEffect
- StyleSheet

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/wewepa/PetCare.git
cd PetCare
```

2. Install project dependencies:
```bash
npm install
```

3. Install navigation dependencies:
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

4. Run the app:
```bash
# Start Metro
npx react-native start

# In a new terminal, run on Android
npx react-native run-android
```

## Concepts Demonstrated

| Screen | Applied Hooks |
|---|---|
| PetListScreen | useState, useEffect [] |
| PetDetailScreen | route.params, useEffect [dep], useState |
| RegisterPetScreen | useState x5, useEffect [deps], KeyboardAvoidingView |
| TipsScreen | useEffect [] + cleanup, useEffect [dep], useState |
