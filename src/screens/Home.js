 import React, {Component} from 'react';
 import {Platform, Text, View, Button, Image} from 'react-native';
 import FadeInView from 'react-native-fade-in-view';
 import { appStyles } from './styles';
 import Logo from './test-logo.png';

 // const instructions = Platform.select({
 //   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
 //   android:
 //     'Double tap R on your keyboard to reload,\n' +
 //     'Shake or press menu button for dev menu',
 // });

 type Props = {};
 class Home extends Component<Props> {
   constructor() {
     super();
     this.state = {
       instructions: ["My first React Native app.", "Just testing features.", "That's it!"],
       showLogo: true,
     }
     this.showLogo = this.showLogo.bind(this);
 }

 showLogo() {
   this.setState({
     showLogo: !this.state.showLogo
   });
 }

   render() {
     return (
       <View style={appStyles.container}>
        <FadeInView duration={4000}>
         <Text style={appStyles.welcome}>Welcome!</Text>
         <Text style={appStyles.welcome}>{}</Text>
         { this.state.showLogo ? <Image source={ Logo }/> : null }
         {
           this.state.instructions.map((instr, idx) => {
             return(<Text key={idx}style={appStyles.instructions}>{instr}</Text>)
           })
         }
         <Button onPress={this.showLogo} title={this.state.showLogo ? "Make logo dissappear" : "Make logo appear"}/>
         <Button onPress={() => this.props.navigation.navigate('Quotes')} title="See some quotes!"/>
         </FadeInView>
       </View>
     );
   }
 }

 export default Home
