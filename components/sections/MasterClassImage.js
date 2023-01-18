import React from "react";
import MasterClassBlurBox from "../elements/MasterClassBlurBox";
import styles from "/styles/MasterClassImage.module.css";

const MasterClassImage = () => {
  return (
    <div className={styles.wrapper}>
      <MasterClassBlurBox />
    </div>
  );
};

export default MasterClassImage;
