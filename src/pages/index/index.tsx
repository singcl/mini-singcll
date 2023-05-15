import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtAvatar } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/loading.scss";
import "taro-ui/dist/style/components/avatar.scss";
import styles from "./index.module.styl";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className={styles.container}>
        <View className={styles.avatar}>
          <AtAvatar
            size="large"
            circle
            openData={{ type: "userAvatarUrl" }}
            image="https://jdc.jd.com/img/200"
          ></AtAvatar>
        </View>
        <view className={styles.list}>
          <View className={styles.list__item}>
            <AtButton type="primary">主按钮</AtButton>
          </View>
          <View className={styles.list__item}>
            <AtButton type="secondary">次文案</AtButton>
          </View>
          <View className={styles.list__item}>
            <AtButton loading type="primary">
              Loading按钮
            </AtButton>
          </View>
          <View style={{ textAlign: "center", marginTop: "5px" }}>
            <Text style={{ color: "#999" }}>https://imcoco.top</Text>
          </View>
        </view>
      </View>
    );
  }
}
