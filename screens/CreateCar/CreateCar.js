import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { COLORS, images, icons } from "../../constants";

const CreateCar = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showUserModal, setUserModal] = useState(false);

  function renderHeader() {
    return (
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 5,
          right: 12,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.2 }}></View>
          <TouchableOpacity
            style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              console.log("Focus on pressed");
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: COLORS.black,
                fontFamily: "IBMPlexMono_700Bold",
                marginTop: "5%",
              }}
            >
              Cars
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 0.1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            
          >
            <TouchableOpacity onPress={() => setUserModal(!showUserModal)}>
              <Image
                source={icons.select}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const carModal = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <Text
                    style={{
                      color: COLORS.black,
                      marginBottom: 21,
                      fontFamily: "IBMPlexMono_700Bold",
                    }}
                  >
                    Add a new car
                  </Text>
                  <TextInput
                    style={styles.input1}
                    onChangeText=""
                    placeholder="New car name"
                  />
                </View>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "81.6%",
                  zIndex: 22222,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    padding: "4%",
                    shadowColor: COLORS.blue,
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                    borderBottomLeftRadius: 20,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: COLORS.black,
                        fontFamily: "IBMPlexMono_700Bold",
                      }}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.blue,
                    padding: "4%",
                    borderBottomRightRadius: 20,
                  }}
                >
                  <TouchableOpacity>
                    <Text
                      style={{
                        textAlign: "center",
                        color: COLORS.white,
                        fontFamily: "IBMPlexMono_700Bold",
                        borderColor: COLORS.white,
                      }}
                    >
                      Create
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const userModal = () => {
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={showUserModal} >
          <View
            style={{
              width: 250,
              height: 100,
              backgroundColor: COLORS.white,
              position: "absolute",
              left: "28%",
              marginTop: "28%",
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            <View style={{ marginTop: "5%" }}>
              <View
                style={{
                  padding: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: "black",
                  borderBottomWidth: "solid",
                }}
              >
                <Text>Export all cars to CSV</Text>
              </View>

              <Text style={{ padding: 5, marginTop: 2 }}>Account</Text>
              <Text style={{ padding: 5 }}>Log out</Text>
            </View>

            <TouchableOpacity onPress={() => setUserModal(!showUserModal)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[{ flex: 1 }, styles.elementsContainer]}>
        <View style={{ flex: 1 }}>{renderHeader()}</View>
        <View
          style={{
            flex: 0.1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></View>
        <View
          style={{
            flex: 6,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SafeAreaView>
            <View>
              
            </View>
            <View>
              <View
                style={{
                  width: 350,
                  backgroundColor: COLORS.blue,
                  padding: "4%",
                  borderRadius: 4,
                  marginTop: "5%",
                }}
              >
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.white,
                      fontFamily: "IBMPlexMono_700Bold",
                    }}
                  >
                    + Add New Car
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {carModal()}
            {userModal()}
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default CreateCar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.white,
  },
  title: {
    fontSize: 35,
    color: COLORS.white,
  },
  headerStyle: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 24,
  },
  elementsContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView: {
    backgroundColor: "#F2F2F2",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
  },
  input1: {
    height: 50,
    width: 278,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
  },
});
