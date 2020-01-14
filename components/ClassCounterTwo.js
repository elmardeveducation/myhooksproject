import React, { Component } from 'react'
import {View, Button} from 'react-native'
class ClassCounterTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <View>
        <Button onPress={this.incrementCount} title =  {'Count '+JSON.stringify(this.state.count)}></Button>
      </View>
    )
  }
}

export default ClassCounterTwo
