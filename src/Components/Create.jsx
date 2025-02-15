import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Create = ({ data, setData }) => {

    const [quantity, setQuantity] = useState('')
    const [name, setName] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState('')

    const addItemHandler = () => {
        const newItem = {
            id: Date.now().toString(),
            name: name,
            quantity: quantity,
        }
        setData([...data, newItem])
        setName('')
        setQuantity('')
        setIsEdit(false)
    }

    const editEventHandler = (item) => {
        setName(item.name)
        setQuantity(item.quantity.toString())
        setIsEdit(true)
        setEditId(item.id)
    }

    const updateItemHandler = () => {
        setData(data.map((item) => (
            item.id === editId ? { ...item, name: name, quantity: quantity } : item
        )))
        setName('')
        setQuantity('')
        setIsEdit(false)
        setEditId('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Item Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Stock Quantity"
                value={quantity}
                onChangeText={(text) => setQuantity(text)}
                keyboardType="numeric"
            />

            <Pressable style={styles.button} onPress={() => isEdit ? updateItemHandler() : addItemHandler()}>
                <Text style={styles.buttonText}>{isEdit ? "Edit Item" : "Add Item"}</Text>
            </Pressable>

            <View marginTop={20}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>All Items in Stock</Text>
                </View>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.itemContainer,
                        { backgroundColor: item.quantity < 20 ? '#FFCCCC' : '#D7F6BF' }]}>
                            <Text style={styles.itemsText}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', gap: 30 }}>
                                <Text style={styles.itemsText}>{item.quantity}</Text>
                                <Pressable onPress={() => editEventHandler(item)}>
                                    <Text style={{ color: 'blue' }}>Edit</Text>
                                </Pressable>
                                <Pressable onPress={() => setData(data.filter((i) => i.id !== item.id))}>
                                    <Text style={{ color: 'red' }}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{ gap: 10 }}
                />
            </View>
        </View>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: '4%',
        backgroundColor: '#000',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderColor: '#D7F6BF',
    },
    button: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: 'green',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#525524',
        width: "100%",
        alignItems: 'center',
    },
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
    },
    headingText: {
        color: "white",
        fontSize: 14,
        fontWeight: "500",
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