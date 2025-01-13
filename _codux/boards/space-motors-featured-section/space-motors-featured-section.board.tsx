import { createBoard } from '@wixc3/react-board';
import { SpaceMotorsFeaturedSection } from '../../../src/components/space-motors-featured-section/space-motors-featured-section';

export default createBoard({
    name: 'SpaceMotorsFeaturedSection',
    Board: () => <SpaceMotorsFeaturedSection />,
    environmentProps: {
        windowHeight: 1081,
        windowWidth: 1642,
    },
});
