import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  state = {
    value: "11",
  };

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Input
          value={this.state.value}
          onInput={(e) => {
            let val = e.detail.value;
            // @ts-ignore
            let inputRef = e.target.children[0];
            val = val.length > 3 ? val.substring(0, 3) : val;
            this.setState({ value: val });
            if (inputRef) {
              console.log(22222);
              inputRef.value = val;
            }
            return val;
          }}
        ></Input>
      </View>
    );
  }
}
