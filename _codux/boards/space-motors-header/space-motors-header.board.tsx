import { createBoard } from '@wixc3/react-board';
import { SpaceMotorsHeader } from '../../../src/components/space-motors-header/space-motors-header';

export default createBoard({
    name: 'SpaceMotorsHeader',
    Board: () => <SpaceMotorsHeader />,
});
