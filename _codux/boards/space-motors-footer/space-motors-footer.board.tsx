import { createBoard } from '@wixc3/react-board';
import { SpaceMotorsFooter } from '../../../src/components/space-motors-footer/space-motors-footer';

export default createBoard({
    name: 'SpaceMotorsFooter',
    Board: () => <SpaceMotorsFooter />,
    environmentProps: {
        windowWidth: 434.49877969133473,
    },
});
