import { StyleSheet } from "react-native";
import { COLORS, images, icons } from "../../constants";

export default StyleSheet.create({
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
      width:"100%"
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
