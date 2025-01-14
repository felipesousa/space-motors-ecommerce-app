import React from "react";

import styles from './space-motors-promoted-section.module.scss';

import { Button } from "../space-motors-button/space-motors-button";

import FeaturedImageOne from '../../assets/featured-image-one.png';
import FeaturedImageTwo from '../../assets/featured-image-two.png';

export interface SpaceMotorsPromotedSectionProps {
    className?: string;
}

export const SpaceMotorsPromotedSection = (): JSX.Element => {
  return (
    <div className={styles.frame}>
      <div className={styles["hero-section"]} style={{
            background: `center / cover no-repeat url("${FeaturedImageOne}")`,
        }}>
        <header className={styles.header} >
          <div className={styles.div}>
            <div className={styles["text-wrapper"]}>Built to Explore</div>

            <div className={styles["div-wrapper"]}>
              <div className={styles["text-wrapper-2"]}>From $44,600</div>
            </div>
          </div>

          <div className={styles["div-2"]}>
            <div className={styles["text-wrapper-3"]}>$299/mo Leasing</div>

            <div className={styles["CT-as"]}>
              <Button
                className={styles["button-instance"]}
                text="Order Model X1"
                type="primary"
              />
            </div>
          </div>
        </header>
      </div>

      <div className={styles["hero-section"]} style={{
            background: `center / cover no-repeat url("${FeaturedImageTwo}")`,
        }}>
        <header className={styles.header}>
          <div className={styles.div}>
            <div className={styles["text-wrapper"]}>Built to Explore</div>

            <div className={styles["div-wrapper"]}>
              <div className={styles["text-wrapper-2"]}>From $44,600</div>
            </div>
          </div>

          <div className={styles["div-2"]}>
            <div className={styles["text-wrapper-3"]}>$299/mo Leasing</div>

            <div className={styles["CT-as"]}>
              <Button
                className={styles["button-instance"]}
                text="Order Model X1"
                type="primary"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
