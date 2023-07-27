import React, { CSSProperties, ReactNode } from "react";

import styles from "../styles/PhoneFrame.module.css";

interface PhoneFrameProps {
  children?: ReactNode;
  insideScreenStyles?: CSSProperties;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = (props) => {
  return (
    <div style={{ width: "30%" }}>
      <div className={styles["iphone-14"]}>
        <div className={styles["iphone-14-content"]}>
          <div className={styles["notch"]}>
            <div className={styles["camera"]}></div>
          </div>
          <div className={styles["sleep"]}></div>
          <div className={styles["volume"]}></div>
          <div className={styles["overflow"]}>
            <div className={styles["shadow shadow--tr"]}></div>
            <div className={styles["shadow shadow--tl"]}></div>
            <div className={styles["shadow shadow--br"]}></div>
            <div className={styles["shadow shadow--bl"]}></div>
          </div>
          <div className={styles["screen"]}>
            {/* inside the phone frame */}
            <div style={props.insideScreenStyles}>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
