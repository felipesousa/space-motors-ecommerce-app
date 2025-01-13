import { createBoard } from '@wixc3/react-board';
import { SpaceMotorsFeaturedCard } from '../../../src/components/space-motors-featured-card/space-motors-featured-card';

export default createBoard({
    name: 'SpaceMotorsFeaturedCard 1',
    Board: () => <SpaceMotorsFeaturedCard />,
});
