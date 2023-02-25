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
import React, { useState } from "react";
import { COLORS, images, icons } from "../../constants";
import {
  isEmailValid,
  isPasswordValidField,
  isEmpty,
} from "../../utils/validators";
import FormField from "../../components/FormField/FormField";
import { useToast } from "react-native-toast-notifications";
import { useContext } from "react";
import { CounterContext } from "../../store";
import { useReduxApi } from "../../utils/hooks";
import { createAccount } from "../../storeRedux/features/auth/authSlice";


const Register = ({ navigation }) => {
  const toast = useToast();
  const [value, setValue] = useState({
    password: "",
    phoneNumber: "",
    email: "",
  });

  const globalState = useContext(CounterContext);
  const { state, dispatch } = globalState;

  const { handleAction, loading: pending, error } = useReduxApi();
  const handleForm = (name, text) => {
    setValue({ ...value, [name]: text });
  };

  const handleSignUp = async () => {
    if (isEmpty(value.email)) {
      toast.show("email field cannot be empty", { type: "danger" });
    } else if (!isEmailValid(value.email)) {
      console.log("please enter a valid email address", { type: "danger" });
    } else if (isEmpty(value.phoneNumber)) {
      console.log("please enter a valid phone number", { type: "danger" });
    } else if (isEmpty(value.password)) {
      console.log("please enter password", { type: "danger" });
    } else if (!isPasswordValidField(value.password)) {
      console.log("password must be minimum of 7 characters", {
        type: "danger",
      });
    } else {
      const res = await handleAction(createAccount, {
        ...value,
      });
      if (res.success === true) {
        console.log("sign up successful", {
          type: "success",
        });
         navigation.navigate("Login");
      } else {
        console.log(res?.error, {
          type: "success",
        });
        navigation.navigate("Register");
      }
    }
  };
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
                fontSize: 13,
              }}
            >
              Enter your new account information:
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
              placeholder="Phone"
              secure={false}
              value={value.phoneNumber}
              handleForm={handleForm}
              name="phoneNumber"
              keyboardType="numeric"
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
                <TouchableOpacity onPress={handleSignUp}>
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
