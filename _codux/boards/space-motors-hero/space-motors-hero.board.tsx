import { createBoard } from '@wixc3/react-board';
import { SpaceMotorsHero } from '../../../src/components/space-motors-hero/space-motors-hero';

export default createBoard({
    name: 'SpaceMotorsHero',
    Board: () => <SpaceMotorsHero />,
    environmentProps: {
        windowHeight: 841.4617421501497,
        windowWidth: 1510.6070722097393,
    },
});
