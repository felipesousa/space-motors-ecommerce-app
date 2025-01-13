
import React from "react";
import { SpaceMotorsFeaturedCard } from "../space-motors-featured-card/space-motors-featured-card";

import styles from './space-motors-featured-section.module.scss';

import ImageOne from '../../assets/image-one.png';
import ImageTwo from '../../assets/image-two.png';
import ImageThree from '../../assets/image-three.png';
import ImageFour from '../../assets/image-four.png';
import ImageFive from '../../assets/image-five.png';
import ImageSix from '../../assets/image-six.png';

export interface SpaceMotorsFeaturedSectionProps {
    className?: string;
}

export const SpaceMotorsFeaturedSection = (): JSX.Element => {
  return (
    <div className={styles["hero-section"]}>
      <header className={styles.header}>
        <div className={styles["text-wrapper"]}>Featured Space Cars</div>

        <div className={styles["text-wrapper-2"]}>Drive Into The Future</div>
      </header>

      <div className={styles["frame-2"]}>
        <SpaceMotorsFeaturedCard
          className={styles["project-card-instance"]}
          imagePlaceholder={ImageOne}
          title="Star Chaser X1"
          price="$68,000"
          label="Favourite"
        />
        <SpaceMotorsFeaturedCard
          className={styles["project-card-2"]}
          imagePlaceholder={ImageTwo}
          title="Solar Glide 5000"
          price="$32,700"
          label="Hot Deal"
        />
        <SpaceMotorsFeaturedCard
          className={styles["project-card-4"]}
          imagePlaceholder={ImageThree}
          title="Nova Pulse"
          price="$95,000"
          label="Hot Deal"
        />
        <SpaceMotorsFeaturedCard
          className={styles["project-card-6"]}
          imagePlaceholder={ImageFour}
          title="Quasar Cruiser F4"
          price="$66,500"
          label="Hot Deal"
        />
        <SpaceMotorsFeaturedCard
          className={styles["project-card-8"]}
          imagePlaceholder={ImageFive}
          title="Eclipse V2"
          price="$108,000"
          label="New"
        />
        <SpaceMotorsFeaturedCard
          className={styles["project-card-10"]}
          imagePlaceholder={ImageSix}
          title="Lunar Rover MK-II"
          price="$99,560"
          label="Hot Deal"
        />
      </div>
    </div>
  );
};
