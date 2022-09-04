import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { COLORS, images, icons } from "../../constants";

const CreateCar = ({ navigation }) => {
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
            style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
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
            <TouchableOpacity>
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
              <View
                style={{
                  width: 350,
                  backgroundColor: COLORS.blue,
                  padding: "4%",
                  borderRadius: 4,
                  marginTop: "5%",
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.white,
                      fontFamily: "IBMPlexMono_700Bold",
                    }}
                    onPress={() => console.log("Create a car")}
                  >
                    + Add New Car
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
});
