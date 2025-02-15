import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import Create from './Create'

const HomeScreen = () => {

    const [view, setView] = useState(0)
    const [data, setData] = useState([
                {id: '1', name: 'Wheat', quantity: 10},
                {id: '2', name: 'Rice', quantity: 20},
                {id: '3', name: 'Flour', quantity: 30},
                {id: '4', name: 'Peanuts', quantity: 40},
                {id: '5', name: 'Almonds', quantity: 50},
            ])
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => setView(0)}>
                <Text style={styles.buttonText}>All Items</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => setView(1)}>
                <Text style={styles.buttonText}>Low Stock</Text>
            </Pressable>
            <Pressable style={styles.button3} onPress={() => setView(2)}>
                <Text style={styles.buttonText}>Create</Text>
            </Pressable>
        </View>

        {view === 0 && <AllItems data={data} />}
        {view === 1 && <AllItems data = {data.filter((item)=> item.quantity<20)}/>}
        {view === 2 && <Create data={data} setData={setData}/>}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: '4%',
        backgroundColor: '#000',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: 'green',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#525524',
        width: 100,
        alignItems: 'center',
    },
    button2: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#525524',
        width: 100,
        alignItems: 'center',
    },
    button3: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: '#555555',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#525524',
        width: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
    }
})