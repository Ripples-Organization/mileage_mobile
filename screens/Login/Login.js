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
import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { COLORS, images, icons } from "../../constants";
import FormField from "../../components/FormField/FormField";
import { useReduxApi } from "../../utils/hooks";
import { useToast } from "react-native-toast-notifications";
import { loginUser } from "../../storeRedux/features/auth/authSlice";

import {
  isEmailValid,
  isPasswordValidField,
  isEmpty,
} from "../../utils/validators";

const Login = ({ navigation }) => {
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
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
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
              Log In
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
  const [value, setValue] = useState({ email: "", password: "" });

  const { handleAction, loading: pending, error } = useReduxApi();
  useEffect(() => {
    (async () => {
      let email = await SecureStore.getItemAsync("email");
      let password = await SecureStore.getItemAsync("password");
      setValue({ ...value, email, password });
    })();
  }, []);

  const handleForm = (name, text) => {
    setValue({ ...value, [name]: text });
  };
  const handleLogin = async () => {
    //validate the form fields

    const res = await handleAction(loginUser, {
      ...value,
      type: "email_login",
    });

    console.log(res,'detail')
    if (res.success === true) {
      navigation.navigate("CreateCar");
      await SecureStore.setItemAsync("email", value.email);
      await SecureStore.setItemAsync("password", value.password);
      console.log("login successful", {
        type: "success",
      });
    } else {
      navigation.navigate("OnBoarding");
    }
  };
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
          <SafeAreaView style={{ marginTop: "15%" }}>
            <Text
              style={{
                marginBottom: "3%",
                color: "#FFFFFF",
                fontFamily: "IBMPlexMono_700Bold",
              }}
            >
              Enter your login information:
            </Text>
            <FormField
              marginVertical={10}
              placeholder="mail@gmail.com"
              secure={false}
              value={value.email}
              handleForm={handleForm}
              name="email"
            />
            <FormField
              marginVertical={10}
              placeholder="password"
              secure={true}
              value={value.password}
              handleForm={handleForm}
              name="password"
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
                <TouchableOpacity onPress={() => handleLogin()}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.black,
                      fontFamily: "IBMPlexMono_700Bold",
                    }}
                  >
                    Log In
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: "3%",
                    color: "#FFFFFF",
                    textDecorationLine: "underline",
                    fontFamily: "IBMPlexMono_700Bold",
                  }}
                >
                  Forgot your password?
                </Text>
              </TouchableOpacity>
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

export default Login;

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
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
