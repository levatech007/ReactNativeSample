 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';


 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
     'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });

 type Props = {};
 export default class App extends Component<Props> {
   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>Welcome!</Text>
         <Text style={styles.instructions}>To get started, edit App.js</Text>
         <Text style={styles.instructions}>{instructions}</Text>
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

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#B2FEFA',
   },
   welcome: {
     fontSize: 40,
     textAlign: 'center',
     margin: 10,
   },
   logo: {
     width: 300,
     height: 300,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
 });
