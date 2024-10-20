import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const DonutDetail = ({ route }) => {
  const { donut } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: donut.image }} style={styles.donutImage} />
      
      <Text style={styles.name}>{donut.name}</Text>
      
      <Text style={styles.description}>{donut.description}</Text>
      
      <Text style={styles.price}>${donut.price}</Text>
      
      <Text style={styles.delivery}>Delivery: {donut.deliveryTime} min</Text>

      <Button title="Add to cart" onPress={() => alert('Added to cart!')} color="#F1B000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  donutImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  delivery: {
    fontSize: 16,
    marginBottom: 20,
    color: '#777',
  },
});

export default DonutDetail;
