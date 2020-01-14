import React, { useState } from 'react'
import {View, Button} from 'react-native'
function HookCounterTwo() {
	const initialCount = 0
	const [count, setCount] = useState(initialCount)
	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount(prevCount => prevCount + 1)
		}
	}
	return (
		<View>
			Count: {count}
			<Button onPress={() => setCount(initialCount)}>Reset</Button>
			<Button onPress={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</Button>
			<Button onPress={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</Button>
			<Button onPress={incrementFive}>Increment 5</Button>
		</View>
	)
}

export default HookCounterTwo
