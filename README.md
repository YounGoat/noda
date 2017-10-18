#   noda
__NOde Developing Assistant__

```javascript
const noda = require('noda');

const foo = noda.inRequire('util/foo');
// require <homedir>/util/foo.js
// Here <homedir> is home directory of current node.js package(module).

const bar = noda.osRequire('./foo/bar');
// require ./foo/bar/<platform>.js
// Here platform equals to the returned value of os.platform().

const lib = noda.requireDir('./lib');
// require all sub modules in ./lib and return a hash object
```
