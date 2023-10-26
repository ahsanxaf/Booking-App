import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const PropertyCart = ({
    rooms,
    children,
    property,
    adults,
    selectedDates,
    availableRooms}) => {

        const {width, height} = Dimensions.get('window');
        console.log('Image:',property.image)

  return (
    <View>
        <Pressable style={styles.outerPressable}>
            <View>
                <Image style={{height: height/3.45, width: width-280}} source={{uri: property.image}}/>
            </View>

            <View style={{padding: 10}}>
                <View style={styles.viewPropertyName}>
                    <Text style={{width: 200}}>{property.name}</Text>
                    <AntDesign name="hearto" size={24} color="red" />
                </View>

                <View style={styles.ratings}>
                    <MaterialIcons name="stars" size={22} color="green" />
                    <Text>{property.rating}</Text>
                    <View
                        style={{
                            backgroundColor: "#6CB4EE",
                            paddingVertical: 3,
                            borderRadius: 5,
                            width: 100,
                        }}
                    >
                        <Text
                            style={{ textAlign: "center", color: "white", fontSize: 15 }}
                        >
                            Genius Level
                        </Text>
                    </View>
                </View>

                <Text style={styles.address}>{property.address.length > 50 ? property.address.substr(0, 50) : property.address}</Text>
                
                <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
                    Price for 1 Night and {adults} adults
                </Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.oldPrice}>{property.oldPrice * adults}</Text>
                    <Text style={{ fontSize: 18 }}>Rs. {property.newPrice * adults}</Text>
                </View>

                <View style={{ marginTop: 6 }}>
                    <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>
                        Hotel Room : 1 bed
                    </Text>
                </View>

                <View style={styles.dealsContainer}>
                    <Text style={{textAlign:"center",color:"white"}}>Limited Time deal</Text>
                </View>            
            </View>
        </Pressable>
    </View>
  )
}

export default PropertyCart

const styles = StyleSheet.create({
    outerPressable: {
        margin: 15, flexDirection: "row", backgroundColor: "white"
    },
    viewPropertyName: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    ratings: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 7,
    },
    address: {
        width: 210,
        marginTop: 6,
        color: "gray",
        fontWeight: "bold",
    },
    priceContainer: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    oldPrice: {
        color: "red",
        fontSize: 18,
        textDecorationLine: "line-through",
    },
    dealsContainer: {
        backgroundColor: "#6082B6",
        paddingVertical: 2,
        marginTop:2,
        borderRadius: 5,
        width: 150,
        paddingHorizontal:3,
    }
})