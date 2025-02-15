import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={[styles.itemContainer, 
            {backgroundColor: item.quantity < 20 ? '#FFCCCC' : '#D7F6BF'}]}>
            <Text style={styles.itemsText}>{item.name}</Text>
            <Text style={styles.itemsText}>{item.quantity}</Text>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500"
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderRadius: 5,
    
  },
  itemsText: {
    fontSize: 15,
  }
})