import { createBoard } from '@wixc3/react-board';
import { SpaceMotorsFooter } from '../../../src/components/space-motors-footer/space-motors-footer';

export default createBoard({
    name: 'SpaceMotorsFooter',
    Board: () => <SpaceMotorsFooter />,
    environmentProps: {
        windowWidth: 427,
        windowHeight: 640,
    },
    isSnippet: true,
});
