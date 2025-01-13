import { createBoard } from '@wixc3/react-board';
import { SpaceMotorsFeaturedSection } from '../../../src/components/space-motors-featured-section/space-motors-featured-section';

export default createBoard({
    name: 'SpaceMotorsFeaturedSection 1',
    Board: () => <SpaceMotorsFeaturedSection />,
    environmentProps: {
        windowWidth: 1082,
        windowHeight: 896,
    },
});
