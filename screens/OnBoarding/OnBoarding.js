import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";

const OnBoarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={[{ flex: 1 }, styles.elementsContainer]}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 2 }}></View>
        <View
          style={{
            flex: 3,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 34,
                fontFamily: "IBMPlexMono_700Bold_Italic",
                color: COLORS.white,
              }}
            >
              Simple
              <Text style={{ fontFamily: 'IBMPlexMono_400Regular' }}>Miles</Text>
            </Text>
            <Text style={styles.text}>by Team Ripples</Text>
          </View>
          <View>
            <View
              style={{
                width: 350,
                backgroundColor: "#fff",
                padding: "4%",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                marginBottom: "1%",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: COLORS.black,
                    fontFamily: 'IBMPlexMono_700Bold',
                  }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 350,
                backgroundColor: "#fff",
                padding: "4%",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                marginBottom: "1%",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: COLORS.black,
                    fontFamily: 'IBMPlexMono_700Bold',
                  }}
                  onPress={()=> navigation.navigate('Register')}
                >
                  Create new account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  text: {
    color: COLORS.white,
    fontFamily: 'IBMPlexMono_300Light_Italic',
    fontSize:20,
    textAlign:'center',
    marginTop:10
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
