import { useState } from "react"
import { View, Text, Button, FlatList, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  colorBoxWrapper: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 85,
  },
  colorBox: {
    width: 100,
    height: 100,
    marginBottom: 12,
    borderRadius: 6,
  }
})

const ColorScreen = () => {
  const [colors, setColors] = useState([])

  const getRandomNumber = () => {
    const max = 255

    return Math.floor(Math.random() * (max + 1))
  }

  const setRandomColor = () => {
    const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`

    setColors((prevState) => [...prevState, randomColor])
  }

  return (
    <View>
      <Button
        style={styles.colorBtn}
        title="Add A Color"
        onPress={setRandomColor}
      />
      <View style={styles.colorBoxWrapper}>
        <FlatList
          data={colors}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <View style={{...styles.colorBox, backgroundColor: item }} />
          }}
        />
      </View>
    </View>
  )
}

export default ColorScreen
