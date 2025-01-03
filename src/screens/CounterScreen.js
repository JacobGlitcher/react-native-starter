import { useState } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

const styles = StyleSheet.create({
})

const CounterScreen = () => {
  const [count, setCount] = useState(0)

  return (
    <View>
      <Button title="Increase" onPress={() => setCount((prevState) => prevState + 1)}/>
      <Button title="Decrease" onPress={() => setCount((prevState) => prevState - 1)}/>
      <Text>Current Count: { count }</Text>
    </View>
  )
}

export default CounterScreen
