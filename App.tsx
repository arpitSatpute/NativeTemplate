import {  SafeAreaView, View } from 'react-native';
import React from 'react';
import HomeScreen from './src/Components/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;

// const styles = StyleSheet.create({})