import {Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  )
}

export default HomeScreen
