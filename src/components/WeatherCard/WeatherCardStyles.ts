import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 40,
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    color: '#555',
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default styles;