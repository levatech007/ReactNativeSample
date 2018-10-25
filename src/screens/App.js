 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
 import { appStyles } from './styles'


 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
     'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });

 type Props = {};
 class App extends Component<Props> {
   render() {
     return (
       <View style={appStyles.container}>
         <Text style={appStyles.welcome}>Welcome!</Text>
         <Text style={appStyles.instructions}>To get started, edit App.js</Text>
         <Text style={appStyles.instructions}>{instructions}</Text>
         <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
          />
       </View>
     );
   }
 }

 export default App
