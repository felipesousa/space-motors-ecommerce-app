import React from 'react';

import styles from './space-motors-hero-section.module.scss';
import { Button } from '../space-motors-button/space-motors-button';
import HeaderPng from '../../assets/header.png';

export interface SpaceMotorsHeroSectionProps {
    className?: string;
}

export const SpaceMotorsHeroSection = (): JSX.Element => {
    return (
        <div className={styles['hero-section']}>
            <div className={styles.header}>
                <div className={styles.div}>
                    <div className={styles['text-wrapper']}>Zero Gravity, Zero Emissions</div>

                    <p className={styles.p}>
                        Revolutionary space cars built for zero-gravity adventures, stellar terrains, and cosmic
                        commutes. Start your journey today.
                    </p>
                </div>

                <div className={styles['CT-as']}>
                    <Button className={styles['button-instance']} text="Shop Now" type="primary" />
                </div>
            </div>

            <img className={styles.keemun} alt="Keemun" src={HeaderPng} />
        </div>
    );
};
