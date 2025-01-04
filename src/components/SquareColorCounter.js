import {Text, View, Image, StyleSheet, Button} from "react-native"

const styles = StyleSheet.create({
  buttonsWrapper: {
    marginVertical: 15,
  }
})

const SquareColorCounter = ({ btnText, setColor }) => {
  const handleColorChange = (isIncreasing) => {
    setColor((prevState) => {
      const currentColor = prevState[btnText]
      if (isIncreasing && currentColor < 255) {
        return { ...prevState, [btnText]: currentColor + 15 }
      } else if (!isIncreasing && currentColor > 0) {
        return { ...prevState, [btnText]: currentColor - 15 }
      } else {
        return prevState
      }
    })
  }

  return (
    <View style={styles.buttonsWrapper}>
      <Text>{btnText}</Text>
      <Button title={`Increase ${btnText}`} onPress={() => handleColorChange(true)} />
      <Button title={`Decrease ${btnText}`} onPress={() => handleColorChange(false)} />
    </View>
  )
}

export default SquareColorCounter
