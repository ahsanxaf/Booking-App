import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Pressable,
  TextInput,
  Button,
  Image
} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';  
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  console.log(selectedDates)
  const [rooms, setRooms] = useState(1);
  const [adults, setadults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking.com',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent'
      },
      headerRight: () => (
        <Ionicons name="notifications-outline" size={24} color="white" style={{marginRight: 12}} />
      )
    })
  }, [])
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  console.log(route.params)

  return (
    <>
      <View>
        <Header/>

        <ScrollView>
          <View style={styles.inputsContainer}>
            {/* destination */}
            <Pressable style={styles.inputsStyle} onPress={() => navigation.navigate('Search')}>
              <Feather name="search" size={24} color="black" />
              <TextInput placeholder={route?.params ? route?.params.input : 'Enter Your Destination'}/>
            </Pressable>

            {/* selected dates */}
            <Pressable style={styles.inputsStyle}>
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Select Your Dates"}
                mode={"range"}
              />
            </Pressable>

            {/* rooms and guests */}
            <Pressable style={styles.inputsStyle} onPress={() => setModalVisibile(!modalVisibile)}>
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput 
                placeholder={`${rooms} room - ${adults} adults - ${children} children`}
                placeholderTextColor='red'
              />
            </Pressable>

            {/* search button */}
            <Pressable style={styles.buttonStyle}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 15, fontWeight: '500'}}>Search</Text>
            </Pressable>
          </View>

          <Text style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}>Travel more spend less</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable style={styles.card}>
              <Text style={styles.cardText}>Genius</Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>You are at genius level one in our loyalty program</Text>
            </Pressable>

            <Pressable style={[styles.card, {borderColor: '#E0E0E0', backgroundColor: 'white', borderWidth: 2}]}>
              <Text style={[styles.cardText, {color: '#000000'}]}>15% Discounts</Text>
              <Text style={{fontSize: 15, fontWeight: "500" }}>Complete 5 stays to unlock level 2</Text>
            </Pressable>

            <Pressable style={[styles.card, {borderColor: '#E0E0E0', backgroundColor: 'white', borderWidth: 2}]}>
              <Text style={[styles.cardText, {color: "#000000"}]}>10% Discounts</Text>
              <Text style={{fontSize: 15, fontWeight: "500" }}>Enjoy discount at participating at properties worldwide</Text>
            </Pressable>
          </ScrollView>

          <Pressable style={styles.bottomImage}>
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
            />
          </Pressable>

        </ScrollView>

      </View>

      <BottomModal 
        swipeThreshold={200} 
        onBackdropPress={() => setModalVisibile(!modalVisibile)} 
        swipeDirection={['up', 'down']}
        footer={
        <ModalFooter>
          <ModalButton 
            text='Apply' 
            style={{marginBottom: 20, color: 'white', backgroundColor: '#003580' }} 
            onPress={() => setModalVisibile(!modalVisibile)}/>
        </ModalFooter>
        }
        modalTitle={
          <ModalTitle title='Select rooms and guests'/>}
          modalAnimation={new SlideAnimation({
            slideFrom: 'bottom'
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{width: '100%', height: 310}}>
          <View style={styles.modalContentContainer}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Rooms</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Pressable style={styles.quantityButtons} onPress={() => setRooms(Math.max(1, rooms-1))}>
                <Text style={styles.quantityButtonsText}>-</Text>
              </Pressable>

              <Pressable>
                <Text style={styles.roomsText}>{rooms}</Text>
              </Pressable>

              <Pressable style={styles.quantityButtons} onPress={() => setRooms((c) => c+1)}>
                <Text style={styles.quantityButtonsText}>+</Text>
              </Pressable>
            </Pressable>
          </View>

          <View style={styles.modalContentContainer}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Adults</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Pressable style={styles.quantityButtons} onPress={() => setadults(Math.max(1, adults-1))}>
                <Text style={styles.quantityButtonsText}>-</Text>
              </Pressable>

              <Pressable>
                <Text style={styles.roomsText}>{adults}</Text>
              </Pressable>

              <Pressable style={styles.quantityButtons} onPress={() => setadults((c) => c+1)}>
                <Text style={styles.quantityButtonsText}>+</Text>
              </Pressable>
            </Pressable>
          </View>

          <View style={styles.modalContentContainer}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Children</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Pressable style={styles.quantityButtons} onPress={() => setChildren(Math.max(0, children-1))}>
                <Text style={styles.quantityButtonsText}>-</Text>
              </Pressable>

              <Pressable>
                <Text style={styles.roomsText}>{children}</Text>
              </Pressable>

              <Pressable style={styles.quantityButtons} onPress={() => setChildren((c) => c+1)}>
                <Text style={styles.quantityButtonsText}>+</Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  inputsContainer:{
    margin: 20,
    borderColor: "#FFC72C",
    borderWidth: 3,
    borderRadius: 6,
    
  },
  inputsStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 1,
    paddingVertical: 12,
  },
  buttonStyle: {
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 1,
    paddingVertical: 12,
    backgroundColor: '#2a52be'
  },
  modalContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  quantityButtons: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: "#BEBEBE",
    backgroundColor: "#E0E0E0",
  },
  quantityButtonsText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 6,
  },
  roomsText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 6,
  },
card: {
  width: 200,
  height: 150,
  marginTop: 10,
  backgroundColor: "#003580",
  borderRadius: 10,
  padding: 20,
  marginHorizontal: 20,
},
cardText: {
  color: "white",
  fontSize: 15,
  fontWeight: "bold",
  marginVertical: 7,
},
bottomImage: {
  marginTop: 40,
  justifyContent: "center",
  alignItems: "center",
}
})