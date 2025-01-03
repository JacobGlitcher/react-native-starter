import { Text, View, Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
})

const ImageDetail = ({ title, img, imgScore }) => {
  return (
    <View>
      <Image source={img} />
      <Text>{ title }</Text>
      <Text>Image score - { imgScore }</Text>
    </View>
  )
}

export default ImageDetail
