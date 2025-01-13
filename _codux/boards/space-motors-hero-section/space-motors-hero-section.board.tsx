import { createBoard } from '@wixc3/react-board';
import { SpaceMotorsHeroSection } from '../../../src/components/space-motors-hero-section/space-motors-hero-section';

export default createBoard({
    name: 'SpaceMotorsHeroSection',
    Board: () => <SpaceMotorsHeroSection />,
    environmentProps: {
        windowWidth: 1510,
    },
});
