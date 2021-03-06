#	noda
__NOde Developing Assistant__

__noda__ is a very lower-level package which will help you easily accessing files and directories in your package or adjacent to your Node.js file.

##	Table of contents

*	[Get Started](#get-started)
*	[API](#api)
* 	[Examples](#examples)

##	Links

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/noda)

##	Get Started

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

##	API

Before read APIs, please understand that
1.  The phrase "current package" refers to the NPM package which contains the nodejs file where code `noda.*` located.
1.  Parameter `subpath` refers to pathname relative to the basepath of "current package".
1.  Because all functions are synchronous, postfix `Sync` is omitted.
1.  For functions with name prefixed with preposition *in*, the scope is "current package". E.g. `noda.inRead()` will read a file in current package.
1.  For functions with name prefixed with preposition *next*, *up* and *down*, the scope is "current file". E.g. `noda.nextRead()` will read a file adjacent to current file.

*   __noda.bindings__(string *name*)  
    Require an addon.node.  
    This method is allowed to be required as `noda/bindings`.

*   __noda.packageOf__(string *id*, Object *module*)  
    Return the object parsed from package.json which belongs to the special package named *id* according to the view angle of special *module*.

*	__noda.currentPackage__()  
    Return the object parsed from package.json which belongs to current package.

*   __noda.count__()  
    Return how many times the function is called.  
    You may prevent code from being executed duplicatedly by this funciton. E.g.
    ```javascript
    if (noda.count() == 1) {
        // DO SOMETHING ONLY ONCE.
    }

    if (noda.count() <= 2) {
        // DO SOMETHING ONLY TWICE.
    }
    ```

*	__noda.inExists__(string *subpath*, boolean *resolveAsModule*)  
    Judge whether file or directory exists. If __resolveAsModule__ set `true`, __subpath__ will be tentatively regarded as JS/JSON module path in the current package when the exact file not exists.
    This method is __synchronuous__.

*	__noda.inRead__(string *subpath* [, string *encoding*, boolean *nullIfNotFound* ])  
    Read content of file.

*	__noda.inReaddir__(string *subpath*)  
    Read the contents of a directory.

*	__noda.inRequire__(string *subpath*)  
    Require js or json.

*	__noda.inRequireDir__(string *dirname*, Array | string *ignores*)  
    Based on requireDir(), but the dirname is regarded as relative path to home directory of the package in which the caller is located.  
    __ignores__ includes those that SHOULD NOT be required. If `'*/'` contained in __ignores__, all sub directories will not be required whether or not *index.js* exists in the sub directories. If `'*'` contained in __ignores__, all .js files will not be required.

*	__noda.inResolve__(string *subpath*)  
    Resolve the subpath into an absolute path.

*   __noda.nextRead__(string *subpath* [, string *encoding*, boolean *nullIfNotFound* ])  
    Read content of file.

*	__noda.osRequire__(string *dirname*)  
    Require module whose name is same with the name of current platform. Relative __dirname__ is acceptable.

*	__noda.requireDir__(string *dirname*, Array | string *ignores*)  
    Read the directory and require all javascript modules except those excluded, and returned them in an object with keys equal to modules' name. Relative __dirname__ is acceptable.  
    ATTENTION：__Directory "node_modules" is always ignored whether or not it is explictly added in `ignores`.__
 
*   __noda.upResolve__(string *pathname*)  
    Find sub-directory or file in ascent directory and return the full path.

*   __noda.downResolve__(string *pathname* [, number *depth*, string *order* ])  
    Find sub-directory or file in descent directory and return the full path.
    The value of *order* may be `DFS` (means depth-first search) or `BFS` (means breadth-first search).

*   __noda.existsInPackage__  
    Alias of `noda.inExists`.

*   __noda.readInPackage__  
    Alias of `noda.inRead`.

*   __noda.requireInPackage__  
    Alias of `noda.inRequire`.

*   __noda.requireDirInPackage__  
    Alias of `noda.inRequireDir`.

*   __noda.resolveInPackage__  
    Alias of `noda.inResolve`.

##  Examples

Suppose that there is an NPM package named *ching*:

```code
+ ching
  + bin
  + command
  + lib
  + node_modules
  + util
  . CHANGELOG.md
  . conf.js
  . index.js
  . package.json
  . README.md
```

Let's see what __noda__ can do.

```javascript
// FILE: ching/command/init/index.js
const noda = require('noda');

// Read ching/package.json and return the parsed JSON object.
noda.currentPackage();

// Require ching/util/rc.js and return.
noda.inRequire('util/rc');
```
