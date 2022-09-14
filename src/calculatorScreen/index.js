import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Button from "../components/button";
import Column from "../components/column";

import { useDispatch, useSelector } from "react-redux";
import {
  loadButtons,
  loadAns,
  loadBackspace,
  loadClear,
  loadValidation,
} from "../../redux/actions/index";

const Calculator = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.calculatorReducer);
  // const lastChar = myState.number.slice(-1);

  // useEffect(() => {
  //   console.log(myState);
  //   console.log(myState.number);
  //   console.log(lastChar);
  //   console.log("useEffect ends here");
  // });
  //const [value, setValue] = useState("");

  const liveResultCheck = () => {
    dispatch(loadAns());
  };
  return (
    <View style={styles.container}>
      <View style={styles.value}>
        {/* <TextInput
          style={{ fontSize: 50, marginRight: 10, marginTop: 200 }}
          value={myState.number}
          selectionColor="#26cc00"
          showSoftInputOnFocus={false}
          //editable={false}
          color="white"
        /> */}
        <Text
          style={{
            fontSize: 50,
            marginRight: 10,
            marginTop: 200,
            color: "white",
          }}
        >
          {myState.number}
        </Text>
        <Text style={styles.result}>{myState.ans}</Text>
      </View>
      <View style={styles.keypad}>
        <Column>
          <Button
            textStyle={{ color: "#26cc00" }}
            text="C"
            onPress={() => dispatch(loadClear())}
          />
          <Button
            text="7"
            onPress={() => {
              dispatch(loadButtons(7));
              liveResultCheck();
            }}
          />
          <Button
            text="4"
            onPress={() => {
              dispatch(loadButtons(4));
              liveResultCheck();
            }}
          />
          <Button
            text="1"
            onPress={() => {
              dispatch(loadButtons(1));
              liveResultCheck();
            }}
          />
          <Button
            text="%"
            onPress={() => {
              //dispatch(loadButtons("%"));
              dispatch(loadValidation("%"));
            }}
          />
        </Column>
        <Column>
          <Button
            textStyle={{ color: "#26cc00" }}
            text="÷"
            onPress={() => {
              dispatch(loadValidation("/"));
              //dispatch(loadButtons("/"));
            }}
          />
          <Button
            text="8"
            onPress={() => {
              dispatch(loadButtons("8"));
              liveResultCheck();
            }}
          />
          <Button
            text="5"
            onPress={() => {
              dispatch(loadButtons("5"));
              liveResultCheck();
            }}
          />
          <Button
            text="2"
            onPress={() => {
              dispatch(loadButtons("2"));
              liveResultCheck();
            }}
          />
          <Button
            text="0"
            onPress={() => {
              //dispatch(loadButtons("0"));
              dispatch(loadValidation("0"));
              if (myState.number.length != 0) {
                liveResultCheck();
              }
            }}
          />
        </Column>
        <Column>
          <Button
            textStyle={{ color: "#26cc00" }}
            text="×"
            onPress={() => {
              dispatch(loadValidation("*"));
              //dispatch(loadButtons("*"));
            }}
          />
          <Button
            text="9"
            onPress={() => {
              dispatch(loadButtons("9"));
              liveResultCheck();
            }}
          />
          <Button
            text="6"
            onPress={() => {
              dispatch(loadButtons("6"));
              liveResultCheck();
            }}
          />
          <Button
            text="3"
            onPress={() => {
              dispatch(loadButtons("3"));
              liveResultCheck();
            }}
          />
          <Button
            text="."
            onPress={() => {
              //dispatch(loadButtons("."));
              dispatch(loadValidation("."));
            }}
          />
        </Column>
        <Column>
          <Button
            textStyle={{ color: "#26cc00", fontSize: 25 }}
            text="⌫"
            onPress={() => {
              dispatch(loadBackspace());
              const last = myState.number.slice(0, -1);
              const last2 = last.slice(-1);
              if (
                last2 == "+" ||
                last2 == "-" ||
                last2 == "/" ||
                last2 == "*" ||
                last2 == ""
              ) {
              } else {
                liveResultCheck();
              }
            }}
          />
          <Button
            textStyle={{ color: "#26cc00", fontSize: 40 }}
            text="–"
            onPress={() => {
              dispatch(loadValidation("-"));
              //dispatch(loadButtons("-"));
            }}
          />
          <Button
            textStyle={{ color: "#26cc00", fontSize: 40 }}
            text="+"
            onPress={() => {
              dispatch(loadValidation("+"));
              //dispatch(loadButtons("+"));
            }}
          />
          <Button
            textStyle={{ fontSize: 50 }}
            buttonStyle={{
              flex: 1,
              //height: 140,
              backgroundColor: "#26cc00",
              borderRadius: 10,
              width: 60,
              marginLeft: 15,
              marginTop: 10,
              marginBottom: 10,
            }}
            text="="
            onPress={() => {
              dispatch(loadAns());
              liveResultCheck();
            }}
          />
        </Column>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  value: {
    height: "50%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  keypad: {
    height: "50%",
    flexDirection: "row",
    backgroundColor: "#252525",
  },
  result: { color: "#9c9c9c", fontSize: 30, marginRight: 10 },
});

export default Calculator;
