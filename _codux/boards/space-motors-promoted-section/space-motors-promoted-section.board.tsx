import { createBoard } from '@wixc3/react-board';
import { SpaceMotorsPromotedSection } from '../../../src/components/space-motors-promoted-section/space-motors-promoted-section';

export default createBoard({
    name: 'SpaceMotorsPromotedSection',
    Board: () => <SpaceMotorsPromotedSection />,
    environmentProps: {
        windowWidth: 1050,
    },
});
