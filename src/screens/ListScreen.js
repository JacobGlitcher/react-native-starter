import { Text, StyleSheet, View, FlatList } from 'react-native'

const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
    fontSize: 20,
  }
})

const ListScreen = () => {
  const friends = [
    {name: 'Alen', age: '12', id: '1'},
    {name: 'Jane', age: '34', id: '2'},
    {name: 'Roman', age: '52', id: '3'},
    {name: 'Alice', age: '11', id: '4'},
    {name: 'Felix', age: '5', id: '5'},
    {name: 'Johan', age: '28', id: '6'},
    {name: 'Lucy', age: '22', id: '7'},
  ]

  return (
    <FlatList
      data={friends}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item.name} - Age {item.age}</Text>
      }}
    />
  )
}

export default ListScreen