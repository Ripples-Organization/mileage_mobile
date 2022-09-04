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

const Register = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 5,
          right: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                navigation.navigate("OnBoarding");
              }}
            >
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flex: 3,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            onPress={() => {
              console.log("Focus on pressed");
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: COLORS.white,
                fontFamily: "IBMPlexMono_700Bold",
              }}
            >
              Create New Account
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          ></View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[{ flex: 1 }, styles.elementsContainer]}>
        <View style={{ flex: 1 }}>{renderHeader()}</View>
        <View style={{ flex: 2 }}></View>
        <View
          style={{
            flex: 3,
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <SafeAreaView style={{ marginTop: "10%" }}>
            <Text
              style={{
                marginBottom: "4%",
                color: "#FFFFFF",
                fontFamily: "IBMPlexMono_700Bold",
                fontSize:13
              }}
            >
              Enter your new account information:
            </Text>
            <TextInput
              style={styles.input1}
              onChangeText=""
              placeholder="Email"
            />
            <TextInput
              style={styles.input2}
              onChangeText=""
              placeholder="Phone"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input3}
              onChangeText=""
              placeholder="Password"
              keyboardType="numeric"
            />
            <View>
              <View
                style={{
                  width: 350,
                  backgroundColor: COLORS.white,
                  padding: "4%",
                  borderRadius: 4,
                  marginTop: "5%",
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.black,
                      fontFamily: "IBMPlexMono_700Bold",
                    }}
                  >
                    Create new account
                  </Text>
                </TouchableOpacity>
              </View>
       
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "6%",
                  fontFamily: "IBMPlexMono_700Bold",
                  color: "#FFFFFF",
                }}
              >
                or
              </Text>
              <TouchableOpacity>
                <Image
                  source={images.googleAuth}
                  style={{
                    height: 100,
                    width: 200,
                    marginLeft: "20%",
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
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
  input1: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  input2: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  input3: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
