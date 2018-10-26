import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
 import { appStyles } from './styles';

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      selectedQuote: {
        author: '',
        quote:''
      }
    }
  }

  componentDidMount() {
    fetch('https://catalyst-api.herokuapp.com/quotes.json')
     .then((resp) => resp.json())
     .then((respJson) => {
       const randomIdx = Math.floor(Math.random() * respJson.length)
       const selected = respJson[randomIdx]
       this.setState({
         selectedQuote: {
           author: selected.name,
           quote: selected.quote
         }
       })
     })
     .catch((error) => {
       console.error(error);
     });


  }

  render() {
    return(
      <View style={appStyles.container}>
        <Text style={appStyles.quote} >{ this.state.selectedQuote.quote }</Text>
        <Text style={appStyles.quote} >-</Text>
        <Text style={appStyles.quote} >{ this.state.selectedQuote.author }</Text>
      </View>
    )
  }

}

export default Quotes;
