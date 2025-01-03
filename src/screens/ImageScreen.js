import { Text, View, FlatList, StyleSheet } from "react-native"

import ImageDetail from "../components/ImageDetail"
import BeachImg from '../../assets/beach.jpg'
import ForestImg from '../../assets/forest.jpg'
import MountainImg from '../../assets/mountain.jpg'

const styles = StyleSheet.create({
})

const ImageScreen = () => {
  const images = [
    {title: 'Forest', img: ForestImg, imgScore: '9', id: '1'},
    {title: 'Beach', img: BeachImg, imgScore: '7', id: '2'},
    {title: 'Mountain', img: MountainImg, imgScore: '4', id: '3'},
  ]

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ImageDetail
            title={item.title}
            img={item.img}
            imgScore={item.imgScore}
          />
        }}
      />
    </View>
  )
}

export default ImageScreen
