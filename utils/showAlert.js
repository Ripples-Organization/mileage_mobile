import React, { useContext } from "react";
import { Toast } from "native-base";

const ShowAlert = (msg, type) => {
  Toast.show({
    text: msg,
    textStyle: { color: type == "error" ? "red" : "yellow" },
    duration: 4000,
  });
};

export default ShowAlert;