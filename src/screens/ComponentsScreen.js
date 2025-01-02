import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  greeting: {
    fontSize: 45,
  },
  greetingSubHeader: {
    fontSize: 20,
  }
})

const ComponentsScreen = () => {
  const userName = 'Jacob'

  return (
      <View>
        <Text style={styles.greeting}>Getting started with react native!</Text>
        <Text style={styles.greetingSubHeader}>My name is {userName}</Text>
      </View>
    )
}

export default ComponentsScreen