import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { pixelNormalize } from '../components/Normalize';

const ShowMore = () => {
  
  const route = useRoute();
  // console.log('eeeeaaaa', route.params)
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Pressable style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}>
            {route.params.photo.map((photo) => (
              <View style={{ margin: 6 }}>
                <Image
                  style={{
                    width: 100,
                    height: pixelNormalize(80),
                    borderRadius: pixelNormalize(4),
                  }}
                  source={{ uri: photo.image }}
                />
              </View>
            ))}

        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ShowMore

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
})