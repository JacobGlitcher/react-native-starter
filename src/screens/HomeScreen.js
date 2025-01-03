import { Text, View, Button, FlatList, StyleSheet } from "react-native"
import ImageDetail from "../components/ImageDetail";

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

const HomeScreen = ({ navigation }) => {
  const navigationOptions = [
    { title: 'Go To Components Demo', component: 'Components', id: '1' },
    { title: 'Go To List Demo', component: 'List', id: '2' },
    { title: 'Go To Image Demo', component: 'Image', id: '3' },
  ]

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <FlatList
        data={navigationOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Button
              title={ item.title }
              onPress={() => navigation.navigate(item.component)}
            />
          )
        }}
      />

    </View>
  )
}

export default HomeScreen
