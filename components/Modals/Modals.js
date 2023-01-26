import React, { useState } from "react";
import styles from "./modal.component.styles";
import { Text, View, TextInput, TouchableOpacity, Modal } from "react-native";
import { COLORS, images, icons } from "../../constants";

export const CarModal = ({ modalVisible, setModalVisible }) => {
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
                    Enter
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
