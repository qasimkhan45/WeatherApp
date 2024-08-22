import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './WeatherCardStyles';

interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description, icon }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temperature}>{temperature.toFixed(1)}°C</Text>
      <Text style={styles.description}>{description}</Text>
      <Image source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} style={styles.icon} />
    </View>
  );
};

export default WeatherCard;
