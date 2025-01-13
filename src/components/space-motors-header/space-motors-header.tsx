import React from 'react';

import styles from './space-motors-header.module.scss';
import LogoIconPng from '../../assets/logo icon.png';

import { Button } from "../space-motors-button/space-motors-button";

export interface SpaceMotorsHeaderProps {
    className?: string;
}

export const SpaceMotorsHeader = (): JSX.Element => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img className={styles['logo-icon']} alt="Logo icon" src={LogoIconPng} />

                <p className={styles['nebula-motors']}>
                    <span className={styles['text-wrapper']}>Nebula</span>

                    <span className={styles.span}>Motors</span>
                </p>
            </div>

            <div className={styles['navigation-menu']}>
                <Button className={styles['button-instance']} text="Our Mission" type="tertiary" />
                <Button
                    className={styles['button-instance']}
                    text="Explore Vehicles"
                    type="secondary"
                />
                <Button className={styles['button-instance']} text="Cart" type="primary" />
            </div>
        </div>
    );
};
