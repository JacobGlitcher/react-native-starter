import { useState } from "react"
import { View, Text, Button, FlatList, StyleSheet } from "react-native"
import SquareColorCounter from "../components/SquareColorCounter";

const styles = StyleSheet.create({
  squareWrapper: {
    width: 100,
    height: 100,
    marginBottom: 12,
    borderRadius: 6,
  }
})

const SquareScreen = () => {
  const rgbColorSet = ['red', 'green', 'blue']
  const [rgbColor, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  })

  return (
    <View>
      <FlatList
        data={rgbColorSet}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <SquareColorCounter btnText={item} setColor={setColor}/>
        }}
      />

      <View style={{...styles.squareWrapper, backgroundColor: `rgb(${Object.values(rgbColor)})` }}/>
    </View>
  )
}

export default SquareScreen
