import { Component, PropsWithChildren } from "react";
import Taro from "@tarojs/taro";
import "./app.styl";

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  onLaunch(options) {
    // 展示本地存储能力
    var logs = Taro.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    Taro.setStorageSync("logs", logs);

    Taro.login().then(() => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
    });
  }

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
