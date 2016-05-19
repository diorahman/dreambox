import test from 'ava';
import Dreambox from '../lib';

test('Yay!', async (t) => {
    const cache = new Dreambox(),
        item = { haha: 'HOHO' };

    await cache.set('hihi', item);
    let stored = await cache.get('hihi');
    t.deepEqual(stored.item, item);
    t.true(stored.ttl > 0);
});
