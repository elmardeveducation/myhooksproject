import React, { useState } from 'react'
import {View, Button, Text} from 'react-native'
function HookCounterFour() {
	const [items, setItems] = useState([])

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1
			}
		])
	}

	return (
		<View>
			<Button onPress={addItem} title='Add a number'></Button>
			<View>
				{items.map(item => (
					<Text key={item.id}>{item.value}</Text>
				))}
			</View>
		</View>
	)
}

export default HookCounterFour
