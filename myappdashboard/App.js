import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const categories = [
  { id: 1, name: "Car",
   image: "https://plus.unsplash.com/premium_vector-1682304611693-08c6729f6e4a?w=900&auto=format&fit=crop&q=60" },
  { id: 2, name: "Bike", 
  image: "https://plus.unsplash.com/premium_vector-1682269680501-f01d18d51f33?q=80&w=2960&auto=format&fit=crop" },
  { id: 3, name: "Cycle", 
  image: "https://plus.unsplash.com/premium_vector-1720166926095-f2428cd7dd15?w=900&auto=format&fit=crop&q=60" },
];

const bestDeals = [
  { id: 1, name: "Toyota Corolla", discount: 20 },
  { id: 2, name: "Honda Civic", discount: 15 },
  { id: 3, name: "Yamaha Bike", discount: 10 },
];

const bestPicks = [
  { id: 1, name: "BYD" },
  { id: 2, name: "Suzuki Swift" },
  { id: 3, name: "KTM Duke" },
];

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      

      <View style={styles.header}>
        <Text style={styles.logo}>RentIT</Text>
        <MaterialIcons name="menu" size={28} color="#fff" />
      </View>

    
      <View style={styles.searchBox}>
        <MaterialIcons name="search" size={22} color="#999" />
        <TextInput
          placeholder="Search vehicles..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5 }}>
        {categories.map(catagory => (
          <TouchableOpacity key={catagory.id} style={styles.categoryCard}>
            <Image source={{ uri:catagory.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{catagory.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    
      <Text style={styles.sectionTitle}>Best Deals</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5 }}>
        {bestDeals.map(item => (
          <View key={item.id} style={styles.dealCard}>
            <Text style={styles.dealName}>{item.name}</Text>
            <Text style={styles.discountText}>{item.discount}% OFF</Text>
            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

  
      <Text style={styles.sectionTitle}>Best Picks</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5 }} >
        {bestPicks.map(item => (
          <View key={item.id} style={styles.pickCard}>
            <Text style={styles.pickName}>{item.name}</Text>
            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5, paddingVertical: 10 }}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>My Favourites</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "whitesmoke",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: "dodgerblue",
    borderRadius: 10,
  },
  logo: { fontSize: 28, fontWeight: "bold", color: "white" },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchInput: { marginLeft: 8, flex: 1, fontSize: 16, color: "black" },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  categoryCard: {
    alignItems: "center",
    marginRight: 15,
    marginVertical: 5,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  categoryText: { fontSize: 14, fontWeight: "500" },
  dealCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 12,
    marginRight: 15,
    width: 150,
    alignItems: "center",
  },
  dealName: { fontSize: 16, fontWeight: "bold", marginTop: 8, textAlign: "center" },
  discountText: { color: "red", fontWeight: "bold", marginTop: 4 },
  pickCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 12,
    marginRight: 15,
    width: 150,
    alignItems: "center",
  },
  pickName: { fontSize: 16, fontWeight: "bold", marginTop: 8, textAlign: "center" },
  bookBtn: {
    backgroundColor: "dodgerblue",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  bookText: { color: "white", fontWeight: "bold" },
  actionBtn: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: "center",
    width: 90,
    marginRight: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  actionText: { fontSize: 12, fontWeight: "500", marginTop: 5, textAlign: "center" },
});
