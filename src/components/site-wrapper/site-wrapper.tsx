import classNames from 'classnames';
import styles from './site-wrapper.module.scss';
import { SpaceMotorsHeader } from '../space-motors-header/space-motors-header';
import { SpaceMotorsHeroSection } from '../space-motors-hero-section/space-motors-hero-section';
import { SpaceMotorsFeaturedSection } from '../space-motors-featured-section/space-motors-featured-section';
import { SpaceMotorsPromotedSection } from '../space-motors-promoted-section/space-motors-promoted-section';
import { SpaceMotorsFooter } from '../space-motors-footer/space-motors-footer';

export interface SiteWrapperProps {
    className?: string;
    children?: React.ReactNode;
}

export const SiteWrapper = ({ className, children }: SiteWrapperProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <SpaceMotorsHeader />
            <SpaceMotorsHeroSection />
            <SpaceMotorsFeaturedSection />
            <SpaceMotorsPromotedSection />
            <SpaceMotorsFooter />
        </div>
    );
};
