import React from "react";
import { View, Modal, ModalProps } from "react-native";

import { styles } from "./styles";

interface Props extends ModalProps {}
export function DuoMatch() {
  return (
    <Modal>
      <View style={styles.container}></View>
    </Modal>
  );
}
