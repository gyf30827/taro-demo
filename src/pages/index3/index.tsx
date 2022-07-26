import { useState, useRef, useEffect } from "react";
import { View, Text, Input } from "@tarojs/components";
import "./index.scss";

export default () => {
  const [value, setValue] = useState("");

  return (
    <View>
      <Text>ref</Text>
      <Input
        value={value}
        onInput={(e) => {
          // @ts-ignore
          let inputRef = e.target.children[0];
          let val = e.detail.value;
          val = val.length > 3 ? val.substring(0, 3) : val;
          setValue(val);
          if (inputRef) {
            inputRef.value = val;
          }
          return val;
        }}
      ></Input>
    </View>
  );
};
