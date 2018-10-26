import React, {Component} from 'react';
import {Text, ScrollView, Button, Image} from 'react-native';

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
      <View>
        {
          this.state.quotes.map((qte, idx) => {
            return(<Text style={appStyles.instructions}>{qte.quote}</Text>)
          })
        }
      </View>
    )
  }

}

export default Quotes;
