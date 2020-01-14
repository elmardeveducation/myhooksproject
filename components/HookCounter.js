import React, {useState} from 'react'
import {View, Button} from 'react-native'
function HookCounter() {

  const [count, setCount] = useState(0)

  return (
    <View>
      <Button onPress={() => setCount(count + 1)} title={JSON.stringify('Count'+ count)} ></Button>
    </View>
  )
}

export default HookCounter
