import React, { Component } from 'react'
import {View, Button} from 'react-native'

class ClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View>
        <Button onPress={this.incrementCount} title= {'Count '+JSON.stringify(this.state.count)}></Button>
      </View>
    )
  }
}

export default ClassCounter
