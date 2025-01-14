import classNames from 'classnames';
import styles from './site-wrapper.module.scss';

import { Cart } from '~/src/components/cart/cart';
import { SpaceMotorsHeader } from '../space-motors-header/space-motors-header';
import { SpaceMotorsFooter } from '../space-motors-footer/space-motors-footer';

export interface SiteWrapperProps {
    className?: string;
    children?: React.ReactNode;
}

export const SiteWrapper = ({ className, children }: SiteWrapperProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <SpaceMotorsHeader />
            <div className={styles.content}>{children}</div>
            <SpaceMotorsFooter />
            <Cart />
        </div>
    );
};
