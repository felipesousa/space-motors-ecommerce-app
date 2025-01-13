import React from "react";

import styles from './space-motors-featured-card.module.scss';

import imagePlaceholder from "./image-placeholder-1.png";


interface Props {
  imagePlaceholder: string;
  title: string;
  label: string;
  price: string;
  className: any;
}

export const SpaceMotorsFeaturedCard = ({
  imagePlaceholder,
  className,
  title,
  label,
  price,
}: Props): JSX.Element => {
  return (
    <div className={`${styles["project-card"]} ${className}`}>
      <img
        className={styles["image-placeholder"]}
        alt="Image placeholder"
        src={imagePlaceholder}
      />

      <div className={styles.text}>
        <div className={styles.frame}>
          <div className={styles["text-wrapper"]}>{title}</div>

          <div className={styles.div}>{price}</div>
        </div>
      </div>

      {/* {hasAlert && (
        <div className={styles["frame-2"]}>
          <div className={styles["text-wrapper-2"]}>Hot Deal</div>

          <AlertIcons
            className={styles["alert-icons-instance"]}
            property1="fire"
          />
        </div>
      )} */}
    </div>
  );
};