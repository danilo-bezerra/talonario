import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function LocationBox() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const date = new Date();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  console.log(location?.coords.latitude, location?.coords.longitude);

  console.log(
    `${date.getDate()}/${String(date.getMonth() + 1).padStart(
      "2",
      "0"
    )}/${date.getFullYear()}`
  );

  console.log(
    `${String(date.getHours()).padStart("2", "0")}:${String(
      date.getMinutes()
    ).padStart("2", "0")}:${String(date.getSeconds()).padStart("2", "0")}`
  );
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
