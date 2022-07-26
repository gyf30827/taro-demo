import { useState, useRef, useEffect } from "react";
import { View, Text, Input } from "@tarojs/components";
import "./index.scss";

export default () => {
  const ref = useRef<string>("");
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   if (ref.current !== value) {
  //     console.log(1, ref.current, 2, value);
  //     setValue(ref.current);
  //   }
  // }, [value]);
  return (
    <View>
      <Text>Hello world!</Text>
      <Input
        value={value}
        onInput={(e) => {
          let val = e.detail.value;
          val = val.length > 3 ? val.substring(0, 3) : val;
          ref.current = val;
          console.log(val);
          if (val !== e.detail.value) {
            setValue(val + " ");
          }
          setTimeout(() => {
            setValue(val);
          });
          return val;
        }}
      ></Input>
    </View>
  );
};
