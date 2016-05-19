## Dreambox

Available strategies are listed in [here](https://www.npmjs.com/package/catbox#installation)

For e.g. `memory` strategy,

```
$ npm install catbox-memory --save
```

Then in your code,

```js
const cache = new Dreambox('memory', { segment: 'january', ttl: 10000 });
await cache.set('hurray', { hiphip: 'Yay!' });
const stored = await cache.get('hurray');
console.log(stored);
// { item: { hiphip: 'Yay!' }, stored: 1463699257301, ttl: 98000 }
```

## Credits

Copyright © 2016 Dhi Aurrahman
