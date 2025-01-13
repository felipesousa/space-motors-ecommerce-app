import React from 'react';

import styles from './space-motors-footer.module.scss';
import LogoPng from '../../assets/logo.png';
import GithubSvg from '../../assets/svg/github.svg';
import YoutubeSvg from '../../assets/svg/youtube.svg';
import TwitterxSvg from '../../assets/svg/twitterx.svg';
import DiscordSvg from '../../assets/svg/discord.svg';

export interface SpaceMotorsFooterProps {
    className?: string;
}

export const SpaceMotorsFooter = (): JSX.Element => {
    return (
        <div className={styles.footer}>
            <div className={styles.frame}>
                <img className={styles.logo} alt="Logo" src={LogoPng} />

                <p className={styles['element-anima-landing']}>
                    Pioneering the future of transportation with cutting-edge space vehicles.
                </p>
            </div>

            <div className={styles.div}>
                <div className={styles['text-wrapper']}>© Nebula Motors</div>

                <div className={styles['social-links']}>
                    <a href="https://www.youtube.com/c/Animaapp" rel="noopener noreferrer" target="_blank">
                        <img className={styles['social-icons']} alt="Social icons" src={YoutubeSvg} />
                    </a>

                    <a href="https://www.instagram.com/animaapp/" rel="noopener noreferrer" target="_blank">
                        <img className={styles['social-icons']} alt="Social icons" src={GithubSvg} />
                    </a>

                    <a
                        className={styles['vector-wrapper']}
                        href="https://github.com/AnimaApp"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img className={styles.vector} alt="Vector" src={TwitterxSvg} />
                    </a>

                    <a href="https://www.linkedin.com/company/anima-app" rel="noopener noreferrer" target="_blank">
                        <img className={styles['social-icons']} alt="Social icons" src={DiscordSvg} />
                    </a>
                </div>
            </div>
        </div>
    );
};
