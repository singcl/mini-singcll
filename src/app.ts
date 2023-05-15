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
    Taro.getSetting({
      success: (res) => {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          Taro.getUserInfo({
            success: (info) => {
              console.log("-----userinfo", info);
            },
          });
        }
      },
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
