import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ActivityIndicator } from 'react-native';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { fetchWeather } from '../../api/weatherApi';
import { useQuery } from 'react-query';
import { FetchError } from '../../api/weatherApi';
import styles from './HomeScreen.styles';
const HomeScreen: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const { data, error, isLoading, refetch } = useQuery(
    ['weather', city],
    () => fetchWeather(city),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
  const handleSearch = async () => {
    if (city.trim()) { 
      refetch();
    }
  };

  const errorMessage = (error as FetchError)?.message || 'An error occurred';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={handleSearch} />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{errorMessage}</Text>}
      {data && (
        <WeatherCard
          city={data.name}
          temperature={data.main.temp}
          description={data.weather[0].description}
          icon={data.weather[0].icon}
        />
      )}
    </View>
  );
};

export default HomeScreen;




