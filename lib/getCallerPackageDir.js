'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , fs = require('fs')
    , path = require('path')
    
    /* NPM */
    
    /* in-package */
    , getCaller = require('./getCaller')
    ;

// Find home directory of the package in which the caller is located.
module.exports = function() {
    let pathname = getCaller(1).filename;
    let dirname = path.dirname(pathname);
    while (!fs.existsSync(path.join(dirname, 'package.json'))) {
        let parentDirname = path.dirname(dirname);
        if (parentDirname === dirname) {
            throw new Error('Module not located in any node.js package: ' + pathname);
        }
        else {
            dirname = parentDirname;
        }
    }
    return dirname;
};