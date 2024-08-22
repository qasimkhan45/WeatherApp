# WeatherApp

A simple weather app built with React Native and TypeScript. The app allows users to search for a city and view the current weather conditions for that location.

## Features

- Search for weather by city name.
- Display current temperature, weather description, and an icon representing the weather condition.
- Error handling for invalid city names and API failures.

## Technologies Used

- **React Native**: For building the mobile app.
- **TypeScript**: For type safety and improved development experience.
- **React Query**: For data fetching and caching.
- **OpenWeatherMap API**: For weather data.

## Project Setup

### Prerequisites

- Node.js (LTS version recommended)
- Yarn or npm
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/qasimkhan45/WeatherApp.git

   ```

2. **Navigate to the project directory**

   cd WeatherApp

3. **Navigate to the project directory**

   npm install
   cd ios
   pod install

4. **Run the app**

   android: npm run android
   ios: npm run ios

## Folder Structure

    ### src/

        - api/: Contains API-related files, such as the weather fetching function.
        - components/: Contains reusable components like WeatherCard.
        - screens/: Contains screen components like HomeScreen.

## Code Quality

     - TypeScript: The project is written in TypeScript for better type safety.
     - React Query: Used for managing data fetching and caching.
     - Error Handling: Proper error handling is implemented for API requests.
