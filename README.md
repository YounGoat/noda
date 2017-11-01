#	noda
__NOde Developing Assistant__

##	Table of contents

*	[Get Started](#get-started)
*	[API](#api)
* 	[Examples](#examples)
*	[Why noda](#why-noda)
*	[Honorable Dependents](#honorable-dependents)
*	[About](#about)
*	[References](#references)

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
0.  The phrase "current package" refers to the NPM package which contains the nodejs file where code `noda.*` located.
0.  Parameter `subpath` refers to pathname relative to the basepath of "current package".

*	__noda.currentPackage__()  
    Return the object parsed from package.json which belongs to current package.

*	__noda.inExists__(*string* subpath)  
    Judge whether file or directory exists.  
    This method is __synchronuous__.

*	__noda.inRead__(*string* subpath [, *string* encoding, *boolean* nullIfNotFound ])  
    Read content of file.

*	__noda.inRequire__(*string* subpath)  
    Require js or json.

*	__noda.inRequireDir__(*string* dirname, *Array* ignores)  
    Based on requireDir(), but the dirname is regarded as relative path to home directory of the package in which the caller is located. 
    
    __ignores__ includes those that SHOULD NOT be required. If `'*/'` contained in __ignores__, all sub directories will not be required whether or not *index.js* exists in the sub directories. If `'*'` contained in __ignores__, all .js files will not be required.

*	__noda.inResolve__(*string* subpath)  
    Resolve the subpath into an absolute path.

*	__noda.osRequire__(*string* dirname)  
    Require module whose name is same with the name of current platform. Relative __dirname__ is acceptable.

*	__noda.requireDir__(*string* dirname, *Array* excludes)  
    Read the directory and require all javascript modules except those excluded, and returned them in an object with keys equal to modules' name. Relative __dirname__ is acceptable.

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

##  Why *noda*

##  Honorable Dependents

##  About

##  References
