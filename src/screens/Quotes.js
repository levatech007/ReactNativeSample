import React, {Component} from 'react';
import {Text, ScrollView, Button, Image} from 'react-native';
 import { appStyles } from './styles';

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    fetch('https://catalyst-api.herokuapp.com/quotes.json')
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         quotes: responseJson
       })
     })
     .catch((error) => {
       console.error(error);
     });
  }

  render() {
    return(
      <ScrollView>
        {
          this.state.quotes.map((qte, idx) => {
            return(<Text style={appStyles.instructions}>{qte.quote}</Text>)
          })
        }
      </ScrollView>
    )
  }

}

export default Quotes;
