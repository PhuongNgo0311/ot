import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const DonutList = () => {
  const [donuts, setDonuts] = useState([]);
  const [filter, setFilter] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetchDonuts();
  }, [filter]);

  const fetchDonuts = () => {
    let url = 'https://670fd243a85f4164ef2c0f35.mockapi.io/Donuts';

    if (filter) {
      url += `?type=${filter}`; // Có thể tùy chỉnh lọc theo type
    }

    axios.get(url)
      .then(response => {
        setDonuts(response.data);
      })
      .catch(error => console.log(error));
  };

  const handleFilter = (type) => {
    setFilter(type);
  };

  const renderDonut = ({ item }) => (
    <TouchableOpacity 
      style={styles.donutItem} 
      onPress={() => navigation.navigate('DonutDetail', { donut: item })}>
      <Image source={{ uri: item.image }} style={styles.donutImage} />
      <View style={styles.donutInfo}>
        <Text style={styles.donutName}>{item.name}</Text>
        <Text style={styles.donutDescription}>{item.description}</Text>
        <Text style={styles.donutPrice}>${item.price}</Text>
        <Text style={styles.deliveryTime}>Delivery Time: {item.deliveryTime} min</Text>
      </View>
      <Button mode="contained" style={styles.addButton}>+</Button> {/* Add button at the end */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Choice your Best food</Text>
      
      {/* Search Bar */}
      <TextInput 
        style={styles.searchInput} 
        placeholder="Search food" 
        onChangeText={text => setFilter(text)} 
      />
      
      {/* Bộ lọc */}
      <View style={styles.filterContainer}>
        <Button mode="contained" onPress={() => handleFilter('Donut')} style={styles.filterButton}>Donut</Button>
        <Button mode="contained" onPress={() => handleFilter('Pink Donut')} style={styles.filterButton}>Pink Donut</Button>
        <Button mode="contained" onPress={() => handleFilter('Floating Donut')} style={styles.filterButton}>Floating Donut</Button>
      </View>

      {/* Danh sách Donut */}
      {donuts.length > 0 ? (
        <FlatList
          data={donuts}
          renderItem={renderDonut}
          keyExtractor={item => item.id.toString()}
          style={styles.donutList}
        />
      ) : (
        <Text style={styles.noDataText}>No donuts available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },
  subtitle: { 
    fontSize: 20, 
    marginBottom: 20 
  },
  searchInput: { 
    height: 40, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 5, 
    paddingHorizontal: 10, 
    marginBottom: 20 
  },
  filterContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  filterButton: { 
    backgroundColor: '#F1B000' 
  },
  donutItem: { 
    flexDirection: 'row', 
    padding: 15, 
    marginBottom: 10, 
    backgroundColor: '#FCE4EC', // Card background color
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    alignItems: 'center' 
  },
  donutImage: { 
    width: 60, 
    height: 60, 
    marginRight: 10 
  },
  donutInfo: { 
    flex: 1, 
    justifyContent: 'center' 
  },
  donutName: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  donutDescription: { 
    fontSize: 14, 
    color: '#666' 
  },
  donutPrice: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333', 
    marginTop: 5 
  },
  deliveryTime: { 
    fontSize: 14, 
    color: '#333' 
  },
  addButton: { 
    backgroundColor: '#F1B000', 
    marginLeft: 10 
  },
  noDataText: { 
    textAlign: 'center', 
    marginTop: 20, 
    fontSize: 18, 
    color: '#666' 
  },
});

export default DonutList;
